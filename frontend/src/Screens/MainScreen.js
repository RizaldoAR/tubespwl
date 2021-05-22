import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function MainScreen (props){
    return <div>
    <div>
    <img className="img-fluid" src="assets/images/header1.jpg"></img>
  </div>
    <div className="container">
      <div className="row">
        <div className="col-10 col-lg-8 offset-1 offset-lg-2">
          <h3 className="text-center mt-5 mb-3">Our Latest Products</h3>
          <div className="row my-5">
        {data.products.map(product=>
          <div className="col-4">
              <Card className="tagCard" style={{borderColor:"rgba(255, 255, 255, 0)"}}>
              <Link to={'/product/' + product._id}><CardImg top width="100%" src={product.image} alt="Card image cap" /></Link>
                  <CardBody>
                  <CardTitle tag="h5"><Link className="productName" to={'/product/' + product._id}>{product.name}</Link></CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{product.brand}</CardSubtitle>
                    <CardText>Rp. {product.price}</CardText>
                  </CardBody>
                </Card>
                </div>)
    }       
          </div>
        </div>
      </div>
    </div>
    </div>
}
export default MainScreen