import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "sucess");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "sucess");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Clear text!", "sucess");
  };
  const handleonChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    console.log(text);
  };
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy the Text!", "sucess");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove The Extra Space!", "sucess");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "black" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <label htmlFor="MyBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter Your Text "
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "white",
            }}
            id="MyBox"
            rows="05"
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
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === "dark" ? "black" : "black",
        }}
      >
        <h2>Your Text Summary Report</h2>
        <p>
          {text.length && text.split(" ").length} words and {text.length}
          characters
        </p>
        <p>{0.008 * text.split("").length} Minutes Reads</p>
        <h2>Preview Text Here</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
