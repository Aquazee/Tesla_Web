import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Gas, Mixer, Notebook, Sofaset, Toaster, cooker } from "../../../constants/Images";
import './Deals.css';

const data = [
    {
        name: 'Cooker',
        brands: ['Prestige', 'Pigeon', 'Hindwares', 'Hawkins Futura', 'Usha', 'Bhalaria', 'Surya',],
        offers: "Min 50% off",
        img: cooker
    },
    {
        name: 'Gas',
        brands: ['Prestige', 'Pigeon', 'Hindwares', 'Hawkins Futura', 'Usha', 'Bhalaria', 'Surya',],
        offers: "Extra 10% off",
        img: Gas
    },
    {
        name: 'Toaster',
        brands: ['Prestige', 'Pigeon', 'Hindwares', 'Hawkins Futura', 'Usha', 'Bhalaria', 'Surya',],
        offers: "From 399",
        img: Toaster
    },
    {
        name: 'Mixer',
        brands: ['Prestige', 'Pigeon', 'Hindwares', 'Hawkins Futura', 'Usha', 'Bhalaria', 'Surya',],
        offers: "Upto 20% off",
        img: Mixer
    },
    {
        name: 'Sofaset',
        brands: ['Solimo Sofa', 'Durian Sofa', 'Furny Sofa', 'RoyalOak', 'CasaStyle Sofa', 'Urban Ladder Sofa', 'Aart Store Sofa', 'Fabindia Sofa'],
        offers: "Min 15% off",
        img: Sofaset
    },
    {
        name: 'Notebook',
        brands: ['Apple', 'Dell', 'HP', 'Lenovo', 'Acer', 'Microsoft', 'Asus'],
        offers: "Upto 10% off",
        img: Notebook
    },
   
]

const Item = ({ item }) => {
    let brands = item.brands.length > 3 ? (item.brands.splice(0,2).join(', ') + ', more') : item.brands.join(', ');
    return <div className="card DItem">
        <img className="d-block" alt="Hindware" src={item.img} />
        <div className="content">
            <h5>{item.name}</h5>
            <h6>{brands}</h6>
            <p>{item.offers}</p>
        </div>
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
        return (
            <div id="Deals" className="w-100 DRow col-12">
                {
                    data.map((i, index) => {
                        return <Item key={index} item={i} />
                    })
                }
                <div className="larrow d-none" ><i className="fa fa-chevron-left" ></i> </div>
                {/* <div className="fa fa-chevron-left"></div> */}
            </div>
        )
    }
}


Deals.propTypes = {

};

export default Deals;
