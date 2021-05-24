import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'reactstrap';

function ProductScreen (props){
    const product = data.products.find(x=> x._id === props.match.params.id);
    
    const [tooltipOpen1, setTooltipOpen1] = useState(false);
    const toggle1 = () => setTooltipOpen1(!tooltipOpen1);

    const [tooltipOpen2, setTooltipOpen2] = useState(false);
    const toggle2 = () => setTooltipOpen2(!tooltipOpen2);

    const [tooltipOpen3, setTooltipOpen3] = useState(false);
    const toggle3 = () => setTooltipOpen3(!tooltipOpen3);

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
                <h5 className="mt-4 mb-3">Want to order? Call us or get us on</h5>
                <div className="row">
                    <div className="col-2 offset-1">
                        <img className="iconSocmedProduct" src="/assets/images/ig.png" id="instagram"></img>
                        <Tooltip placement="bottom" isOpen={tooltipOpen1} target="instagram" toggle={toggle1}>
                            @teratics.tech
                        </Tooltip>
                    </div>
                    <div className="col-2">
                        <img className="iconSocmedProduct" src="/assets/images/amazon.png" id="amazon"></img>
                        <Tooltip placement="bottom" isOpen={tooltipOpen2} target="amazon" toggle={toggle2}>
                            Teratics Store
                        </Tooltip>
                    </div>
                    <div className="col-2">
                        <img className="iconSocmedProduct" src="/assets/images/wa.png" id="wa"></img>
                        <Tooltip placement="bottom" isOpen={tooltipOpen3} target="wa" toggle={toggle3}>
                            +62-812-74027237
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default ProductScreen;