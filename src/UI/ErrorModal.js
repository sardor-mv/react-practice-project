import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Card className={classes.modal}>
      <div>
        <div className={classes.backdrop} />
      </div>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button>Footer Section </Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
