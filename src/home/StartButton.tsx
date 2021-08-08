import React from "react";
interface Props {
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartButton: React.FC<Props> = ({ setStartGame }) => {
  return (
    <div
      id="startButton"
      className="animate__animated animate__fadeIn"
      onClick={() => setStartGame(true)}
    >
      <span>
        Start
        <br />
        Game
      </span>
    </div>
  );
};

export default StartButton;
