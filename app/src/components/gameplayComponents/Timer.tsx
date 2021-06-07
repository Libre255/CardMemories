import React from 'react'

interface Props{
  Timer:number;
}
const Timer :React.FC<Props> = ({Timer}) => {

  return(
    <div>{Timer}</div>
  )
}

export default Timer 
