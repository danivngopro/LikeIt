import * as Joi from 'joi-oid';


const imageIdSchema = {
  id: Joi.number(),
};

const imageBodySchema = {
  inc: Joi.boolean(),
  like: Joi.boolean(),
};

export const updateByimageIdSchema = Joi.object({
  body: imageBodySchema,
  query: {},
  params: imageIdSchema,
});

export const getByimageIdSchema = Joi.object({
  body: {},
  query: {},
  params: {},
});


