import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const Test2 = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
  };
  const mySchema = yup.object().shape({
    userName: yup.string().required("Please fill this Field"),
    email: yup.string().email().required(),
    password: yup.string().required().min(6, "llll"),
  });

  return (
    <div>
      <div>New Test</div>
      <Formik
        initialValues={initialValues}
        validationSchema={mySchema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form>
          <Field type="userName" name="userName" />
          <Field type="email" name="email" />
          <Field type="password" name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Test2;
