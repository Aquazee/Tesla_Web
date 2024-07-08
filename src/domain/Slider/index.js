import React, { useLayoutEffect } from 'react';
import Constants from '../../utils/Constants';

const SliderItem = ({ src }) => {
  return (
    <div className="carousel-item">
      <img
        className="d-block w-100"
        alt="Hindware"
        src={src}
      />
    </div>
  )
}

function Slider() {

  useLayoutEffect(()=>{
    const carouselItem = document.getElementsByClassName('carousel-item');
    carouselItem[0].classList.add('active')
  })

  const sidebarItems = Constants?.SLIDER_IMGS?.map((item, index) => <SliderItem key={index.toString()} src={item} />)

  return (
    <div id="carouselExampleControls" className="carousel slide w-100 col-12" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        {sidebarItems}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

Slider.propTypes = {};

export default React.memo(Slider);
