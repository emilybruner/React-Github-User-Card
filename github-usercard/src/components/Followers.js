import React from 'react';
import axios from 'axios';
import FollowersCard from './FollowersCard'

class Followers extends React.Component {

    state = {
        followers: []
    }

    componentDidMount = () => {
        axios.get('https://api.github.com/users/emilybruner/followers')
            .then(response => {
                console.log('follower info', response.data)
                this.setState({
                    followers: response.data
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                {this.state.followers.map(follower => (
                    <FollowersCard
                        key={this.state.id}
                        img={this.state.img}
                        name={this.state.login}
                        followers={this.state.followers_url}
                        bio={this.state.bio}
                    />
                ))}
            </div>
        );
    }
}

export default Followers;