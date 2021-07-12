import React, { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchstate {
  name: string;
  user: User | undefined;
}

class ClassComponent extends Component<UserSearchProps> {
  state: UserSearchstate = {
    name: '',
    user: undefined,
  };

  onClick() {
    const { name } = this.state;
    const { users } = this.props;
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    this.setState({ users: foundUser });
  }
  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h2>Search User</h2>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default ClassComponent;
