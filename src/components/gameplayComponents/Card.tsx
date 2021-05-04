import React, { useState } from "react";

const Card: React.FC = () => {
  const [flipped, setFlipped] = useState<boolean>(false);
  const onCardClick = () => {
    setFlipped(true);
  };
  if (flipped) {
    return <FrontCard />;
  } else {
    return <BackCard onCardClick={onCardClick} />;
  }
};

interface BackCardProps {
  onCardClick: () => void;
}
const BackCard: React.FC<BackCardProps> = ({ onCardClick }) => {
  return (
    <div
      onClick={onCardClick}
      className={`animate__animated animate__fadeIn cardComponent backCard `}
    />
  );
};

const FrontCard: React.FC = () => {
  return (
    <div
      className={`animate__animated animate__fadeIn cardComponent frontCard`}
    />
  );
};

export default Card;
