import React from 'react'
import AccountInfo from '../account/AccountInfo'
import { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router'
import * as Yup from "yup";
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Button, LinearProgress } from '@material-ui/core';
import "./Deposit.css";
import service from "../service/bankService";
import { ToastContainer, toast } from 'react-toastify';
import Divider from '@material-ui/core/Divider';
import Transactions from "../account/Transactions"

toast.configure();

const useStyles = makeStyles(styles);

const DepositSchema = Yup.object().shape({
    amount : Yup.string().required("Please provide the amount"),
    // comment : Yup.string().required("Please provide comment"),

})

const DepositForm = (props) => (
    <div className="container">
        <fieldset>
            <legend>Deposit</legend>
            <Form>
                <div className="row">
                    <div className="col-2 text-center p-3">
                        <Field 
                            component={TextField}
                            name="amount"
                            type="number"
                            label="Amount"
                        ></Field>
                    </div>
                    <div className="col-2 text-center p-3">
                        <Field 
                            component={TextField}
                            name="comment"
                            type="text"
                            label="Comment"
                        ></Field>
                    </div>

                    <div className="col-2 text-center p-3">
                        <Button 
                            variant="contained"
                            color="primary"
                            disabled={props.isSubmitting}
                            onClick={props.submitForm}
                            className = "deposit__btn"
                        >Deposit</Button>
                    </div>
                </div>
                <div>{props.isSubmitting && <LinearProgress/>}</div>
                
            </Form>
        </fieldset>
    </div>
)

const Deposit = () => {
    const [{userInfo}, dispatch] = useStateValue();
    const history = useHistory();
    const classes = useStyles();

    return (
        <div>
            {!userInfo && history.push("/login")}
            {userInfo && userInfo.user && (
                <div>
                    <AccountInfo />
                    <div>
                        <Formik 
                            initialValues={{ 
                                amount: "", 
                                comment: ""
                            }} 
                            validationSchema={DepositSchema}
                            onSubmit={(values, actions)=>{
                                service.deposit(values).then((response) => {
                                    if(response.status === 200){
                                        const user = response.data;
                                        dispatch({
                                            type: "UPDATE",
                                            item: user,
                                        });
                                        toast.success( user.message, {
                                            position: toast.POSITION.TOP_CENTER,
                                        });
                                        actions.resetForm();
                                    }
                                    actions.setSubmitting(false);
                                })

                            }}
                            component={DepositForm}
                            >

                        </Formik>
                        <ToastContainer/>
                    </div>
                    <Divider/>
                    <h1 className={classes.infoText}>Transactions</h1>
                    <Transactions/>
                </div>
            )}
        </div>
    )
}


export default Deposit
