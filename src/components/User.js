import React from 'react';
import { useState } from 'react';
import './User.css';

const User = (props) => {

  const [buttontext, setButtonText] = useState("Show rank")

  const showRankHander = () =>{
    buttontext==="Show rank"? setButtonText("Not show rank"): setButtonText("Show rank")
  }

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
        onClick={showRankHander}
      >{buttontext}</button>
      <button
        onClick={()=>props.onShowDetails(props.login)}
      >Show more</button>
      {buttontext==="Not show rank" && <div>Rank: User</div>}

    </div>
  );
}

export default User;