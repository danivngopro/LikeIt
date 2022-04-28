import { Image } from './images.interface';
import { imageModel } from './images.model';

export class ImageRepository {
  static incrementLikeByid(id: number, valueToAdd): Promise<Image | null> {
    return imageModel.findOneAndUpdate({ id }, { $inc : { 'likes' : valueToAdd } }, { new: true }).exec();
  }

  static incrementDisLikeByid(id: number, valueToAdd): Promise<Image | null> {
    return imageModel.findOneAndUpdate({ id }, { $inc : { 'dislikes' : valueToAdd } }, { new: true }).exec();
  }

  static getall(): Promise<Image[]> {
    return imageModel.find().exec();
  }

  static create(id: number): Promise<Image> {
    return imageModel.create({ imageId: id, likes: 0, dislikes: 0 });
  }

}
