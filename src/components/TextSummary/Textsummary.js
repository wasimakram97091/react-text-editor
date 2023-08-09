import React, { useRef } from "react";
import { useState } from "react";

const Textsummary = (props) => {
  const [text, setText] = useState("");
  const elementRef = useRef();

  const handleToUc = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleToLc = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleToClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleToCopy = () => {
    let newText = elementRef.current;
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleToExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const handleToVoice = (e) => {
    let text = elementRef.current.value;
    e.preventDefault();
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2 className="my-3 text-decoration-underline">Edit your text here</h2>

        <textarea
          className="form-control"
          rows="8"
          // id="MyText"
          ref={elementRef}
          name="text"
          placeholder="write here..."
          value={text}
          onChange={changeHandler}
          style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === "dark" ? "white" : "#042743" }}
        ></textarea>

        <button type="button" className="btn btn-primary  my-3" onClick={handleToUc}>
          Change to UpperCase
        </button>

        <button type="button" className="btn btn-dark mx-2 my-3" onClick={handleToLc}>
          Change to LowerCase
        </button>

        <button type="button" className="btn btn-warning mx-2 my-3" onClick={handleToCopy}>
          Copy all text
        </button>

        <button type="button" className="btn btn-success mx-2 my-3" onClick={handleToExtraSpaces}>
          Remove extra spaces
        </button>

        <button type="button" className="btn btn-danger mx-2 my-3" onClick={handleToClear}>
          Clear all text
        </button>

        <button type="button" id="#speak-btn" className="btn btn-secondary mx-2 my-3" onClick={handleToVoice}>
          Voice button
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h3>Your text summary</h3>
        <p>
          <span className="fw-bold">
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </span>{" "}
          words and <span className="fw-bold">{text.length}</span> Characters
        </p>
        <p>
          Took time to read - <span className="fw-bold">{0.008 * text.split(" ").length}</span> minutes
        </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "write something above to preview here"}</p>
      </div>
    </>
  );
};

export default Textsummary;
