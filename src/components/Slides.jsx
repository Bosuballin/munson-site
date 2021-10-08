import React from "react";
import { Carousel } from "react-bootstrap/";

function Slides() {
  return (
    <Carousel fade id="experience">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1619065513120-ad804c3f5e22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Experience</h3>>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1613135608310-b5fa1d176c82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Learn</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://images.unsplash.com/photo-1578873375598-913295f026d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Begin</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
