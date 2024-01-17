import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TestCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="https://picsum.photos/200/300" />
        <p className="legend">Photo 1</p>
      </div>
      <div>
        <img src="https://picsum.photos/200/301" />
        <p className="legend">Photo 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/200/302" />
        <p className="legend">Photo 3</p>
      </div>
    </Carousel>
  );
};


export default TestCarousel;
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
