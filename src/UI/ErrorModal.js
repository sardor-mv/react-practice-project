import React from "react";
import reactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import ... from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHandleError}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div>
        <div className={classes.backdrop} onClick={props.onHandleError} />
      </div>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onHandleError}>Footer Section </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
  <>
  {reactDom.createPortal(
      <Backdrop 
          onHandleError={props.onHandleError}
      />, document.getElementById('backdrop-root')
  )} 
  {/* we are portaling the html content into a different place.   */}
  {reactDom.createPortal(
      <ModalOverlay   
          title={props.title} 
          message={props.message} 
          onClick={props.onHandleError} 
      />, document.getElementById('overlay-root')
    )}
  </>
  )
};

export default ErrorModal;
