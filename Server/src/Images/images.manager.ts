/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImageRepository } from './images.repository';
import { Image } from './images.interface';
import { ImageNotFound } from '../utils/errors/user';
import { UserNotFound } from '../utils/errors/image';

export class ImageManager {
  static async getall(): Promise<Image[]> {
    const images = await ImageRepository.getall();
    if (!images) throw new ImageNotFound();
    return images;
  }

  static async didUserVote(
    image: Image,
    like: boolean,
    user: string,
  ): Promise<boolean> {
    let userToRemove = '';

    let isInLikers = false;
    image.likers.forEach((userId) => {
      if (user == userId) {
        isInLikers = true;
        userToRemove = userId;
      }
    });

    let isIndisLikers = false;
    image.dislikers.forEach((userId) => {
      if (user == userId) {
        isIndisLikers = true;
        userToRemove = userId;
      }
    });

    if (isInLikers && !like) {
      ImageRepository.incrementLikeByid(image.imageId, -1, user);
      await ImageRepository.removeUserFromLikers(image.imageId, userToRemove);
      return true;
    } else if (isIndisLikers && like) {
      ImageRepository.incrementDisLikeByid(image.imageId, -1, user);
      await ImageRepository.removeUserFromDisLikers(
        image.imageId,
        userToRemove,
      );
      return true;
    } else if (!isInLikers && !isIndisLikers) {
      return true;
    }
    return false;
  }

  static async updateByid(
    imageId: string,
    like: boolean,
    user: string,
  ): Promise<Image | null> {
    if (!user) throw UserNotFound;

    const image = await ImageRepository.getById(imageId);

    if (image) {
      const canAddLikes = await ImageManager.didUserVote(
        image as unknown as Image,
        like,
        user,
      );
      if (canAddLikes) {
        if (like) {
          return ImageRepository.incrementLikeByid(imageId, 1, user);
        } else {
          return ImageRepository.incrementDisLikeByid(imageId, 1, user);
        }
      } else return image;
    } else {
      await ImageRepository.create(imageId);
      return this.updateByid(imageId, like, user);
    }
  }

  static async getById(id: string): Promise<Image> {
    const image = await ImageRepository.getById(id);
    if (!image) throw ImageNotFound;
    return image;
  }
}
