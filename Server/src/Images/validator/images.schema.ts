import * as Joi from 'joi-oid';


const imageIdSchema = {
  id: Joi.string(),
};

const imageBodySchema = {
  like: Joi.boolean(),
  user: Joi.string().allow(null, ''),
};

export const updateByimageIdSchema = Joi.object({
  body: imageBodySchema,
  query: {},
  params: imageIdSchema,
});

export const getAllSchema = Joi.object({
  body: {},
  query: {},
  params: {},
});

export const getByimageIdSchema = Joi.object({
  body: {},
  query: {},
  params: imageIdSchema,
});


