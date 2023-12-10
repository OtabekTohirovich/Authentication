import React from "react"
import { Buttonstyle } from "./style"

interface CustumButtonProps {
  submitHandler?: any
  name: string
}

const CustumButton:React.FC<CustumButtonProps> = ({name, submitHandler}) => {
  return (
    <Buttonstyle onClick={()=> {
      submitHandler()
    }}>
        {name}
    </Buttonstyle>
  )
}

export default CustumButton