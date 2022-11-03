// import logo from './logo.svg';
// import { useInput } from "@mui/base";
import React, { useState } from "react";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [userInput, setUserInput] = useState([
    { username: "Ali", id: "usr1" },
    { username: "Dave", id: "usr2" },
  ]);

  const addInputHandler = (enteredInput) => {
    setUserInput((prevInputs) => {
      const updateUserInputs = [...prevInputs];
      updateUserInputs.unshift({
        username: enteredInput,
        id: Math.random().toString(),
      });
      return updateUserInputs;
    });
  };
  let validationContent = (
    <p style={{ textAlign: "center" }}> No userName found ! </p>
  );
  if (userInput.length > 0) {
    validationContent = (
      <UsernameList userList={userInput} onDeleteList={deleteUserListHandler} />
    );
  }

  return (
    <div className="App">
      <AddUsers onAddInput={addInputHandler} />
      <UsersList users={[]} />
    </div>
  );
};
export default App;
