import React from 'react';
import { useState } from 'react';
import './User.css';

const User = (props) => {
  const [showRank, setShowRank] = useState(false);
  const buttonText = showRank ? "Hide rank" :"Show rank" ;

  const showRankHandler = () => {
    setShowRank(!showRank);
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
        onClick={() => props.onShowDetails(props.login)}
      >Show more</button>
      <button
        onClick={showRankHandler}
      >{buttonText}</button>

      {showRank === true && <div>Rank: User</div>}

    </div>
  );
}

export default User;