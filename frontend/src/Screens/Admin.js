import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import { Form, Input, FormGroup, Label, Button, FormText, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Admin(props) {
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
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="email">Product Brand</Label>
                <Input
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Your product brand..."
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="email">Product Price</Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Your product price..."
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="category">Product Category</Label>
                <Input type="select" name="category" id="category">
                  <option>Category...</option>
                  <option value="clothes">Clothes</option>
                  <option value="pants">Pants</option>
                  <option value="sandals">Sandals</option>
                </Input>
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="image">Product Image</Label>
                <Input type="file" name="image" id="image" />
                <FormText color="muted">Add your product image here.</FormText>
              </FormGroup>
              <FormGroup className="mb-2 col-10">
                <Label for="question">Product Description</Label>
                <Input type="textarea" name="desc" id="desc" />
              </FormGroup>
              <FormGroup>
                <Link to="/addNewProduct"><Button color="success">Input</Button></Link>
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
                <Input type="select" name="category" id="category">
                  <option>Name...</option>
                  {data.products.map((product) => (
                    <option value={product._id}>{product.name}</option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Button color="danger">Delete</Button>
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
