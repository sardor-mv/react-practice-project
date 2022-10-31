import React from "react";

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
