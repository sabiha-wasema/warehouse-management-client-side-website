import React from 'react';
import useProducts from '../../Hooks/useProducts'
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col } from 'react-bootstrap';

const ManageProduct = () => {
    const [products,setProducts] = useProducts();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
              fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }

    const navigate = useNavigate()
    const handleAdd = (_id) => {
        navigate(`/products/${_id}`)
    }

    const handleAddItem = () => {
        navigate(`/addproduct`)
    }

    return (
        <div>
            <h1 className="text-center mt-3">Manage Product</h1>
            {
                products.map(product => 
                <div key={product._id}>

          <Col>
            <Card className="w-75 mx-auto mb-4 shadow-lg bg-white">
                <div className="row">
                    <div className="col-4">
                        <Card.Img className='img-fluid p-4 mt-3' variant="top" src={product.picture} />
                    </div>
                    <div className="col-8">
                        <Card.Body className="text-center">
                            <Card.Title>{product.name} </Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                Price : ${product.price}
                            </Card.Text>
                            <Card.Text>
                                Quantity : ${product.quantity}
                            </Card.Text>
                            <Card.Text>
                                Supplier : ${product.supplier}
                            </Card.Text>
                        </Card.Body>
                        <div className="d-grid gap-2 mb-3 mx-4 w-50 mx-auto">
                        <button className="btn btn-danger" onClick={()=>{handleDelete(product._id)}}>Delete</button>
                            <button className="btn btn-success" onClick={() => handleAdd(product._id)} variant="success" size="lg">
                               Update
                            </button>
                        </div>
                        
                    </div>
                </div>
            </Card>
        </Col>
                </div>)
            }
            <div className="w-75 mx-auto text-center mt-3">
            <button onClick={handleAddItem} className="btn btn-success">Add Item</button>
            </div>

            
        </div>
    );
};

export default ManageProduct;