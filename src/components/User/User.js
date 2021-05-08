import React from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle,faCoffee,faPlusSquare} from '@fortawesome/free-solid-svg-icons'


const User = (props) => {
    console.log(props.detailInfo);
    
    const{name,address,salary,image}=props.user;
    
   
    return (
        <div className='user-container-div'>
           <div className='img-div'>
              <img src={image} alt=""/> 
           </div>
           <div>
               <h2>{name}</h2>
               <button onClick={()=>props.detailInfo(props.user)} className='detail-button'> <FontAwesomeIcon icon={faInfoCircle} />Details</button>

               <button onClick={()=>props.totalInfo(props.user)} className='detail-button'> <FontAwesomeIcon icon={faPlusSquare} />Add</button>

           </div>
        </div>
    );
};

export default User;