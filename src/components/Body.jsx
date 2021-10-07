import React from "react";
import { Card } from "react-bootstrap/";

function Body() {
  return (
    <Card id="homecard" className="bg-dark text-white">
      <Card.Img
        src="https://static.roland.com/promos/hybrid_drums_2019/images/hybrid-drums-pop-hero.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text className="centered card-overlay-text shadow-lg">
          "The journey of a thousand miles begins with one step!"
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Body;
