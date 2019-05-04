import React from 'react';
import './App.css';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import axios from 'axios';
import { Route} from "react-router-dom";

class App extends React.Component {
  
  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = e => {
    this.setState({
        ...this.state.friendInfo,
        [e.target.name]: e.target.value
    })
}

componentDidMount() {
  axios
            .get('http://localhost:5000/friends')
            .then(response => {
                console.log("put response", response.data)
                this.setState({friends: response.data})
            })
            .catch(err => console.error("You got an error bro!", err));
}

deleteFriend = id => {
  console.log('delete friend.. ')
  // e.preventDefault();
  axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response =>{
          console.log("delete response", response.data)
          this.setState({ friends: response.data})
      })
      .catch(err => console.error('delete error:', err))
}

deleteFriend = e => {
  this.setState({
      friendInfo: {
          ...this.state.friendInfo,
          [e.target.name]: e.target.value
      }
  })
}

changeFriendHandler = e => {
  this.setState({
      friendInfo: {
          ...this.state.friendInfo,
          [e.target.name]: e.target.value
      }
  })
}


  render() {
    return (
      <div className="App">
        <Route 
          exact path="/" 
          render={props => 
            <FriendsList {...props} deleteFriend={this.deleteFriend} friends={this.state.friends}/> }/>
        <FriendsForm 
          postFriend={this.postFriend}/>
      </div>
    );
  }
}

export default App;
