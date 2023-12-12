import React from "react";
import { Inputstyle } from "./style";

interface CustumInputProps {
  name: string;
  placeholder: string;
  handleSubmit: any
}

const CustumInput: React.FC<CustumInputProps> = ({ placeholder, name, handleSubmit }) => {
  return (
      <Inputstyle onChange={(text)=> {
        handleSubmit(text.target.value)
      }} placeholder={placeholder} type={name} required />
  );
};

export default CustumInput;
