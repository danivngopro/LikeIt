import { Router } from 'express';
import { imageRouter } from './Images/images.router';

const AppRouter: Router = Router();

AppRouter.use('/api/images', imageRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
