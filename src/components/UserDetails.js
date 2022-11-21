import './UserDetails.css';

const UserDetails = (props) => {
  return (
    <div id="UserDetails-container">
      <div id="UserDetails">
        <button id="closingButton" onClick={props.onClose}>X</button>
        <img src={props.img} alt={props.name} />
        <div><strong>Name: </strong> {props.name}</div>
        <div><strong>Location: </strong>{props.location}</div>
        <div><strong>Company: </strong>{props.company}</div>
        <div><strong>Followers: </strong> {props.followers}</div>
      </div>

    </div>
  )
}

export default UserDetails;