import React from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";

const Admin = () => {
  const [{ userInfo }] = useStateValue();
  const history = useHistory();
  return (
    <div>
      {!userInfo && history.push("/login")}
      {userInfo &&
        userInfo.user &&
        !userInfo.user.isAdmin &&
        history.push("/user")}
      Admin Dashboard Comes here ......
    </div>
  );
};

export default Admin;
