import React from "react";
import ReactDOM from "react-dom";
import { withFormik } from "formik";
import Yup from "yup";

import "./styles.css";

const App = ({ values, handleChange }) => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
    </div>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || ""
    };
  }
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<FormikApp email="rkuerbis@gmail.com" />, rootElement);
