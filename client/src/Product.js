import React, { useState, useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector } from 'react-redux'
import { removeItem, addItem} from './cartSlice'
import './product.css'

 
const Product = () => {
    const [product, setProducts] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
      axios.get('http://localhost:3001/product')
      .then(response => {
        setProducts(response.data.data);
        console.log(response.data.data)  
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
    }, []);
    
    const handleAddToCart = (product) => {
      const item ={  
        id: product.prodId,
        price: product.price,
        image: product.prodImage, 
        name: product.prodName,
        quantity: 1
      }
      dispatch(addItem(item));
    };
    const handleRemoveFromCart = (product) => {
      dispatch(removeItem(product.prodId));
  };
    const items = useSelector((state) => state.cart.items);
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

    
  return (
    <div className="main-prod" >
    <nav className="navbar navbar-light bg-dark w-100">
      <div className="container-fluid d-flex justify-content-center align-items-center position-relative p-0">
        <h2 className="navbar-brand mb-0 fs-3 text-white">Products</h2>
        <div className="d-flex position-absolute end-0 me-3 text-white">
        <div className="cart-icon-container">
        <Link to="/cart" className="cart-icon-link">
        <ShoppingCartIcon style={{ fontSize: 40 }} />
        {totalQuantity > 0 && (
          <span className="cart-badge">{totalQuantity}</span>
        )}
      </Link>
    </div>
        </div>
      </div>
    </nav>
    <div className="container">
        {product.map((product) => (
          <div className="product-wrapper" key={product.prodId}>
            <div className="product">
              <div className="img">
                <img src={product.prodImage} alt={product.prodName} />
              </div>
              <div className="info">
                <div className="details">
                  <h1>{product.prodName}</h1>
                  <p>₹{product.price.toLocaleString()}</p>
                </div>
                <div className="buy-btn" >
                  <button  onClick={() => handleRemoveFromCart(product)} >Remove</button>
                  <button  onClick={() => handleAddToCart(product)}>Add to Cart </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product;
