import React from "react";
import {Avatar, Popover} from "antd";
import {useAuth} from "../../../util/use-auth";

const UserInfo = () => {
  const {signOut} = useAuth();

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li onClick={() => signOut()}>Logout
      </li>
    </ul>
  );

  return (
    <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions} trigger="click">
      <Avatar src="https://via.placeholder.com/150" className="gx-avatar gx-pointer" alt=""/>
    </Popover>
  );
};

export default UserInfo;
