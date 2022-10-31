import React, { useState } from "react";
// import styles from "./UserInput.module.css";
import Button from "../../UI/Button";

const UserInput = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const usernameInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredInput.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddUsername(enteredInput);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="user-input">
        <label style={{ color: !isValid ? "red" : "black" }}> Username</label>
        <input type="text" onChange={usernameInputHandler} />
      </div>
      <Button type="button"></Button>
    </form>
  );
};

export default UserInput;
