import React from "react";
import { Inputstyle } from "./style";

interface CustumInputProps {
  name: string;
  placeholder: string;
}

const CustumInput: React.FC<CustumInputProps> = ({ placeholder, name }) => {
  return (
      <Inputstyle placeholder={placeholder} type={name} required />
  );
};

export default CustumInput;
