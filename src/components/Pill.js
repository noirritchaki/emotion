import React from "react";
import { Box, Typography } from "@mui/material";

function Pill({
  action = "Sleeping",
  selected = true,
  selectedActions = [],
  setSelectedActions = () => {},
}) {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: "40px",
        border: "1px solid white",
        width: "140px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: selected && "white",
        color: selected ? "black" : "white",
      }}
    >
      <Typography
        variant={"body2"}
        sx={{ fontSize: "16px", fontWeight: "500" }}
      >
        {action}
      </Typography>
    </Box>
  );
}

export default Pill;
