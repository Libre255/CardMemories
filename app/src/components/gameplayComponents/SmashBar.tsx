import React from 'react'
interface Props {
  SmashBarPower:number;
}
const SmashBar :React.FC<Props> = ({SmashBarPower}) => {
  return(
    <div id="SmashBar">
       <div id="SmashBarPoints" style={{width:`${SmashBarPower}%`}} />
    </div>
  )
}

export default SmashBar 