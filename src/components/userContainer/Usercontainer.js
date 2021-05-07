import React, { useState } from 'react';
import User from '../User/User';
import './userContainer.css'
import fakedata from '../../data/MOCK_DATA.json'
import Cart from '../Cart/Cart';

const Usercontainer = () => {
    const firstFifteen=fakedata.slice(0,15);
    const[user,setUser]=useState(firstFifteen);
    const [cart,setCart]=useState([]);
    const [total,settotal]=useState([]);
    const detailInfo=(info)=>{
        
        const newCart=[...cart,info];
        setCart(newCart);
        
        
    }

    const totalInfo=(info)=>{
        
        const newtotal=[...total,info];
        settotal(newtotal);
        
        
    }

     

    return (
        <div className='user-container'>
            <div className='leftDiv'>
                
                {
                    user.map(us=><User user={us} detailInfo={detailInfo} totalInfo={totalInfo}></User>)
                }
                
            </div>
            <div className='rightDiv'>
                <h1>Peple added {total.length}</h1>
                {
                    cart.map(cart=><Cart cart={cart}></Cart>)
                }
               
            
            </div>
        </div>
    );
};

export default Usercontainer;