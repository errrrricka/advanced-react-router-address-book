import { connect } from 'react-redux';
import UserDetail from "../components/UserDetail";

function mapStateToProps(state){
  return {
    users: state.users
  }
}
                     
const UserDetailContainer = connect(mapStateToProps)(UserDetail); 
export default UserDetailContainer 