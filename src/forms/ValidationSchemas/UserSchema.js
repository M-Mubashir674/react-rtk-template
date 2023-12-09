import * as Yup from "yup";
export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter user name")
    .required("This field is required"),
  email: Yup.string()
    .required("Please enter user email")
    .required("This field is required"),
  password: Yup.string()
    .required("Please enter default password")
    .required("This field is required"),
});

export const UserInitialValues = {
  name: "",
  email: "",
  password: "",
};
