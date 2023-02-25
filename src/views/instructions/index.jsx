import { useState } from "react";
import { Box } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";

const instructions = [
  "Red indicates high risk and player may or may not invest today.",
  "Yellow indicates low risk and invest less today.",
  "Green indicates to invest today.",
];

function Instructions() {
  return (
    <Box gap={2}>
      <Box displa="flex" textAlign="center">
        <Box>The game will be based on the events Red, Yellow and Green</Box>
      </Box>
      {instructions.map((val) => (
        <Box displa="flex" alignItems="center" marginY={2}>
          <CircleIcon
            fontSize="small"
            style={{ width: "12px", height: "12px", marginRight: "12px" }}
          />
          {val}
        </Box>
      ))}
    </Box>
  );
}

export default Instructions;
