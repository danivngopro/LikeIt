import { Image } from './images.interface';
import { imageModel } from './images.model';

export class ImageRepository {
  static incrementLikeByid(imageId: string, valueToAdd): Promise<Image | null> {
    return imageModel.findOneAndUpdate({ imageId }, { $inc : { 'likes' : valueToAdd } }, { new: true }).exec();
  }

  static incrementDisLikeByid(imageId: string, valueToAdd): Promise<Image | null> {
    return imageModel.findOneAndUpdate({ imageId }, { $inc : { 'dislikes' : valueToAdd } }, { new: true }).exec();
  }

  static getall(): Promise<Image[]> {
    return imageModel.find().exec();
  }

  static create(imageId: string): Promise<Image> {
    return imageModel.create({ imageId, likes: 0, dislikes: 0 });
  }

}
