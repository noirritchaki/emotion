import React from "react";
import { Box, Divider } from "@mui/material";
import dayjs from "dayjs";
import "../styles/DoneScreens.css";

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
        <h1 style={{ fontSize: "32px", fontWeight: "800" }}>great job!</h1>
        <p
          style={{
            color: "#585858",
            marginTop: "20px",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "150%",
          }}
        >
          you've added your emotions
        </p>
      </Box>
      <Box
        color={"#585858"}
        marginTop={"64px"}
        display={"flex"}
        alignItems={"center"}
        gap={"8px"}
        fontSize={"16px"}
        fontWeight={"600"}
        lineHeight={"150%"}
      >
        <Divider
          sx={{ minWidth: "50px", backgroundColor: "#585858", height: "1px" }}
        />
        {"your summary"}
        <Divider
          sx={{ minWidth: "50px", backgroundColor: "#585858", height: "1px" }}
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
        marginTop={"40px"}
      >
        <span>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "800",
              paddingBottom: "4px",
            }}
          >
            {"you're feeling"}
          </h2>
        </span>
        <h2 style={{ color: "#70D481", fontSize: "24px", fontWeight: "800" }}>
          {selectedOption.join(", ")}
        </h2>

        <p
          style={{
            fontSize: "14px",
            marginTop: "24px",
            fontWeight: "400",
            lineHeight: "150%",
            width: "250px",
          }}
        >
          {note}
        </p>

        <Box
          sx={{
            marginTop: "16px",
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
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
        <Box marginTop="24px">
          <p style={{ color: "#585858" }}>
            {dayjs().format("ddd DD MMM hh:mm a")}
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default DoneScreen;
