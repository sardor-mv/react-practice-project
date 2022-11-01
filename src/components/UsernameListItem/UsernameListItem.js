import React from "react";
import "./UsernameListItem.css";

const UsernameListItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="username-list-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default UsernameListItem;
