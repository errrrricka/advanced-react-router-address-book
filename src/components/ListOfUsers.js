import React, { Component } from "react";
import {Link} from "react-router-dom";


class ListOfUsers extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let buttonText = "Hide";
    let userDivs = "";
    if (this.state.visible) {
      buttonText = "Hide";
      const filterUsers = this.props.users.filter((u) => {
        return u.first_name.indexOf(this.props.searchText) > -1;
      });
      userDivs = filterUsers.map((user,i) => {
        return (
          <div key={i}>
            {user.first_name} - {user.last_name}
            <Link to={"/user/" + user.id}> View </Link>
          </div>);
      });
    } else { 
      buttonText = "Show";
      userDivs = "";
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {userDivs}
      </div>);
  }
}

export default (ListOfUsers);
