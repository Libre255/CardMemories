import React from "react";
import GameMainComponent from "./gameplayComponents/GameMainComponent";

const HomePage: React.FC = () => {
  return (
    <div id="homePage" className="testBox">
      HomePage
      <GameMainComponent />
    </div>
  );
};

export default HomePage;
