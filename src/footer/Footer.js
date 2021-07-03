import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Footer.css";
import {Twitter, Facebook, LinkedIn, Pinterest} from "@material-ui/icons";



const Footer = () => {
    return (
        <div>
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="widget">
                                    <Link className="widget-title" to={"/"}></Link>
                                    <img src={logo} alt="" className="footer__logo"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
