import React from "react";
import { SmashBarType } from "./GamePlayBox";
interface Props {
  smashBarState: [
    SmashBarType,
    React.Dispatch<React.SetStateAction<SmashBarType>>
  ];
}
const SmashBarContainer: React.FC<Props> = ({ smashBarState }) => {
  const [SmashBarPower, setSmashBarPower] = smashBarState;

  return (
    <div id="SmashBarBox">
      <SmashBar powerProcent={SmashBarPower.powerProcent} />
      {SmashBarPower.ShowPowerButton ? (
        <SmashButton setSmashBarPower={setSmashBarPower} />
      ) : (
        ""
      )}
    </div>
  );
};

interface SmashBarProps {
  powerProcent: number;
}
const SmashBar: React.FC<SmashBarProps> = ({ powerProcent }) => {
  return (
    <div id="SmashBar">
      <div id="SmashBarPoints" style={{ width: `${powerProcent}%` }} />
    </div>
  );
};

interface SmashButtonProps {
  setSmashBarPower: React.Dispatch<React.SetStateAction<SmashBarType>>;
}
const SmashButton: React.FC<SmashButtonProps> = ({ setSmashBarPower }) => {
  return (
    <div
      id="SmashButton"
      onClick={() => setSmashBarPower((pv) => ({ ...pv, ActivatePower: true }))}
    >
      Flipp All Cards!
    </div>
  );
};

export default SmashBarContainer;
