import React from 'react'

const UserCard = ({ user, img, location, html_url, followers, following, bio }) => {
    return (
        <div>
            <img src={img} alt="user profilepic" />
            <p>Name: {user}</p>
            <p>Location: {location}</p>
            <p>Profile: {html_url}</p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}

export default UserCard;