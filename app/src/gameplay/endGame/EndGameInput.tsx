import React, { useState } from "react";
import { createPortal } from "react-dom";
import { userInfoType } from "../../common/hooks/useUserInfo";
import "../../css/main.css";
import axios from "axios";

interface Props {
  userInfoState: [
    userInfoType,
    React.Dispatch<React.SetStateAction<userInfoType>>
  ];
}

const EndGameInput: React.FC<Props> = ({ userInfoState }) => {
  const [userInfo, setUserInfo] = userInfoState;
  const [alert, setAlert] = useState<string>("");

  const sendUserInfo = () => {
    if (!userInfo.name) {
      setAlert("red");
    } else {
      axios.post("/ranking", {
        name: userInfo.name,
        score: userInfo.score,
        date: userInfo.date,
        time:userInfo.time
      });
      window.location.reload();
    }
  };

  return createPortal(
    <div id="EndGameInput">
      <div id="endGameBox">
        <span id="endGameTitle">Submit Score</span>
        <input
          type="text"
          placeholder="Insert Name"
          style={{ border: `3px solid ${alert}` }}
          onChange={(e) => {
            setAlert("black");
            setUserInfo((pv) => ({ ...pv, name: e.target.value }));
          }}
        />
        <div id="endGameButtonsBox">
          <span onClick={sendUserInfo}>Submit</span>
          <span onClick={() => window.location.reload()}>Exit</span>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EndGameInput;
