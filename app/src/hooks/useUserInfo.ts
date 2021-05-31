import { useEffect, useState } from "react"

interface userInfoType{
  InsertUserName:boolean;
  score:number;
  name:string;
}
interface Props {
  maxMatchedCardsReached:boolean
}
const useUserInfo = ({maxMatchedCardsReached}:Props)=>{
  const [userInfo, setUserInfo] = useState<userInfoType>({InsertUserName:true, score:0, name:""})

  useEffect(() => {
    if(maxMatchedCardsReached){
      setUserInfo(pv => ({...pv, InsertUserName:true }))
    }
  }, [maxMatchedCardsReached])
  return {userInfo}
}

export {useUserInfo}