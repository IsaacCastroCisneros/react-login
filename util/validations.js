import Joi from 'joi'

export const signUp = Joi.object({
    userName: Joi.string().min(5).max(16).required().regex(/^[_a-zA-Z0-9]*$/m).messages({
      "string.empty": `user name field cant be blank`,
      "any.required": `user name is require`,
      "string.min": `user name must be have 5 characters at least`,
      "string.max": `user name must be have 16 characters as max`,
      "string.pattern.base": `Username can only contain A-Z, 0-9 and _`,
    }),
    password: Joi.string().min(6).max(50).required().regex(/[0-9]/).regex(/[*_/+-]/).messages({
      "string.empty": `password field cant be blank`,
      "any.required": `password is require`,
      "string.min": `password must be have 6 characters at least`,
      "string.max": `password must be have 16 characters as max`,
      "string.pattern.base": `password must be contain at least one 0-9 character and one of these characters *_/+-`,
    }),
  });