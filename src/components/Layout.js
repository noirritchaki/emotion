import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export function Layout({ title, indicator, navi, body, footer }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingTop: "16%",
      }}
    >
      <div>{navi}</div>
      <p className="step-indicator">{indicator}</p>
      <h3>{title}</h3>
      <div>{body}</div>
      <Box
        className={"cta-container"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className="next-cta"
          variant="contained"
          onClick={footer.onClick}
          sx={{
            position: "fixed",
            bottom: "0px",
            margin: "20px 20px 48px 20px",
            background: "green",
          }}
        >
          {footer.txt}
        </Button>
      </Box>
    </Box>
  );
}
