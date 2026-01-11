const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email is not valid",
  }),

  password: Joi.string()
    .min(8)
    .required()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "string.pattern.base":
        "Password must contain uppercase, lowercase and number",
    }),
});

const signupSchema = Joi.object({
  fullName: Joi.string().required().messages({
    "string.empty": "Full name is required",
  }),

  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email is not valid",
  }),

  password: Joi.string()
    .min(8)
    .required()
    .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "string.pattern.base":
        "Password must contain uppercase, lowercase and number",
    }),

  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
    "string.empty": "Confirm password is required",
  }),
});

module.exports = { loginSchema, signupSchema };
