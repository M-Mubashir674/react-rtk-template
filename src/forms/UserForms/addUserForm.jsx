import { useFormik } from "formik";

import {
  UserInitialValues,
  UserSchema,
} from "src/forms/ValidationSchemas/UserSchema.js";

import "./addUserForm.scss";

export const AddUserForm = () => {
  const formik = useFormik({
    initialValues: UserInitialValues,
    validationSchema: UserSchema,
    onSubmit: (values,{resetForm}) => {
        console.log(values);
        resetForm();
    },
  });
  return (
    <div className="form-wrapper">
      <form
        onSubmit={formik.handleSubmit}
        method={"POST"}
        className="mx-auto p-4 w-full min-w-[20rem]"
      >
        <input type="text" value={formik.values.name} name="name" onChange={formik.handleChange} />
        {
            formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null
        }
        <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
        {
            formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null
        }
        <input type="text" name="password" value={formik.values.password} onChange={formik.handleChange} />
        {
            formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div> : null
        }
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
