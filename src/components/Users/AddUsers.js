import React, { useState } from "react";
// import styles from "./UserInput.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./AddUsers.module.css";

const Users = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const usernameInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredInput(event.target.value);
  };
  const ageInputHandler = (event) => {
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
    <Card className={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <div className="user-input">
          <label htmlFor="username">Username</label>
          <input id="username" onChange={usernameInputHandler} />
          <label htmlFor="age">Age</label>
          <input id="age" onChange={ageInputHandler} />
        </div>
        <Button type="submit"></Button>
      </form>
    </Card>
  );
};

export default Users;
