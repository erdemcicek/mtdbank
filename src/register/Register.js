import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import * as Yup from "yup";
import { TextField } from 'formik-material-ui';
import service from "../service/bankService";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// once you done let me know css for toast okay for the most part in first line itaself here itself one method 

toast.configure();

const initialValues = {
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    username: "",
    role: ["user"],
    password: "",
    confirmPassword: "",
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please provide first name"),
    lastName: Yup.string().required("Please provide last name"),
    dob: Yup.string().required("Please provide your date of birth"),
    email: Yup.string().email("Please provide valid email address").required("Please provide the email address"),
    username: Yup.string().required("Please provide user name"),
    password: Yup.string().required("Please provide the password"),
    confirmPassword: Yup.string().oneOf([
        [Yup.ref("password"), null], "Password should match"
    ])

});


const submitForm = (values, action)=> {
    service.register(values).then((response) => {
        if(response.status === 200 && response.data.success){
            toast.success(response.data.message, {
                position: toast.POSITION.TOP_CENTER
            })
            action.resetForm();
        } else {
            toast.error(response.data.message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }).catch((error) => {
        console.log("Error", error)});
    action.setSubmitting(false);
    
};


const RegistrationForm = (props) => (
    <div className="container">
        <fieldset>
            <legend>Register</legend>
            <Form>
                <div className="row justify-content-start">
                    <div className="col-3 text-center p-3">
                        <Field 
                        component={TextField} 
                        name="firstName" 
                        type="text" 
                        label="First Name"></Field>
                    </div>
                    <div className="col-3 text-center p-3">
                        <Field 
                        component={TextField} 
                        name="lastName" 
                        type="text" 
                        label="Last Name"></Field>
                    </div>
                </div>
                <div className="row justify-content-start">
                    <div className="col-3 text-center p-3">
                        <Field 
                            component={TextField} 
                            name="dob" 
                            label="Date of Birth" 
                            type="date"
                            InputLabelProps={{shrink: true}}
                            />
                    </div>
                    <div className="col-3 text-center p-3">
                        <Field component={TextField}
                            name="email"
                            label="Email"
                            type="email"

                        />
                    </div>

                </div>
                <div className="row justify-content-start">
                    <div className="col-3 text-center p-3">
                        <Field 
                        component={TextField} 
                        name="username" 
                        type="text" 
                        label="User Name">

                        </Field>
                    </div>
                    <div className="col-3 text-center pl-5">
                        <div id="checkbox-group">Role</div>
                        <div className="row">
                            <div className="col-2">
                                <label>
                                    <Field  type="checkbox" 
                                        name="role"
                                        value="user"
                                    />
                                    User
                                </label>
                            </div>
                            <div className="col-2">
                                <label>
                                    <Field  type="checkbox" 
                                        name="role"
                                        value="admin"
                                    />
                                    Admin
                                </label>
                            </div>
                        </div>

                    </div>

                    
                
                </div>           


                <div className="row justify-content-start">
                    <div className="col-lg-2 p-3">
                        <Field 
                        component={TextField} 
                        name="password" 
                        type="password" 
                        label="Password"></Field>
                    </div>
                    <div className="col-lg-2 p-3">
                        <Field 
                        component={TextField} 
                        name="confirmPassword" 
                        type="password" 
                        label="Confirm Password"></Field>
                    </div>
                </div>
                <div className="row">{props.isSubmitting && <LinearProgress />}</div>
                <div className="row">
                    <div className="col-6 p-3">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            disabled={props.isSubmitting} 
                            onClick={props.submitForm}
                            className="register__btn"
                        >Submit</Button>
                    </div>
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
            onSubmit={submitForm}
            component={RegistrationForm}
            ></Formik>
        </div>
    )
}


export default Register;
