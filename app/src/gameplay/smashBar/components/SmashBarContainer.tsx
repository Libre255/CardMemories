import React from "react";
import { SmashBarType } from "../useSmashBarPower";
import SmashBar from "./SmashBar";
import SmashButton from "./SmashButton";

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

export default SmashBarContainer;
