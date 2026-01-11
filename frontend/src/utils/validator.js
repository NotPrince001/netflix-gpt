import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      "Password must contain uppercase, lowercase and number"
    ),
});

export const signupSchema = yup.object({
  fullName: yup.string().required("Full name is required"),

  email: yup.string().required("Email is required").email("Email is not valid"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
      "Password must contain uppercase, lowercase and number"
    ),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});
