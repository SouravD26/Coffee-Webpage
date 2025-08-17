import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Menu1 from "../assets/menu1.jpg";
import Menu2 from "../assets/menu2.jpg";
import Menu3 from "../assets/menu3.jpg";
import Menu4 from "../assets/menu4.jpg";
import Menu5 from "../assets/menu5.jpg";
import Menu6 from "../assets/menu6.jpg";
import Menu7 from "../assets/menu7.jpg";
import "../style/product.css";

const coffeeItems = [
  {
    title: "Cappuccino",
    description:
      "A bold shot of espresso, rich and aromatic.Topped with a thick layer of creamy, velvety foam.Cappuccino delivers smooth intensity in every sip.",
    image: Menu1,
    price: "420",
  },
  {
    title: "Latte",
    description:
      "Smooth espresso blended with steamed, silky milk.Light on bitterness, rich in comfort and warmth.A timeless favorite for calm, cozy moments.",
    image: Menu2,
    price: "300",
  },
  {
    title: "Espresso",
    description:
      "A concentrated shot of pure coffee power.Bold, rich, and intensely aromatic in every sip.Espresso is the heart of every coffee experience.",
    image: Menu3,
    price: "250",
  },
  {
    title: "Americano",
    description:
      "A classic coffee drink made by diluting espresso with hot water.Americano offers a rich, bold flavor without the intensity of straight espresso.",
    image: Menu4,
    price: "150",
  },
  {
    title: "Mocha",
    description:
      "A delicious fusion of espresso, chocolate, and milk.Sweet, smooth, and rich with cocoa notes.Mocha is the perfect blend of bold and indulgent.",
    image: Menu5,
    price: "180",
  },
  {
    title: "Macchiato",
    description:
      "A bold espresso marked with a touch of milk foam.Strong, intense flavor with a smooth finish.Macchiato is for those who savor pure coffee essence.",
    image: Menu6,
    price: "200",
  },
  {
    title: "Affogato",
    description:
      "A delightful dessert combining a shot of hot espresso poured over a scoop of vanilla ice cream.A perfect balance of hot and cold, bitter and sweet.",
    image: Menu7,
    price: "120",
  },
];

function CoffeeCard({ item }) {
  return (
    <Card className="mx-2 shadow" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} height={180} />
      <Card.Body>
        <Card.Title
          style={{
            textAlign: "center",
            fontFamily: "Playfair Display, serif",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Card.Title>
        <Card.Text className="card-description">{item.description}</Card.Text>
        <Button className="mt-auto mx-auto card-btn">
          Price: ₹{item.price} Only
        </Button>
      </Card.Body>
    </Card>
  );
}

export default function CoffeeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container mt-5 mb-5 product-slide">
      <h2 className="text-center mb-4 display-4">The Coffee Chapter</h2>
      <Slider {...settings}>
        {coffeeItems.map((item, idx) => (
          <CoffeeCard key={idx} item={item} />
        ))}
      </Slider>
    </div>
  );
}
