import React, { useRef, useState } from "react";
// import styles from "./UserInput.module.css";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    console.log(nameInputRef.current.value, ageInputref);
    if (enteredName.trim().length === 0 || enteredUserAge.trim() === 0) {
      setError({
        title: "Invalid input",
        message: "Please Enter a valid name and age",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      // + will turn the enteredAge valaue ( "number" string) to a  number.
      setError({
        title: "Invalid Age",
        message: "Please Enter age greater than 0",
      });
      return;
    }
    props.onAddInput(enteredName, enteredUserAge); // being executed as a function as a value.
    // we are forwarding the enteredInput and enteredAge value to App.js component.

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
              // value={enteredInput}
              // onChange={usernameInputHandler}
              ref={nameInputRef}
            />
            <label htmlFor="age">Age</label>
            <input
              id="age"
              // value={enteredAge}
              // onChange={ageInputHandler}
              ref={ageInputRef}
            />
          </div>
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
