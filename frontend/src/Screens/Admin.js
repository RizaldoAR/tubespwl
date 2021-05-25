import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import { Form, Input, FormGroup, Label, Button, FormText, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";



function Admin(props) {


  const [name, setName] =useState('');
  const [image, setImage] =useState('');
  const [brand, setBrand ]=useState('');
  const [price, setPrice] =useState('');
  const [stock, setStock] =useState('');
  const [description, setDescription] =useState('');
  const [category, setCategory] =useState('');


  //backend function upload without image
  function upload (){
    axios.post("http://localhost:5000/products/add", {
      name: name,
      image: image,
      brand : brand,
      price : price,
      category: category,
      stock : stock,
      description: description

    }).then(response =>{
      alert('berhasil mengupload')
      
    }).catch(error =>{
      console.error('error >>> ', error);
    })
  }
  



  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () =>{
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data);
    };
    fetchData();
  }, []);


  const [removed, setRemoved] =useState('');
  function remove (){
    
    axios.delete("http://localhost:5000/products/"+removed, {
      _id:removed
    }).then(response =>{
      alert('berhasil di hapus')
      
    }).catch(error =>{
      console.error('error >>> ', error);
    })
  }

  
  





  return (
    <div className="container pb-5">
      <h2 className="pt-5 pb-3">Manage Product</h2>
      <div className="row">
        <div className="kolomAddProduct col-12 col-lg-6">
          <div className="addProduct">
            <h5 className="mb-3">Add Product</h5>
            <Form>
              <FormGroup className="mb-3 col-6">
                <Label for="email">Product Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your product name..."
                  onChange={(e)=>setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="email">Product Brand</Label>
                <Input
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Your product brand..."
                  onChange={(e)=>setBrand(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="email">Product stock</Label>
                <Input
                  type="number"
                  name="stock"
                  id="stock"
                  placeholder="Your product stock..."
                  onChange={(e)=>setStock(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="email">Product Price</Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Your product price..."
                  onChange={(e)=>setPrice(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="category">Product Category</Label>
                <Input type="select" name="category" id="category" onChange={(e)=>setCategory(e.target.value)}>
                  <option>Category...</option>
                  <option value="clothes">Clothes</option>
                  <option value="pants">Pants</option>
                  <option value="sandals">Sandals</option>
                </Input>
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="urlIMG">Image with url</Label>
                <Input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Your img url"
                  onChange={(e)=>setImage(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="image">Product Image</Label>
                <Input type="file" name="image" id="image" />
                <FormText color="muted">Add your product image here.</FormText>
              </FormGroup>
              <FormGroup className="mb-2 col-10">
                <Label for="question">Product Description</Label>
                <Input type="textarea" name="desc" id="desc" onChange={(e)=>setDescription(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Button color="success" onClick={upload} >Input</Button >
              </FormGroup>
            </Form>
          </div>
        </div>
        <div className="kolomDeleteProduct col-12 col-lg-6">
          <div className="deleteProduct">
            <h5 className="mb-3">Delete Product</h5>
            <Form>
              <FormGroup className="mb-3 col-6">
                <Label for="category">Product Name</Label>
                <Input type="select" name="category" id="category" onChange={(e)=>setRemoved(e.target.value)} >
                  <option>Name...</option>
                  {products.map((product) => (
                    
                    <option   value={product._id}>{product.name}</option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Button onClick={remove} color="danger">Delete</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>

      <h2 className="pt-5 pb-3">User Help</h2>
      <div className="col-10 col-lg-8">
        <h5 className="mb-3">
          Here is few messages from our beloved customers
        </h5>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data.messages.map((dataMessage, i) => (
            <tr>
              <th scope="row">{i+1}</th>
              <td>{dataMessage.email}</td>
              <td>{dataMessage.name}</td>
              <td>{dataMessage.message}</td>
              <td><Link to="/deleteMessage"><Button color="danger">Delete</Button></Link></td>
            </tr>))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Admin;
