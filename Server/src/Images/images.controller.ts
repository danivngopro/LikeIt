import { Request, Response } from 'express';
import { ImageManager } from './images.manager';

export class ImageController {

  static async getall(_req: Request, res: Response): Promise<void> {
    res.json(await ImageManager.getall());
  }

  static async updateByid(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { inc, like } = req.body;
    res.json(await ImageManager.updateByid(id as unknown as number, inc, like));
  }

}
