import React, { useEffect } from "react";
import "./style.css";
import ImmutablePropTypes from 'react-immutable-proptypes';
import menu from "./menu";
//const MENU_DATA = require('../../dummy/menu');

function getWindowDimensions() {
    const hasWindow = typeof window !== 'undefined';
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
        width,
        height,
    };
}

function UpperCaseArray(input) {
    var result = input.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
    return result.split(",");
}

const MenuItem = () => {
    const myWidth = (getWindowDimensions().width * (97 / 100));
    const MENU_DATA = menu.items;
    return Object.keys(MENU_DATA[0]).map((j, indexj) => {
        let title1 = MENU_DATA[0][j].title.split(",").join(' ').split("&amp;").join(' & ').split("&").join(' & ')
        return <div className="" style={{margin:"0 auto"}} key={j + indexj}>
            <a className="mr-4 nav-link dropdown-toggle footerBtmlistitem" href="#" id={MENU_DATA[0][j].title} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {title1}
            </a>
            <div className="dropdown-menu rounded-0 border-0" aria-labelledby={MENU_DATA[0][j].title} style={{ width: myWidth }}>
                <div className="row">
                    {MENU_DATA[0][j].tabs && MENU_DATA[0][j].tabs.map((k) => {
                        return k.columns.map((m, indexm) => {
                            return <div className={"col-2 mr-auto " }>
                                {
                                    m.map((l, index) => {
                                        let title = l["title"].split(",").join(' ').split("&amp;").join(' & ').split("&").join(' & ')
                                        title = UpperCaseArray(title);
                                        return <a key={l + index} className={"dropdown-item " + (l["type"] ? "font-weight-500" : "")} href={l["url"]}>
                                            {title}
                                        </a>
                                    })
                                }
                            </div>
                        })
                    })}
                </div>
            </div>
        </div>
    })

    // return Object.keys(MENU_DATA[0]).map((j, indexj) => {
    //     return <div key={j + indexj}>
    //         <a className="nav-link dropdown-toggle footerBtmlistitem" href="#" id={"Electronics"} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             {"Electronics"}
    //         </a>
    //         <div className="dropdown-menu" aria-labelledby={"Electronics"} style={{ width: myWidth }}>
    //             <div className="row">
    //                 <div className="col-2">
    //                     <a key={2} className={"dropdown-item font-weight-bold bg-transparent"} href={"#"}>
    //                         {"Mobiles"}
    //                     </a>
    //                     <a key={3} className={"dropdown-item text-secondary bg-transparent"} href={"#"}>
    //                         {"Mi"}
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
}

const Header = () => {
    return (<div>
        <nav className="mb-0 navbar navbar-expand-lg navbar-light bg-light container-fluid pr-15 pl-15 headerSpacing" >
            <a className="navbar-brand" href="#">Tesla</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <form className="form-inline my-2 my-lg-0">
                    
                    
                </form> */}
            <div className="form-inline">
                <input className="form-control mr-sm-2 txtbox rounded-0" type="search" placeholder="Search for products, brands & more" aria-label="Search" />
                <div className="input-group-append">
                    <button className="btn-link my-2 my-sm-0" type="submit" onClick={() => { window.location.href = "/search" }}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto float-right">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Account <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown ml-4">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">
                                <i className="fa fa-bell mr-3"></i>
                                    Notification Preferences
                                </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                <i className="fa fa-line-chart mr-3" aria-hidden="true"></i>
                            Sell on Triangle
                        </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                <i className="fa fa-question mr-3" aria-hidden="true"></i>
                                    24/7 Customer Care</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                <i className="fa fa-television mr-3" aria-hidden="true"></i>
                                    Advertise</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                <i className="fa fa-download mr-3" aria-hidden="true"></i>
                                Download App
                                </a>
                        </div>
                    </li>
                    <li className="nav-item ml-4">
                        <a className="nav-link disabled" href="#">
                            <i className="fa fa-shopping-cart mr-3" aria-hidden="true"></i>
                        Cart
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <nav className="nav container-fluid allmenubar">
            {MenuItem()}
        </nav>
    </div>
    )
};

Header.propTypes = {
};

export default Header;
