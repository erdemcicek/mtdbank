import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { TextField } from 'formik-material-ui';

const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    userName: "",
    role: ["user"],
    password: "",
    confirmPassword: "",
}
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please provide first name"),
    lastName: Yup.string().required("Please provide last name"),
    dob: Yup.string().required("Please provide your date of birth"),
    email: Yup.string().email("Please provide valid email address").required("Please provide the email address"),
    userName: Yup.string().required("Please provide user name"),
    password: Yup.string().required("Please provide the password"),
    confirmPassword: Yup.string().oneOf([
        [Yup.ref("password"), null], "Password should match"
    ])

});

const RegistrationForm = (props) => (
    <div className="container">
        <fieldset>
            <legend>Register</legend>
            <Form>
                <div className="row justify-content-start">
                    <div className="col-2 text-center p-3">
                        <Field 
                        component={TextField} 
                        name="firstName" 
                        type="text" 
                        label="First Name"></Field>
                    </div>
                    <div></div>
                </div>
            </Form>
        </fieldset>
    </div>
);
const Register = () => {
    return (
        <div>
            <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema}
            component={RegistrationForm}
            ></Formik>
        </div>
    )
}

export default Register;
