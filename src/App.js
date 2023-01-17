import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  let emailHasValidated = false;
  let pswHasValidated = false;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      validation: ''
    },
    onSubmit: values => {
      if (values.validation === 'yes') alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!values.email.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
        errors.email = 'Username should be an email';
      } else {
        emailHasValidated = true;
      }
      if (!values.password) {
        errors.password = 'Field required'; 
      } else {
        pswHasValidated = true;
      }

      if (emailHasValidated && pswHasValidated) values.validation = 'yes';

      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div id="emailField">Email</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div> : null}
        <div id="pswField">Password</div>
        <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div> : null}
        <br/>
        <button type="Submit" id="btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
