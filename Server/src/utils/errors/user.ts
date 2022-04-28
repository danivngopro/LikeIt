import { ImageError } from './errors';

export class ValidationError extends ImageError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class IdInvalidError extends ImageError {
  /* istanbul ignore next */
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}
/* istanbul ignore next */
export class ImagenameInvalidError extends ImageError {
  constructor(message = 'imagename is invalid') {
    super(message, 400);
  }
}
export class ImageNotFound extends ImageError {
  constructor() {
    super('image not found', 404);
  }
}