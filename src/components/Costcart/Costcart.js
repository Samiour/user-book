import React from 'react';

const Costcart = (props) => {
   const cost=props.cost;
   const total=cost.reduce((total,prd)=>total+prd.salary,0);
    return (
        <div>
            <h3>Total Player cost: {total}</h3>
        </div>
    );
};

export default Costcart;