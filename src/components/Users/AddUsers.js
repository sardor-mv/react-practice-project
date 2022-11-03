import React, { useState } from "react";
// import styles from "./UserInput.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredInput.trim().length === 0 || enteredAge.trim() === 0) {
      setIsValid(false);
      return;
    }
    if (+enteredAge < 1) {
      // + will turn the enteredAge valaue ( "number" string) to a  number.
      return;
    }
    props.onAddInput(enteredInput, enteredAge); // being executed as a function as a value.
    // we are forwarding the enteredInput and enteredAge value to App.js component.
    setEnteredAge("");
    setEnteredInput("");
  };

  const usernameInputHandler = (event) => {
    setEnteredInput(event.target.value);

    // if (event.target.value.trim().length > 0) {
    //   setIsValid(true);
    // }
    setEnteredInput(event.target.value);
  };

  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div className="user-input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredInput}
            onChange={usernameInputHandler}
          />
          <label htmlFor="age">Age</label>
          <input id="age" value={enteredAge} onChange={ageInputHandler} />
        </div>
        <Button type="submit">Add Users</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
