import React from 'react';

const User = (props) => (
    <div> {console.log(props)}Welcome, {props.userInfo.name}! </div>
)

export default User;