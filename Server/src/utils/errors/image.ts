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

export class ImageNotFound extends ImageError {
  constructor() {
    super('Image not found', 404);
  }
}

export class UserNotFound extends ImageError {
  constructor() {
    super('User not found', 404);
  }
}

export class HeirarchyNotFound extends ImageError {
  constructor() {
    super('Heirarchy not found', 404);
  }
}