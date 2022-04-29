import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { ImageController } from './images.controller';
import { getByimageIdSchema, updateByimageIdSchema, getAllSchema } from './validator/images.schema';


const imagesRouter: Router = Router();

imagesRouter.get('/', ValidateRequest(getAllSchema), wrapAsync(ImageController.getall));
imagesRouter.get('/id/:id', ValidateRequest(getByimageIdSchema), wrapAsync(ImageController.getById));
imagesRouter.put('/id/:id', ValidateRequest(updateByimageIdSchema), wrapAsync(ImageController.updateByid));

export { imagesRouter as imageRouter };
