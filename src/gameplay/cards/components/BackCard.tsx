interface BackCardProps {
  onCardClick: () => void;
}

const BackCard: React.FC<BackCardProps> = ({ onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick()}
      className={`cardComponent backCard animate__animated animate__fadeIn`}
      style={{ backgroundImage: `url("/img/goldenflower.jpg")` }}
    />
  );
};

export default BackCard;
