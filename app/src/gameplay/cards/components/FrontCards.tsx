const FrontCard: React.FC<{ cardValue: number }> = ({ cardValue }) => (
  <div className={`animate__animated animate__fadeIn cardComponent frontCard`}>
    <span> {cardValue}</span>
  </div>
);

export default FrontCard;
