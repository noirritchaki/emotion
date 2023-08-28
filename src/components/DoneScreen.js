import React from "react";
import { Box, Divider } from "@mui/material";
import dayjs from "dayjs";

function DoneScreen({
  mood = ["neutral"],
  selectedActions = ["Sleeping"],
  selectedOption = ["Grateful"],
  note = "I'm grateful for my family",
  currentStep = 4,
}) {
  console.log(mood, selectedActions, selectedOption, note, currentStep);
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      maxWidth={"240px"}
      margin={"auto"}
      color={"white"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        color={"white"}
      >
        <h1>done!</h1>
        <p style={{ color: "#585858", marginTop: "20px" }}>
          you have added your emotion check-in
        </p>
      </Box>
      <Box
        color={"#585858"}
        marginTop={4}
        display={"flex"}
        alignItems={"center"}
        gap={"8px"}
      >
        <Divider
          sx={{ minWidth: "50px", backgroundColor: "#585858", height: "1px" }}
        />
        {"Your Summary"}
        <Divider
          sx={{ minWidth: "50px", backgroundColor: "#585858", height: "1px" }}
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
        marginTop={4}
      >
        <h2>{"you're feeling"}</h2>
        <br />
        <h2 style={{ color: "red" }}>{selectedOption.join(" ")}</h2>

        <p style={{ fontSize: "14px", marginTop: "24px" }}>{note}</p>

        <Box
          sx={{
            marginTop: "24px",
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            gap: "10px",
          }}
        >
          {selectedActions.map((action) => (
            <p
              style={{
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "100%",
                border: "1px solid white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-block",
                padding: "4px 10px",
                height: "26px",
                borderRadius: "35px",
              }}
            >
              {action}
            </p>
          ))}
        </Box>
        <Box marginTop={6}>
          <p style={{ color: "#585858" }}>
            {dayjs().format("ddd DD MMM hh:mm a")}
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default DoneScreen;
