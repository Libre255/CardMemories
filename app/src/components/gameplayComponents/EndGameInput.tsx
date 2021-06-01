import React from "react";
import { createPortal } from "react-dom";
import "../../css/main.css";
import { userInfoType } from "../../hooks/useUserInfo";

interface Props {
  setUserInfo: React.Dispatch<React.SetStateAction<userInfoType>>;
}

const EndGameInput: React.FC<Props> = ({ setUserInfo }) => {
  return createPortal(
    <div id="EndGameInput">
      <label>Insert Name </label>
      <input
        type="text"
        onChange={(e) => setUserInfo((pv) => ({ ...pv, name: e.target.value }))}
      />
      <button>Submit</button>
    </div>,
    document.body
  );
};

export default EndGameInput;
