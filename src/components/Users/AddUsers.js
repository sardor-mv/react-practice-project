import React, { useRef, useState } from "react";
// import styles from "./UserInput.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const nameInputRef = useRef("");
  const ageInputref = useRef("");
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef, ageInputref);
    if (enteredInput.trim().length === 0 || enteredAge.trim() === 0) {
      setError({
        title: "Invalid input",
        message: "Please Enter a valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      // + will turn the enteredAge valaue ( "number" string) to a  number.
      setError({
        title: "Invalid Age",
        message: "Please Enter age greater than 0",
      });
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

  const errorHandler = () => {
    setError(null);
    return;
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          key={error.modal}
          title={error.title}
          message={error.message}
          onHandleError={errorHandler}
        />
      )}
      {/* // {error && <ErrorModal></ErrorModal>} conditionally render the error  */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div className="user-input">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={enteredInput}
              onChange={usernameInputHandler}
              ref={nameInputRef}
            />
            <label htmlFor="age">Age</label>
            <input
              id="age"
              value={enteredAge}
              onChange={ageInputHandler}
              red={ageInputref}
            />
          </div>
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
