import React from 'react';

const Display = (props) => {
        return (
          <div>
            <h2>Thanks for Registering</h2>
            <h4>{props.user.fname}</h4> 
            <h4>{props.user.lname}</h4> 
            <h4>{props.user.email}</h4> 
            <h4>{props.user.password}</h4> 
                 
            </div>
        )
        
}
export default Display;