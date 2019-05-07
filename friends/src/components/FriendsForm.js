import React from 'react';

class FriendsForm extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                friendInfo: {
                    name: '',
                    age: [],
                    email: ''
                }
            }
        }

        handleChange = e => {
            this.setState({
                ...this.state.friendInfo,
                [e.target.name]: e.target.value
            })
        }
    
        postFriend = e => {
            e.preventDefault();
            this.props.postFriend(this.state.friendInfo);
        }
    


        render() {
        return (
            <form onSubmit={this.postFriend}>
                <input 
                type="text"
                placeholder="name"
                value={this.props.name}
                onChange={this.props.inputHandler}
                />

                <input 
                type="number"
                placeholder="age"
                value={this.props.age}
                onChange={this.props.inputHandler}
                />

                <input 
                type="text"
                placeholder="email"
                value={this.props.email}
                onChange={this.props.inputHandler}
                />
            </form>
        );
    }
}

export default FriendsForm;