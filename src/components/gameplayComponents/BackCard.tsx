interface BackCardProps {
  onCardClick: () => void;
}

const BackCard: React.FC<BackCardProps> = ({ onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick()}
      className={`animate__animated animate__fadeIn cardComponent backCard `}
    />
  );
};

export default BackCard;
