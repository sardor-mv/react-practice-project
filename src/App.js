// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";

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

  return (
    <div className="App">
      <section id="user-input">
        <UserInput onAddInput={addInputHandler} />
      </section>
    </div>
  );
};
export default App;
