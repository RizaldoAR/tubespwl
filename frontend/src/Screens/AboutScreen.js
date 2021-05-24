import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, FormGroup, Jumbotron, Container } from "reactstrap";

function AboutScreen(props) {
  return (
    <div className="aboutBody">
      <div className="container my-5">
        <Jumbotron fluid>
          <h1 className="display-3">About Us</h1>
          <p className="lead">
            It's about our store and all, things maybe different. But us, will
            always be......
          </p>
        </Jumbotron>
        <div className="col-6 my-5 offset-3">
          <img className="img-fluid" src="/assets/images/teratics.jpeg"></img>
        </div>
        <div className="col-8 offset-2">
          <p>
            <strong>TERATICS</strong> is a brand and a lifestyle retail store
            based in Bandar Lampung.
          </p>
          <p>
            Started in 2018 as an online store, we expanding our business in mid
            2019 with opening our flagship store.
          </p>
          <p>
            Our aim is to become a purveyor of a curated multi-brand clothing,
            accessories and sneakers.
          </p>
          <p>
            As a brand and as a store remains unique in its brand identity, its
            culture, its level of service and
            <br></br>as a space men and women can both find the best of a
            worldwide curated selection of goods.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
