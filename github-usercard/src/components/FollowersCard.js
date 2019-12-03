import React from 'react'

const FollowersCard = (props) => {
    return (
        <div>
            <img src={props.img} alt="user" />
            <p>Name: {props.login}</p>
            <p>Bio {props.bio}</p>
        </div>
    )
}
export default FollowersCard;