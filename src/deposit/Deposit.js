import React from 'react'
import AccountInfo from '../account/AccountInfo'
import { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router'
import * as Yup from "yup";
import { Formik } from 'formik';

const DepositSchema = Yup.object().shape({
    amount : Yup.string().required("Please provide the amount"),

})

const Deposit = () => {
    const [{userInfo}] = useStateValue();
    const history = useHistory();
    return (
        <div>
            {!userInfo && history.push("/login")}
            {userInfo && userInfo.user && (
                <div>
                    <AccountInfo />
                    <div>
                        <Formik 
                            initialValues={{ amount: "", comment: ""}} 
                            validationSchema={DepositSchema}
                            onSubmit={(values, actions)=>{

                            }}
                            >

                        </Formik>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Deposit
