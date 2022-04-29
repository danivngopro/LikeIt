import { Image } from './images.interface';
import { imageModel } from './images.model';

export class ImageRepository {
  static removeUserFromLikers(
    imageId: string,
    uid: string,
  ): Promise<Image | null> {
    return imageModel
      .findOneAndUpdate(
        { imageId },
        { $pull: { likers: uid } },
      )
      .exec();
  }

  static removeUserFromDisLikers(
    imageId: string,
    uid: string,
  ): Promise<Image | null> {
    return imageModel
      .findOneAndUpdate(
        { imageId },
        { $pull: { dislikers: uid } },
      )
      .exec();
  }

  static incrementLikeByid(
    imageId: string,
    valueToAdd: number,
    uid: string,
  ): Promise<Image | null> {
    return imageModel
      .findOneAndUpdate(
        { imageId },
        { $inc: { likes: valueToAdd }, $push: { likers: uid } },
        { new: true },
      )
      .exec();
  }

  static incrementDisLikeByid(
    imageId: string,
    valueToAdd: number,
    uid: string,
  ): Promise<Image | null> {
    return imageModel
      .findOneAndUpdate(
        { imageId },
        { $inc: { dislikes: valueToAdd }, $push: { dislikers: uid } },
        { new: true },
      )
      .exec();
  }

  static getall(): Promise<Image[]> {
    return imageModel.find().exec();
  }

  static create(imageId: string): Promise<Image> {
    return imageModel.create({ imageId, likes: 0, dislikes: 0 });
  }

  static getById(imageId: string): Promise<Image | null> {
    return imageModel.findOne({ imageId }).exec();
  }
}
