import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    followers: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/emilybruner")
      .then(response => response.json())
      .then(data => {
        this.setState({ followers: data.message });
      });
  }


  render() {
    return (
      <div>
        <h2>Github UserCards</h2>
      </div >
    );
  }
}




export default App;
