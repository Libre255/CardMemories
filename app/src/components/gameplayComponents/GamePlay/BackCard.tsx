interface BackCardProps {
  onCardClick: () => void;
}

const BackCard: React.FC<BackCardProps> = ({ onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick()}
      className={`cardComponent backCard animate__animated animate__fadeIn`}
    />
  );
};

export default BackCard;
