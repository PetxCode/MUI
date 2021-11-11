import React from "react";
import { Button } from "@mui/material";

const MyButton = ({ color, vart, children }) => {
  return (
    <div>
      <Button variant={vart} color={color} onClick={""} disabled>
        {children}
      </Button>
    </div>
  );
};

export default MyButton;
