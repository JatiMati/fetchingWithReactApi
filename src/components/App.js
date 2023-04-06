import React, { Component } from "react";
import ButtonFetchUsers from "./ButtonFetchUsers";
import Users from "./Users";

class App extends Component {
  state = {
    users: [],
  }

  renderUsers = () => {
    return (
      this.state.users.map(user => (
        <Users
          title={user.name.title}
          key={user.email}
          name={user.name.first}
          image={user.picture.large} />
      )))
  }

  fetchUsers = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then(data => data.json())
      .then(array => this.setState({
        users: array.results,
      }))
  }

  componentDidMount() {
    // this.fetchUsers()
  }

  handleClickReload = () => {
    console.log('nie sdziadasd');
    this.fetchUsers()
  }

  render() {
    console.log(this.state.users);
    return (
      <>
        <ButtonFetchUsers click={this.handleClickReload} />
        {this.renderUsers()}
      </>
    );
  }
}

export default App;