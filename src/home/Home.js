import React from 'react';
import "./Home.css";
import Banner from "../banner/Banner.js";
import About from "../about/About";
import Product from '../product/Product';
import Price from "../price/Price"
import Gold from "../images/card/gold.jpg"
import Silver from "../images/card/silver.jpg"
import Platinum from "../images/card/platinum.jpg"
import Footer from "../footer/Footer"

const Home = () => {
    return (
        <div className="home">
        <Banner />
        <About />

            <div id="product" className="home__row">
                <Product 
                type="Silver" 
                price={300}
                benefit="Basic package with interactive features. Enjoy up to 20% discount at select restaurants.You don’t have to pay any additional fee." 
                image={Silver} />

                <Product 
                type="Gold" 
                price={500} 
                benefit="Bank of States has partnered with leading travel providers to bring offers on airline tickets, hotel stays, car hire and more."
                image={Gold} />

                <Product 
                type="Platinum" 
                price={1000} 
                benefit="Get up to 5 supplementary cards for your family members. You don’t have to pay any additional fee and can choose the spending limit on each card."
                image={Platinum}/>

                

            </div>
        
            <Price/>
        
         </div>
    )
}

export default Home;
