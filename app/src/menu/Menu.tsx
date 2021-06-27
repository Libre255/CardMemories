import React from "react";
import { useNavigate } from "react-router";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div id="menu" className="testBox">
      <div
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
        className="testBox menuButtons"
      >
        Start New Game!
      </div>
      <div onClick={() => navigate("/ranking")} className="testBox menuButtons">
        Ranking{" "}
      </div>
    </div>
  );
};

export default Menu;
