import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateItemQuantity } from './cartSlice';
import './cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ id, quantity }));
    }
  };

  
  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  if (items.length === 0) return <h1>Your cart is empty</h1>;

  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid d-flex justify-content-center align-items-center position-relative">
          <h2 className="navbar-brand mb-0 fs-3 text-white">Cart Items</h2>
          <div className="d-flex position-absolute end-0 me-3 text-white">
            <Link to="/product">
              <button type="button" className="btn btn-primary">Back to products</button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="mt-4 row">
        {items.map((item) => (
          <div className="cart-item d-flex align-items-center justify-content-between" key={item.id}>
            <div className="d-flex align-items-center">
              <img src={item.image} alt={item.name} style={{ width: 120, height: 120, objectFit: 'cover' }} />
              <div className="ms-3">
                <h5>{item.name}</h5>
                <p>₹{item.price.toLocaleString()}</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn btn-primary me-2" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button className="btn btn-primary ms-2" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              <button className="btn btn-danger ms-3" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <h4>Total: ₹{cartTotal.toLocaleString()}</h4>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Link to='/order'>
          <button type="button" className="btn btn-info">Place Order</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
