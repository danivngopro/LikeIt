/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImageRepository } from './images.repository';
import { Image } from './images.interface';
import { ImageNotFound } from '../utils/errors/user';

export class ImageManager {
  static async getall(): Promise<Image[]> {
    const images = await ImageRepository.getall();
    if (!images) throw new ImageNotFound;
    return images;
  }

  static async updateByid(imageId: string, inc: boolean, like: boolean): Promise<Image> {
    let image;

    if (like && inc) image = await ImageRepository.incrementLikeByid(imageId, 1);
    else if (like && !inc) image = await ImageRepository.incrementLikeByid(imageId, -1);
    else if (!like && inc) image = await ImageRepository.incrementDisLikeByid(imageId, 1);
    else image = await ImageRepository.incrementDisLikeByid(imageId, -1);

    if (!image) {
      await ImageRepository.create(imageId);
      return this.updateByid(imageId, inc, like);
    }
    return image;
  }
}
