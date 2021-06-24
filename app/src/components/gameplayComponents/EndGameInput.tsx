import React from "react";
import { createPortal } from "react-dom";
import { userInfoType } from "../../hooks/useUserInfo";
import "../../css/main.css";

interface Props {
  userInfoState: [
    userInfoType,
    React.Dispatch<React.SetStateAction<userInfoType>>
  ];
}

const EndGameInput: React.FC<Props> = ({ userInfoState }) => {
  const [userInfo, setUserInfo] = userInfoState;

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
