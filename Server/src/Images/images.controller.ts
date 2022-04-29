import { Request, Response } from 'express';
import { ImageManager } from './images.manager';

export class ImageController {

  static async getall(_req: Request, res: Response): Promise<void> {
    res.json(await ImageManager.getall());
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    res.json(await ImageManager.getById(id));
  }

  static async updateByid(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { like, user } = req.body;
    res.json(await ImageManager.updateByid(id, like, user));
  }

}
