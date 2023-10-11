import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("last  Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
  subscribe: Yup.boolean(),
});
