import React from 'react';
import { useState } from 'react';
import './User.css';

const User = (props) => {
  const [showRank, setShowRank] = useState(false);
  let buttontext="Show rank";
  showRank===false? buttontext="Show rank": buttontext="Not show rank"

  const showRankHandler = () =>{
    showRank===false? setShowRank(true): setShowRank(false);
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
        onClick={()=>props.onShowDetails(props.login)}
      >Show more</button>
      <button
        onClick={showRankHandler}
      >{buttontext}</button>
      
      {showRank===true && <div>Rank: User</div>}

    </div>
  );
}

export default User;