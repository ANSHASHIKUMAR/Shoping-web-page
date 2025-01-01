import React from 'react'
import { Link } from 'react-router-dom'
const order = () => {
  return (
    <div>
      <h1 class="text-center"><b>Your Order is Placed</b></h1>
      <h3 class="text-center">Thank You </h3>
        <div class="container d-flex justify-content-center align-items-center">
            <Link to="/product">
            <button type="button" class="btn btn-primary ">Back To Products</button>
            </Link>
        </div>
    </div>
  )
}

export default order;
