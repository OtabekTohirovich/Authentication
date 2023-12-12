import React from "react"
import { Buttonstyle } from "./style"

interface CustumButtonProps {
  handleSubmit?: any
  name: string
}

const CustumButton:React.FC<CustumButtonProps> = ({name, handleSubmit}) => {
  return (
    <Buttonstyle onClick={()=> {
      handleSubmit()
    }}>
        {name}
    </Buttonstyle>
  )
}

export default CustumButton