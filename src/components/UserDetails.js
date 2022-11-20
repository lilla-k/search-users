

const UserDetails = (props) => {
    return(
        <div className="UserDetails-container">
            <div>{props.name}</div>
            <div>{props.location}</div>
            <div>{props.company}</div>
            <div>Followers: {props.followers}</div>
            <img src={props.img} alt={props.name}/>
        </div>
    )
}

export default UserDetails;