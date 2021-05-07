import React from 'react';
import './Cart.css'
const Cart = (props) => {
    
    const cart=props.cart;
   
    
        return (
            <div className='cart-info'>
                <h1>Information Of {cart.name}</h1>
                <p>Email: {cart.email}</p>
                <p>Gender: {cart.gender}</p>
                <p>Salary: {cart.salary}</p>
                <p>AnnualSalary: {cart.annualsalary}</p>
              
            </div>
        );
    
  
};

export default Cart;