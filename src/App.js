import React, { Component } from "react";
import "./App.css";
import UserDetailContainer from "./containers/UserDetailContainer";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import SearchBoxContainer from "./containers/SearchBoxContainer";
import {connect} from "react-redux";
import {loadUsers} from "./actions";
import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";
 

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    return (
      <BrowserRouter>
       <div>
          <Switch>
           <Route path="/users" render={(props) => {
             return (
               <div>
                 <SearchBoxContainer />
                 <ListOfUsersContainer />
               </div>
             );
           }} />
           {/* Below is a shortcut for Routes */}
           <Route path="/user/:id" component={UserDetailContainer} />
           </Switch>
       </div>
     </BrowserRouter>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loadUsers() {
      dispatch(loadUsers());
    }
  };
}
export default connect(null,mapDispatchToProps)(App);
