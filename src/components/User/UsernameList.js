import React from "react";
import UsernameListItem from "../UsernameListItem/UsernameListItem";

const UsernameList = (props) => {
  return (
    <ul className="username-list">
      {props.userList.map((list) => (
        <UsernameListItem
          key={list.id}
          id={list.id}
          onDelete={props.onDeleteUserList}
        >
          {list.username}
        </UsernameListItem>
      ))}
    </ul>
  );
};

export default UsernameList;
