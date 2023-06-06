import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import "./Cards.css";

export default class Cards extends Component {
  render() {
    let { title, description, price, image, cat , id } = this.props;

    return (
      this.props.title && (
        <Card className="rower">
          <Card.Img src={image} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{title}</Card.Title>
            <Card.Text style={{ color: "white" }}>{description}</Card.Text>

            <Card.Text style={{ color: "blue" }}>
              {"Price : " + price + "$"}
            </Card.Text>

            <p className="mt-1" style={{ color: "green" }}>
              Category: {cat}
            </p>
          </Card.Body>
          <Link
            to={`/productes/${id}`}
            className="btn btn-success"
            style={{ width: "100%", marginBottom: "1em" }}>
            See Product
          </Link>
        </Card>
      )
    );
  }
}
