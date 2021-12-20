import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleonChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    console.log(text);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="MyBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            // placeholder="Enter The Textarea :- "
            onChange={handleonChange}
            id="MyBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>
          {text.length && text.split(" ").length} words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split("").length} Minutes Reads</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
