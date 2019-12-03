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
                        key={follower.id}
                        img={follower.avatar_url}
                        followers={follower.login}

                    />
                ))}
            </div>
        );
    }
}

export default Followers;