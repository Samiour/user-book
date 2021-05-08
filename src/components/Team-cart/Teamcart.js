import React from 'react';
import './Teamcart.css'

const Teamcart = (props) => {
    
    return (
        <div>
            <p>You Have Added {props.total.name} on the team and his salary is {props.total.salary}</p>
           
        </div>
    );
};

export default Teamcart;