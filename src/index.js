import React from "react";
import ReactDOM from "react-dom";
import { withFormik } from "formik";
import Yup from "yup";

import "./styles.css";

const App = ({ values }) => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
      />
    </div>
  );
};

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      email: "test text"
    };
  }
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<FormikApp />, rootElement);
