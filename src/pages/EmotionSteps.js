import React, { useState } from "react";
import { colors, moreColors } from "../constants/colours.js";
import Button from "@mui/material/Button";
import "../styles/EmotionSteps.css";
import { Layout } from "../components/Layout";
import { Box, Step, TextField, Typography } from "@mui/material";
import Pill from "../components/Pill";
import DoneScreen from "../components/DoneScreen";
import LottiePlayer from "lottie-react";
import Fine from "../assets/fine.json";
import Low from "../assets/low.json";
import Neutral from "../assets/neutral.json";
import Good from "../assets/good.json";
import Down from "../assets/down.json";
import GoodSelected from "../assets/good-selected-new.json";
import FineSelected from "../assets/fine-selected-new.json";
import DownSelected from "../assets/down-selected-new.json";
import LowSelected from "../assets/low-selected-new.json";
import NeutralSelected from "../assets/neutral-selected-new.json";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//creating a function to store the step currently on and the emotion selected

export function EmotionSteps({
  steps,
  onComplete,
  setStarted,
  emotionDescription,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [mood, setMood] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedActions, setSelectedActions] = useState([]);
  const [note, setNote] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState([]);

  //function to store all the variables to localstorage
  //All emotions are stored in the following format
  /*
  @params null
  @returns void
{
  emotions: [
    {
      time: Time,
      emotion: Option,
      action: Actions,
      note: Note,
      mood: Mood,
    },
  ]
}
*/

  // const [isSuccess, setIsSuccess] = useState(false); //setting up success state

  const handleSaveToLocal = () => {
    const localStorageItem = JSON.parse(localStorage.getItem("emotions")) || [];
    // console.log(localStorageItem);
    const emotions = {
      time: dayjs().format("ddd DD MMM hh:mm a"),
      mood: mood,
      emotion: selectedOption,
      // action: selectedActions[0],
      action: selectedActions,
      note: note,
    };
    localStorage.setItem(
      "emotions",
      JSON.stringify([...localStorageItem, emotions])
    );
    console.log(JSON.parse(localStorage.getItem("emotions")));
    onComplete();
  };

  //whenever the user clicks next it'll increment to the next step
  const handleToNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(selectedOption);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setStarted(false);
    }
  };

  // const handleToNext = () => {
  //   if (currentStep < steps.length - 1) {
  //     setCurrentStep(currentStep + 1);
  //   } else {
  //     setIsSuccess(true);
  //   }
  // };

  //when someone selects an option

  const handleWhenClicked = (option, enableMultiSelect, state, setState) => {
    if (!enableMultiSelect) {
      setState([option]);
      setSelectedEmotion([option]);
      return;
    }
    if (state.includes(option)) {
      setState(state.filter((item) => item !== option)); //if option exists in state then we will remove it from the array
      setSelectedEmotion(selectedEmotion.filter((item) => item !== option)); //this will remove it from the array
    } else {
      setState([...state, option]);
      setSelectedEmotion([...selectedEmotion, option]);
    }
  };

  const getAnimationData = (option) => {
    switch (option) {
      case "fine":
        return mood.includes(option) ? FineSelected : Fine;
      case "low":
        return mood.includes(option) ? LowSelected : Low;
      case "neutral":
        return mood.includes(option) ? NeutralSelected : Neutral;
      case "good":
        return mood.includes(option) ? GoodSelected : Good;
      case "down":
        return mood.includes(option) ? DownSelected : Down;
      default:
        return Neutral;
    }
  };

  // const handleWhenClickedAction = (e) => {
  //   setSelectedActions = e.target.value;
  // };

  //showing these option in front of the user
  //map is used to iterate over each option in the array
  //react needs a key element when rendering a list of components - here im using option

  const ShowOptions = ({
    options = [],
    enableMultiSelect = true,
    currentStep = 0,
  }) => {
    return currentStep === 1 ? (
      options[mood]?.map((option) => (
        <div
          key={option}
          className={`option ${
            selectedOption.includes(option) ? "selected" : ""
          }`}
          onClick={() =>
            handleWhenClicked(
              option,
              enableMultiSelect,
              selectedOption,
              setSelectedOption
            )
          }
          style={{
            // color: selectedOption.includes(option)
            //   ? moreColors[selectedOption]
            //   : "#ffffff",
            //forgot that if i needed it to select multiple options i need it to be an array
            backgroundColor: selectedOption.includes(option)
              ? moreColors[selectedOption[0]]
              : "",
            borderColor: selectedOption.includes(option)
              ? moreColors[selectedOption[0]]
              : "",
          }}
        >
          <Typography variant={"body2"}>{option}</Typography>
        </div>
      ))
    ) : currentStep === 0 ? (
      options?.map((option) => (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            onClick={() => handleWhenClicked(option, false, mood, setMood)}
            sx={{
              width: "48px",
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <LottiePlayer
              className="lottie-animate"
              style={{
                minWidth: "100%",
                minHeight: "100%",
                opacity: mood.includes(option) ? 1 : "0.4",
              }}
              animationData={getAnimationData(option)}
              loop
              autoplay
            />
          </Box>
          <Typography
            variant={"body2"}
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: mood.includes(option) ? colors[mood] : "#595959",
            }}
          >
            {option}
          </Typography>
        </Box>
      ))
    ) : currentStep === 4 ? (
      <DoneScreen
        mood={mood}
        selectedActions={selectedActions}
        selectedOption={selectedOption}
        note={note}
        currentStep={currentStep}
      />
    ) : (
      options?.map((option) => (
        <Box
          onClick={() =>
            handleWhenClicked(option, true, selectedActions, setSelectedActions)
          }
          sx={{
            padding: 2,
            borderRadius: "40px",
            border: "1px solid white",
            width: "140px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: selectedActions.includes(option) && "white",
            color: selectedActions.includes(option) ? "black" : "white",
          }}
        >
          <Typography
            variant={"body2"}
            sx={{ fontSize: "16px", fontWeight: "500" }}
          >
            {option}
          </Typography>
        </Box>
      ))
    );
  };

  // console.log(
  //   "Current Step",
  //   currentStep,
  //   "Mood",
  //   mood,
  //   "Emotion",
  //   selectedOption,
  //   "Action",
  //   selectedActions,
  //   "Note",
  //   note
  // );

  return (
    <div className="emotion-step">
      {/* <h3>{steps[currentStep].title}</h3>
      {currentStep === 0 && (
        <div className="emotion-icons">

          <ShowOptions
            options={steps[currentStep].options}
            enableMultiSelect={steps[currentStep]?.multiSelect}
          />
        </div>
      )}
      {currentStep > 0 && (
        <div className="emotion-options">

          <ShowOptions
            options={steps[currentStep].options}
            enableMultiSelect={steps[currentStep]?.multiSelect}
          />
        </div>
      )}
      <Button className="next-cta" variant="contained" onClick={handleToNext}>
        next
      </Button> */}
      {/* bookmark: Layout */}
      <Layout
        navi={
          <div className="back-button" onClick={handleBack}>
            <FontAwesomeIcon
              style={{ width: "20px", height: "20px" }}
              icon={faArrowLeft}
            />
          </div>
        }
        indicator={
          currentStep !== steps.length - 1 ? (
            `${currentStep + 1} / ${steps.length - 1}`
          ) : (
            <></>
          )
        }
        title={steps[currentStep].title}
        body={
          steps[currentStep].showText ? (
            <TextField
              multiline
              className="enter-text"
              label="write down your thoughts here"
              variant="standard"
              InputLabelProps={{ className: "text-field-lable" }}
              id="notes"
              onChange={(e) => setNote(e.target.value)}
            />
          ) : (
            <>
              {currentStep === 0 && (
                <div className="emotion-icons">
                  <ShowOptions
                    options={steps[currentStep].options}
                    enableMultiSelect={steps[currentStep]?.multiSelect}
                  />

                  {/* {selectedEmotion && (
                    <div className="emotion-description">
                      <h3>Description</h3>
                      <p>{emotionDescription[selectedEmotion]}</p>
                    </div>
                  )} */}
                </div>
              )}
              {currentStep > 0 && (
                <div className="emotion-options">
                  <ShowOptions
                    options={steps[currentStep].options}
                    enableMultiSelect={steps[currentStep]?.multiSelect}
                    currentStep={currentStep}
                  />
                  {/* this is displaying the array of descriptions based on what was selected */}
                  <div className="description-container">
                    {selectedEmotion.map((emotion) => (
                      <div className="emotion-description" key={emotion}>
                        <Typography
                          variant="h4"
                          className="desc-title"
                          sx={{
                            fontSize: "14px",
                            fontWeight: "600",
                            paddingBottom: "4px",
                          }}
                        >
                          {emotion}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="desc-paragraph"
                          sx={{
                            fontSize: "12px",
                            fontWeight: "400",
                            color: "#ffffff",
                            paddingBottom: "14px",
                          }}
                        >
                          {emotionDescription[emotion]}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* {isSuccess && (
                <div className="selected-options">
                  <Typography variant="h5">
                    here are your selected options
                  </Typography>
                  <ul>
                    {selectedOption.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                </div>
              )} */}
            </>
          )
        }
        footer={
          currentStep === steps.length - 1
            ? {
                txt: "save",
                onClick: handleSaveToLocal,
              }
            : {
                txt: "next",
                onClick: handleToNext,
              }

          //   isSuccess
          //     ? {
          //         txt: "save",
          //         onClick: handleSaveToLocal,
          //       }
          //     : {
          //         txt: "next",
          //         onClick: handleToNext,
          //       }
        }
      ></Layout>
    </div>
  );
}
