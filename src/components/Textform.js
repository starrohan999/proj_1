import React, { useState } from "react";
import copy from "copy-to-clipboard";

//const [text, setText] = useState('Dummy Text');

export default function Textform(props) {
  //const [copyText, setCopyText] = useState("");
  const [text, setText] = useState("");

  //function for perform uppercase operation
  const UpperTextDone = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  //function for perform Lowercase operation
  const LowerTextDone = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //function for clear the text " "
  const ClearText = () => {
    setText("");
  };

  //function for copy to clipboard
  const copyToClipboard = () => {
    if (text === "") {
      alert("Nothing to be Copied!!!!!");
    } else {
      copy(text);
      alert(`You have copied "${text}"`);
    }
  };

  return (
    <>
      <div className="mb-3">
        <h1 className="text-center my-5">{props.heading}</h1>
        <textarea
          className="form-control border border-3 border-dark"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleonChange}
          placeholder="Enter your text here😎"
        ></textarea>
      </div>
      <div className="container text-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={UpperTextDone}
        >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={LowerTextDone}
        >
          Lowercase
        </button>
        <button type="button" className="btn btn-danger " onClick={ClearText}>
          Clear
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="container my-3">
        <h1>Summary of Above Text</h1>
        <table class="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">Words</th>
              <th scope="col">Characters</th>
              <th scope="col">Reading Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{text.split(" ").length}</td>
              <td>{text.length}</td>
              <td>{((text.split(" ").length * 4.16) / 60).toFixed(2)} min.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
