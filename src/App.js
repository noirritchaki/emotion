import logo from "./logo.svg";
import "./App.css";
import { Homescreen } from "./pages/Homescreen";
import { EmotionSteps } from "./pages/EmotionSteps";
import React, { useState } from "react";

function App() {
  // const [selectedEmotion, setSelectedEmotion] = useState("");
  // const handleStepChange = (emotion) => {
  //   setSelectedEmotion(emotion);
  // };

  const feelingEmotions = {
    down: [
      "sadness",
      "depressed",
      "despair",
      "angry",
      "resigned",
      "grief",
      "miserable",
      "unwanted",
      "frustration",
      "guilt",
      "hopeless",
      "sorrow",
    ],
    low: [
      "dismal",
      "unhappy",
      "defeated",
      "agitated",
      "stressed",
      "lethargic",
      "withdrawn",
      "tense",
      "anxious",
      "isloated",
    ],
    neutral: [
      "bored",
      "calm",
      "meh",
      "tempered",
      "undisturbed",
      "observant",
      "detached",
      "alert",
      "focused",
    ],
    fine: [
      "optimistic",
      "grateful",
      "satisfied",
      "amused",
      "pleased",
      "comfortable",
      "content",
      "serene",
      "chill",
      "mellow",
      "eager",
      "included",
    ],
    good: [
      "ecstatic",
      "thrilled",
      "tranquil",
      "accepted",
      "satisfied",
      "valued",
      "inspired",
      "empowered",
      "joyful",
      "happy",
      "loved",
      "vibrant",
    ],
  };

  // const moreEmotions = {
  //   down: feelingEmotions.down,
  //   low: feelingEmotions.low,
  //   neurtal: feelingEmotions.neurtal,
  //   fine: feelingEmotions.fine,
  //   good: feelingEmotions.good,
  // };

  const steps = [
    {
      title: "how do you feel?",
      options: ["down", "low", "neutral", "fine", "good"],
      multiSelect: false,
    },
    {
      title: "how would you describe this feeling?",
      // options: "",
      // options: moreEmotions.down, moreEmotions.low, moreEmotions.neutral, moreEmotions.fine, moreEmotions.good,
      options: {
        down: [
          "sadness",
          "depressed",
          "despair",
          "angry",
          "resigned",
          "grief",
          "miserable",
          "unwanted",
          "frustration",
          "guilt",
          "hopeless",
          "sorrow",
        ],
        low: [
          "dismal",
          "unhappy",
          "defeated",
          "agitated",
          "stressed",
          "lethargic",
          "withdrawn",
          "tense",
          "anxious",
          "isloated",
        ],
        neutral: [
          "bored",
          "calm",
          "meh",
          "tempered",
          "undisturbed",
          "observant",
          "detached",
          "alert",
          "focused",
        ],
        fine: [
          "optimistic",
          "grateful",
          "satisfied",
          "amused",
          "pleased",
          "comfortable",
          "content",
          "serene",
          "chill",
          "mellow",
          "eager",
          "included",
        ],
        good: [
          "ecstatic",
          "thrilled",
          "tranquil",
          "accepted",
          "satisfied",
          "valued",
          "inspired",
          "empowered",
          "joyful",
          "happy",
          "loved",
          "vibrant",
        ],
      },
    },
    { title: "whats the reason behind these emotions?", showText: true },
    {
      title: "what were you doing when you felt these emotions?",
      options: [
        "work",
        "playing",
        "travel",
        "fitness",
        "self-care",
        "movies",
        "learning",
        "music",
        "shopping",
        "gaming",
        "relaxing",
      ],
    },
    {},
  ];

  /* 
    For making dynamic options
    options: {
      down: [a,b,c,d,e],
      low: [a,b,c,d,e],
      neutral: [a,b,c,d,e],
      fine: [a,b,c,d,e],
    }
  */

  const [started, setStarted] = useState(false);
  const [summaryOptions, setSummaryOptions] = useState([]);

  const handleStart = () => {
    setStarted(true);
  };

  const handleComplete = (options) => {
    setSummaryOptions(options);
    setStarted(false);
  };

  return (
    <div className="emotion-app">
      {!started && <Homescreen onStart={handleStart} />}
      {started && (
        <EmotionSteps
          setStarted={setStarted}
          steps={steps}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}

export default App;
