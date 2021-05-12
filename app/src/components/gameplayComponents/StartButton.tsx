import React from 'react';
interface Props {
  setStartGame:React.Dispatch<React.SetStateAction<boolean>>;
}

const StartButton :React.FC<Props> = ({setStartGame}) => {
  return (
    <div id="startButton" 
        className="testBox2"
        onClick={()=>setStartGame(true)}>
        Start Button
    </div>
  )
}

export default StartButton 