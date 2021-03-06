import React from "react";
import RankingList from "./RankingList";

const RankingPage: React.FC = () => {
  return (
    <div
      id="RankingPage"
      className="animate__animated animate__fadeIn"
      style={{ backgroundImage: "url(img/golden-rose.png)" }}
    >
      <RankingList />
    </div>
  );
};

export default RankingPage;
