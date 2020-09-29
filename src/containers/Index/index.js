import React from 'react';
import Header from "../../components/Header/header";
import Deals from "../../components/Dashboard/Deals/Deals";
import Brands from "../../components/Dashboard/Brands/Brands";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";

const Home = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Slider />
                        <Deals/>
                        <Brands />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
)

Home.propTypes = {

};

export default Home;
