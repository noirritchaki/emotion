import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export function Layout({ title, indicator, body, footer }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingTop: "35%",
      }}
    >
      <p className="step-indicator">{indicator}</p>
      <h3>{title}</h3>
      <div>{body}</div>
      <Box
        className={"cta-container"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          className="next-cta"
          variant="contained"
          onClick={footer.onClick}
          sx={{ position: "absolute", bottom: "48px" }}
        >
          {footer.txt}
        </Button>
      </Box>
    </Box>
  );
}
