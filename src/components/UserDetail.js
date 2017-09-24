import React from "react";
import UserInfo from "./UserInfo";

function UserDetail (props) {
  const userId = props.match.params.id;
  const user = props.users.find(u => u.id == userId) || {};

  return (
    <div>
      <UserInfo user={user} />
      <img src={user.avatar} />
    </div>
  );
}

export default (UserDetail);