import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import './ProductZoom.css';

  

class Deals extends Component {
    constructor(props) {
        super(props)
    }

    elevateItem(e) {
        console.log(e);
    }

    componentDidMount(){
            ("myimage", "myresult");
    }

    render() {
        return (
            <div id="Deals" className="img-zoom-result">
                
            </div>
        )
    }
}


Deals.propTypes = {

};

export default Deals;
