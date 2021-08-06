import React from "react";
import { useNavigate } from "react-router";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div id="menu">
      <div
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
        className="menuButtons animate__animated animate__fadeIn"
      >
        Start New Game
      </div>
      <div
        onClick={() => navigate("/ranking")}
        className="menuButtons animate__animated animate__fadeIn"
      >
        Ranking{" "}
      </div>
    </div>
  );
};

export default Menu;
