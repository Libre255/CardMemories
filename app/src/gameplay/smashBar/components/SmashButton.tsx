import { SmashBarType } from "../useSmashBarPower";

interface SmashButtonProps {
  setSmashBarPower: React.Dispatch<React.SetStateAction<SmashBarType>>;
}
const SmashButton: React.FC<SmashButtonProps> = ({ setSmashBarPower }) => {
  return (
    <div
      id="SmashButton"
      className="animate__animated animate__zoomIn"
      onClick={() => setSmashBarPower((pv) => ({ ...pv, ActivatePower: true }))}
    >
      Smash
    </div>
  );
};

export default SmashButton;
