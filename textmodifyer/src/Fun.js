import React, { useState } from "react";

function TextBox() {
  const [text, setText] = useState("Typing...");
  const [findWord, setFindWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");
  const [countWord, setCountWord] = useState(1);
  const [countChar, setCountChar] = useState(9);

  const newText = (e) => {
    const newValue = e.target.value;
    setText(newValue);
    updateCounts(newValue);
  };

  const updateCounts = (inputText) => {
    const wordCount = inputText.trim().split(/\s+/).filter((w) => w !== "").length;
    setCountWord(wordCount);
    setCountChar(inputText.length);
  };

  function UpperCaseChange() {
    const textupper = text.toUpperCase();
    setText(textupper);
    updateCounts(textupper);
  }

  function LowerCaseChange() {
    const textlower = text.toLowerCase();
    setText(textlower);
    updateCounts(textlower);
  }

  function Clear() {
    setText("");
    setCountChar(0);
    setCountWord(0);
    setFindWord("");
    setReplaceWord("");
  }

  function ReplaceWord() {
    if (!findWord) return; // no find word, no replace
    const regex = new RegExp(findWord, "g"); // global, case sensitive
    const replacedText = text.replace(regex, replaceWord);
    setText(replacedText);
    updateCounts(replacedText);
  }

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-3 text-info">Analyze Text</h2>
        <textarea
          className="form-control"
          placeholder="Type like a legend..."
          style={{
            height: "320px",
            paddingTop: "15px",
            paddingLeft: "10px",
            fontSize: "1.2rem",
          }}
          value={text}
          onChange={newText}
        />

        <div className="row mt-4 g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Find word"
              value={findWord}
              onChange={(e) => setFindWord(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Replace with"
              value={replaceWord}
              onChange={(e) => setReplaceWord(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-primary me-3" onClick={UpperCaseChange}>
            Upper Case
          </button>
          <button className="btn btn-primary me-3" onClick={LowerCaseChange}>
            Lower Case
          </button>
          <button className="btn btn-primary me-3" onClick={ReplaceWord}>
            Replace
          </button>
          <button className="btn btn-danger" onClick={Clear}>
            Clear
          </button>
        </div>

        <div className="mt-4">
          <p>Word Count: {countWord}</p>
          <p>Character Count: {countChar}</p>
        </div>
      </div>
    </>
  );
}

export default TextBox;




