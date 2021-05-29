import React, { useState } from 'react'
import CardDeck from './cardComponents/CardDeck'
import SmashBar from './SmashBar'


const GamePlayBox :React.FC = () => {
  const [SmashBarPower, setSmashBarPower] = useState<number>(0)
  
  return(
    <>
      <CardDeck setSmashBarPower={setSmashBarPower}/>
      <SmashBar SmashBarPower={SmashBarPower} />
    </>
  )
}

export default GamePlayBox 