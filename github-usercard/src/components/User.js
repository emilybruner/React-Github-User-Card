import React from 'react'
import axios from 'axios';
import UserCard from './UserCard';

class User extends React.Component {
    state = {
        user: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/emilybruner')
            .then(response => {
                this.setState({
                    name: response.data.name,
                    img: response.data.avatar_url,
                    location: response.data.location,
                    profile: response.data.html_url,
                    followers: response.data.followers,
                    following: response.data.following,
                    bio: response.data.bio
                });
            })
            .catch(error => console.log('error'));
    }

    render() {
        return (
            <div>
                <UserCard user={this.state.name} img={this.state.img} bio={this.state.bio} />
            </div>
        );
    }
}

export default User;