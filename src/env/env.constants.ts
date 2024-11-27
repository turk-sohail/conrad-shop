import * as Joi from 'Joi';

export const ENV_VALIDATION_SCHEMA = Joi.object({
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_NAME: Joi.string().required(),
  DB_URL: Joi.string().required(),
});
