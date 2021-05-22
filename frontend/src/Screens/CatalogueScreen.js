import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Form, Input, FormGroup, Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CatalogueScreen (props){
    return <div>
    <div className="container my-5">
      <Jumbotron fluid>
          <h1 className="display-3">Catalogue</h1>
          <p className="lead">Taste new different style from our store.</p>
      </Jumbotron>
    </div>
    <div className="container my-5">
        <div className="filterDiv">
        <h5 className="text-secondary">Filters</h5>
        <Form inline>
            <div className="row">
                <div className="col-2">
                    <Input type="select" bsSize="sm">
                        <option>Category...</option>
                        <option>Clothes</option>
                        <option>Pants</option>
                        <option>Sandal</option>
                    </Input>
                </div>
                <div className="col-2">
                    <Input type="select" bsSize="sm">
                        <option>Sort...</option>
                        <option>Cheaper</option>
                        <option>Expensive</option>
                    </Input>
                </div>
            </div>
        </Form>
        </div>
        <hr></hr>
        <div className="row">
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
}
export default CatalogueScreen;