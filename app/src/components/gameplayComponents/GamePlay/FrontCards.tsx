const FrontCard: React.FC<{cardValue:number}> = ({cardValue}) => (
  <div
    className={`animate__animated animate__fadeIn cardComponent frontCard`}
  >
    {cardValue}
  </div>
);

export default FrontCard;
