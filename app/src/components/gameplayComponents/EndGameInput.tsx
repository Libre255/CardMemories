import React from "react";
import { createPortal } from "react-dom";
import "../../css/main.css";

const EndGameInput: React.FC = () => {
  return createPortal(
    <div id="EndGameInput">
      <label>Insert Name </label>
      <input type="text" />
      <button>Submit</button>
    </div>,
    document.body
  );
};

export default EndGameInput;
