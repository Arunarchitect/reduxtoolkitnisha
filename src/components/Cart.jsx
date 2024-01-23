import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products =useSelector(state => state.cart)
  const dispatch = useDispatch();
  const removeItem = (id) => {
    //dispatch a remove action
    dispatch(remove(id))
  }
  const cards = products.map(product => (
    <div key={product.id} className='col-md-12' style={{ marginBottom: '10px' }}>
      <Card className='h-100'>
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '150px' }} />
        </div>
  
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
        
        <Card.Footer>
          <Button variant="danger" onClick={() => removeItem(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1>Cart</h1>
      {cards}
    </div>
  )
}

export default Cart