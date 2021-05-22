import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductScreen (props){
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div className="container">
        <h2 className="headerTextDetail text-center pt-5 pb-4">{product.name}</h2>
        <div className="row mt-5">
            <div className="col-6">
                <img className="img-fluid" src={product.image}></img>
            </div>
            <div className="col-5 pl-3 offset-1">
                <h3>Rp. {product.price}</h3>
                <h5 className="brandClassName mt-3">{product.brand}</h5>
                <p>{product.desc}</p>
            </div>
        </div>
    </div>
}
export default ProductScreen;