import React from 'react';
import UserChart from './UserChart';
    
const User = (props) => (
    <div className="user container"> 
      <div className="user-head"> Welcome, {props.userInfo.name}! </div>
      <div className="user-text"> Here's your energy usage for the year. All numbers measured in kilowatthours (kWh). </div>
      <UserChart usage={props.userInfo.usage}  />
    </div>
)

export default User;