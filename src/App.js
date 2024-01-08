import "./App.css";

import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./action";

class App extends Component {
  constructor(props, state) {
    super(props, state);
  }

  clickHandler = (event) => {
    // action methods on mapDispatchToProps..
    this.props.getUsers();
  };

  render() {
    return (
      <Fragment>
        <h1>Click to get users</h1>
        <button onClick={this.clickHandler}>Fetch users</button>
        {this.props.users.map((user) => {
          return <li key={user.id}>{user.username}</li>;
        })}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { userlist } = state;
  return { users: userlist };
}

function mapDispatchToProps(dispatch) {
  return {
    // this dispatches an action to the redux store...
    getUsers: () => dispatch(fetchUsers()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
