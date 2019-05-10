import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

import "./styles.css";

const App = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Form>
        <Field type="email" name="email" placeholder="Email" />

        <Field type="password" name="password" placeholder="Password" />
        <label>
          <Field
            type="checkbox"
            name="newsletter"
            checked={values.newsletter}
          />
          Join our newsletter!
        </label>
        <Field component="select" name="plan">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "free"
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(9)
      .required()
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FormikApp email="rkuerbis@gmail.com" password="nonepassword" />,
  rootElement
);
