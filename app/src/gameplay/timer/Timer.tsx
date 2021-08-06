import React from "react";

interface Props {
  Timer: number;
}
const Timer: React.FC<Props> = ({ Timer }) => {
  return (
    <div id="timer" className="animate__animated animate__slideInDown">
      {Timer}
    </div>
  );
};

export default Timer;
