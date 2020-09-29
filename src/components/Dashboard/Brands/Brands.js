import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { clothes, mi, samsung } from "../../../constants/Images";
import "./Brands.css";
var width = window.innerWidth;

const data = [
    {
        name: 'Cooker',
        img: samsung,
        url : ''
    },
    {
        name: 'Gas',
        img: mi,
        url : ''
    },
    {
        name: 'fashion',
        img: clothes,
        url : ''
    },
]

const Item = ({ item, width }) => {
    return <div className="card BItem" style={{width : width}}>
        <img className="d-block" alt="Hindware" src={item.img} />
    </div>
}

class Deals extends Component {
    constructor(props) {
        super(props)
    }

    elevateItem(e) {
        console.log(e);
    }

    render() {
        let ItemWidth = width/3 - (3 * 20);
        return (
            <div id="Branding" className="w-100 BRow col-12">
                {
                    data.map((i, index) => {
                        return <Item key={index} item={i} width={ItemWidth}/>
                    })
                }
            </div>
        )
    }
}


Deals.propTypes = {

};

export default Deals;

const styles = {

}