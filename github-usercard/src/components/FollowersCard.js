import React from 'react'

const FollowersCard = ({ followers, img, bio }) => {
    return (
        <div>
            <img src={img} alt="user" />
            <p>Name: {followers}</p>
        </div>
    )
}
export default FollowersCard;