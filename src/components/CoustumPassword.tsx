import React, { useState } from "react";
import { Inputstyle } from "./style";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface CoustumPasswordProps {
  name: string;
  placeholder: string;
  setPassword: any;
}

const CoustumPassword: React.FC<CoustumPasswordProps> = ({
  placeholder,
  name,
  setPassword,
}) => {
  const [change, setChange] = useState(name);
  const ToggleChangeHandle = () => {
    setChange(change == "password" ? "text" : "password");
  };

  return (
    <label style={{ position: "relative", maxWidth: "369px", width: "100%" }}>
      <Inputstyle
        onChange={(password) => {
          setPassword(password.target.value);
        }}
        placeholder={placeholder}
        type={change}
        required
      />
      {name == "password" ? (
        <IconButton
          onClick={() => {
            ToggleChangeHandle();
          }}
          sx={{ position: "absolute", bottom: "10px", right: "14px" }}
        >
          {change == "password" ? (
            <VisibilityOff sx={{ color: " #a7a2ff", fontSize: "20px" }} />
          ) : (
            <Visibility sx={{ color: " #a7a2ff", fontSize: "20px" }} />
          )}
        </IconButton>
      ) : (
        <></>
      )}
    </label>
  );
};

export default CoustumPassword;
