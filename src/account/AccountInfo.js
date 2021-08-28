import React from "react";
import { useStateValue } from "../StateProvider";
// import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";

import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import styles from "../styles/dashboardStyle.js";

const useStyles = makeStyles(styles);

const AccountInfo = () => {
    const classes = useStyles();
    return (
        <div>
            
        </div>
    )
}

export default AccountInfo
