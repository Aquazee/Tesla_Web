import React, { useEffect } from "react";
import "./breadcrumb.css";
import ImmutablePropTypes from 'react-immutable-proptypes';



const BreadCrumb = () => {
    return (<div>
        <nav className="pddh-15" style={{ marginTop: 15 }}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-grey" href="/">Home</a></li>
                <li className="breadcrumb-item"><a className="text-grey" href="#">Computers</a></li>
                <li className="breadcrumb-item text-grey">Laptops</li>
            </ol>
        </nav>
    </div>
    )
};

BreadCrumb.propTypes = {
};

export default BreadCrumb;
