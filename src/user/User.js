import React from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";

const User = () => {
  const [{ userInfo }] = useStateValue();
  const history = useHistory();
  return (
    <div>
      {!userInfo && history.push("/login")}
      User Dashboard Comes here
    </div>
  );
};

export default User;
