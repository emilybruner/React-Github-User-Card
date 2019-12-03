import React from 'react'

const UserCard = (props) => {
    return (
        <div className="usercard">
            <img src={props.img} alt="user profilepic" />
            <p>Name: {props.user}</p>
            <p>Location: {props.location}</p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
            <p>Bio: {props.bio}</p>
        </div>
    )
}

export default UserCard;