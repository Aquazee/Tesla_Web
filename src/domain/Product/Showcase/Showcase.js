import React from 'react';
import './Showcase.css';

const data = [
  'https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_2.jpg',
  'https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713229/single_4.jpg',
  'https://res.cloudinary.com/dxfq3iotg/image/upload/v1565713228/single_3.jpg'
];

function ImgItem({ i }) {
  return (
    <li onMouseOver={() => replaceImage(i)} data-image={i}>
      <img src={i} alt="" />
    </li>
  );
}

var replaceImage = (i) => {
  const element = document.getElementById('ShowcaseCont');

  element.src = i;
};

const hideZoomContainer = (i) => {
  document.getElementById('myresult').classList.add('d-none');
};

function Showcase() {
  return (
    <div className="row">
      <div className="col-2 col-lg-2 order-lg-2 order-1">
        <ul className="image_list">
          {data.map((i, index) => (
            <ImgItem key={index} i={i} />
          ))}
        </ul>
      </div>
      <div className="col-10 col-lg-10 order-lg-10 order-2" style={{ position: 'relative' }}>
        <div className="image_selected">
          <img
            onMouseOver={() => {
              imageZoom('ShowcaseCont', 'myresult');
            }}
            onMouseLeave={() => {
              hideZoomContainer();
            }}
            id="ShowcaseCont"
            src={data[0]}
            alt=""
          />
        </div>
        <div id="myresult" className="img-zoom-result d-none" />
        <div style={{ marginTop: 8 }}>
          <form action="#">
            <div className="row">
              <div className="col-12">
                <button
                  type="button"
                  className="golden-color btn btn-primary shop-button"
                  style={{ width: '49%', marginRight: 5 }}
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true" /> Add to Cart
                </button>
                <button
                  type="button"
                  className="green-color btn btn-success shop-button "
                  style={{ width: '49%' }}
                >
                  <i className="fa fa-bolt" aria-hidden="true" /> Buy Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Showcase;

function imageZoom(imgID, resultID) {
  document.getElementById('myresult').classList.remove('d-none');
  let img;
  let lens;
  let result;
  let cx;
  let cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /* Create lens: */
  lens = document.createElement('DIV');
  lens.setAttribute('class', 'img-zoom-lens');
  /* Insert lens: */
  img.parentElement.insertBefore(lens, img);
  /* Calculate the ratio between result DIV and lens: */
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /* Set background properties for the result DIV */
  result.style.backgroundImage = `url('${img.src}')`;
  result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener('mousemove', moveLens);
  img.addEventListener('mousemove', moveLens);
  /* And also for touch screens: */
  lens.addEventListener('touchmove', moveLens);
  img.addEventListener('touchmove', moveLens);
  function moveLens(e) {
    let pos;
    let x;
    let y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;
    /* Prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /* Set the position of the lens: */
    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;
    /* Display what the lens "sees": */
    result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
  }
  function getCursorPos(e) {
    let a;
    let x = 0;
    let y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x -= window.pageXOffset;
    y -= window.pageYOffset;
    return { x, y };
  }
}
