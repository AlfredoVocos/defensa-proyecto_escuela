import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../CSS/PortadaSlider.css";

import img1 from "../assets/utn.png";
import img2 from "../assets/directivos.png";
import img3 from "../assets/alumnos1.png";
import img4 from "../assets/alumnos2.png";

const PortadaSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 800,
    fade: false,
    cssEase: 'linear'
  };

  return (
    <div className="portadaslider">
      <h1 className="portadaslider_title">Bienvenidos a la T.      U.    P.</h1>
      <p className="portadaslider_subtitle">¡"En la Tecnicatura Universitaria en Programación, cada línea de código es una oportunidad para transformar ideas en soluciones y construir el futuro con creatividad y pasión."!</p>
    <div className="portadaslider_container" >
      <Slider {...settings}>
        <div><img src={img1} alt="utn" className="slider-img" /></div>
        <div><img src={img2} alt="directivos" className="slider-img"  /></div>
        <div><img src={img3} alt="alumnos1" className="slider-img"  /></div>
        <div><img src={img4} alt="alumnos2" className="slider-img"  /></div>
      </Slider>
    </div>
    </div>
  );
};

export default PortadaSlider;