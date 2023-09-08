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
          position: "fixed",
          bottom: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          backdropFilter: "blur(8px)",
          width: "100%",
          padding: "10px",
        }}
      >
        <Button
          className="next-cta"
          variant="contained"
          onClick={footer.onClick}
          sx={{
            margin: "20px 20px 20px 20px",
          }}
        >
          {footer.txt}
        </Button>
      </Box>
    </Box>
  );
}
