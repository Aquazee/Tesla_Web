import React from 'react';

function Slider() {
  return (
    <div id="carouselExampleControls col-12" className="carousel slide w-100" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" />
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" />
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" />
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            alt="Hindware"
            srcSet="https://rukminim1.flixcart.com/flap/3376/560/image/fd1aae7fd04875b0.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/fd1aae7fd04875b0.jpg?q=50 1x"
            src="https://rukminim1.flixcart.com/flap/1688/280/image/fd1aae7fd04875b0.jpg?q=50"
            data-tkid="M_83b697e7-10e6-4317-856f-da8382c72a73_2.MCNTH2G0P9MM"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            alt="m"
            srcSet="https://rukminim1.flixcart.com/flap/3376/560/image/90826d7b77f045f6.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/90826d7b77f045f6.jpg?q=50 1x"
            src="https://rukminim1.flixcart.com/flap/1688/280/image/90826d7b77f045f6.jpg?q=50"
            data-tkid="M_83b697e7-10e6-4317-856f-da8382c72a73_2.ZHH22Q14QHOJ"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            alt="Livpure"
            srcSet="https://rukminim1.flixcart.com/flap/3376/560/image/200391845d763840.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/200391845d763840.jpg?q=50 1x"
            src="https://rukminim1.flixcart.com/flap/1688/280/image/200391845d763840.jpg?q=50"
            data-tkid="M_83b697e7-10e6-4317-856f-da8382c72a73_2.QLK8AF35VHL3"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100_"
            alt="Hindware"
            srcSet="https://rukminim1.flixcart.com/flap/3376/560/image/fd1aae7fd04875b0.jpg?q=50 2x, https://rukminim1.flixcart.com/flap/1688/280/image/fd1aae7fd04875b0.jpg?q=50 1x"
            src="https://rukminim1.flixcart.com/flap/1688/280/image/fd1aae7fd04875b0.jpg?q=50"
            data-tkid="M_83b697e7-10e6-4317-856f-da8382c72a73_2.MCNTH2G0P9MM"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="prev"
        data-bs-target="#carouselExampleIndicators"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-bs-slide="next"
        data-bs-target="#carouselExampleIndicators"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

Slider.propTypes = {};

export default Slider;
