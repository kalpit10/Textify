import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCharClick = () => {
    let newText = text.charAt(text);
    setText(newText);
    props.showAlert("Took out the first character..", "success");
  }; 

  const handleOnChange = (event) => {
    //if I had not done this, i wouldnt be able to write anything in my textbox as i have given value prop inside
    //textArea and it is set to text variable of useState
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            // By providing an onChange method, you can capture the user's input and update the state of the component.
            // This enables React to re-render the component and update the UI with the new value.
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCharClick}>
          Reads First character
        </button>
      </div>
      <div className="container my-3">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your text summary
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {/* split the words into an array(remember the space) */}
          {text.trim().length === 0 ? 0 : text.trim().split(" ").length} words
          and {text.length} characters
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.008 * text.split(" ").length} Minutes read
        </p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {" "}
          Preview
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
};

export default TextForm;
