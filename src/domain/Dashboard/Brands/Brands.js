import React, { Component } from 'react';
import { clothes, mi, samsung } from '../../../utils/Images';
import './Brands.css';

const width = window.innerWidth;

const data = [
  {
    name: 'Cooker',
    img: samsung,
    url: ''
  },
  {
    name: 'Gas',
    img: mi,
    url: ''
  },
  {
    name: 'fashion',
    img: clothes,
    url: ''
  }
];

function Item({ item, width }) {
  return (
    <div className="card BItem" style={{ width }}>
      <img className="d-block" alt="Hindware" src={item.img} />
    </div>
  );
}

class Deals extends Component {
  constructor(props) {
    super(props);
  }

  elevateItem(e) {
    console.log(e);
  }

  render() {
    const ItemWidth = width / 3 - 3 * 20;
    return (
      <div id="Branding" className="w-100 BRow col-12">
        {data.map((i, index) => (
          <Item key={index} item={i} width={ItemWidth} />
        ))}
      </div>
    );
  }
}

Deals.propTypes = {};

export default Deals;
