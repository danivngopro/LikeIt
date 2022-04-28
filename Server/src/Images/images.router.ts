import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { ImageController } from './images.controller';
import { getByimageIdSchema, updateByimageIdSchema } from './validator/images.schema';


const imagesRouter: Router = Router();

imagesRouter.get('/', ValidateRequest(getByimageIdSchema), wrapAsync(ImageController.getall));
imagesRouter.put('/id/:id', ValidateRequest(updateByimageIdSchema), wrapAsync(ImageController.updateByid));

export { imagesRouter as imageRouter };
