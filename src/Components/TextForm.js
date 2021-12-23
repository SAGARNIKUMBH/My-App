import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "Success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "Success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Clear text!", "Success");
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
    document.getSelection().removeAllRanges();
    props.showAlert("Copy the Text!", "Success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove The Extra Space!", "Success");
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
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
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
          {text.length && text.split(" ").length} words and{" "}
          {text.replace(/\s+/g, "").length}
          characters
        </p>
        <p>{0.008 * text.split("").length} Minutes Reads</p>
        <h2>Preview Text Here</h2>
        {/* <p>{text.length > 0 ? text : "Enter something to preview here"}</p> */}
        <div className="row row-cols-1 row-cols-md-1 g-2">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <p>{text.length > 0 ? text : " "}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
