import React, { useState } from "react";
import "./App.css";

function App() {
  const [chapterId, setChapterId] = useState(1);
  const [shlokId, setShlokId] = useState(1);

  function prevChap() {
    if (chapterId > 1) {
      setChapterId(chapterId - 1);
    } else alert("It is the very first Chapter");
  }
  function nextChap() {
    if (chapterId < 18) {
      setChapterId(chapterId + 1);
    } else alert("It is the very last Chapter");
  }
  function prevShlok() {
    if (shlokId > 1) {
      setShlokId(shlokId - 1);
    } else alert("It is the very first Shloka");
  }
  function nextShlok() {
    setShlokId(shlokId + 1);
  }

  return (
    <div className="main">
      <img
        src={
          "https://vedicscripturesapi.herokuapp.com/gita.svg?ch=" +
          chapterId +
          "&sl=" +
          shlokId
        }
    alt="Shloka"
      />
      <div className="count">
        <h3>Current Chapter : {chapterId}</h3>
        <h3>Current Shloka : {shlokId}</h3>
      </div>
      <div className="btn-container">
        <button className="btn btn-1" onClick={prevChap}>
          Previous Chapter
        </button>
        <button className="btn btn-2" onClick={nextChap}>
          Next Chapter
        </button>
        <button className="btn btn-3" onClick={prevShlok}>
          Previous Shloka
        </button>
        <button className="btn btn-4" onClick={nextShlok}>
          Next Shloka
        </button>
      </div>
    </div>
  );
}

export default App;
