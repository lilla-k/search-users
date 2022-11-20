import React from 'react';
import './User.css';

const User = (props) => {
  return (
    <div
      className="User-card"
    >
      <img
        src={props.img}
        alt={props.name}
      />
      <div
        className="User-name"
      >{props.name}</div>
      <button
        onClick={()=>props.onShowDetails(props.login)}
      >Show more</button>

    </div>
  );
}

export default User;