import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

import "./styles.css";

const App = ({ values, handleChange, handleSubmit }) => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Form>
        <Field type="email" name="email" placeholder="Email" />

        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FormikApp email="rkuerbis@gmail.com" password="nonepassword" />,
  rootElement
);
