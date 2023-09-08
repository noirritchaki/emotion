import logo from "./logo.svg";
import "./App.css";
import { Homescreen } from "./pages/Homescreen";
import { EmotionSteps } from "./pages/EmotionSteps";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Reports } from "./pages/Reports";
// import { Profile } from "./pages/Profile";

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

  const emotionDescription = {
    sadness: "feeling unhappy or sorrowful due to a specific reason.",
    depressed:
      "experiencing long-lasting and pervasive feelings of extreme sadness, often accompanied by a sense of hopelessness.",
    despair:
      "Being overwhelmed by a deep sense of hopelessness and loss of faith in the future.",
    angry:
      "Feeling strong displeasure or irritation, often in response to a perceived injustice or wrongdoing.",
    resigned:
      "Accepting a situation with a sense of defeat or inevitability, without resistance.",
    grief:
      "Deep sorrow and emotional suffering, typically in response to a significant loss, such as death.",
    miserable:
      "Feeling extremely unhappy or wretched, often due to ongoing difficult circumstances.",
    unwanted:
      "Experiencing the sense of not being desired or valued by others.",
    frustration:
      "Feeling annoyed or upset when one's goals or desires are hindered or unattainable.",
    guilt:
      "Experiencing remorse or self-blame for a perceived wrongdoing or moral transgression.",
    hopeless:
      "Feeling devoid of hope, with a belief that positive change is impossible.",
    sorrow:
      "A deep feeling of sadness or unhappiness, often in response to a specific event or loss.",

    dismal:
      "Feeling gloomy and bleak, often due to a lack of hope or optimism.",
    unhappy:
      "Experiencing a general sense of discontent or dissatisfaction with one's current state.",
    defeated:
      "Feeling beaten or overpowered, typically after a significant struggle or failure.",
    agitated:
      "Being in a state of nervousness or restlessness, often accompanied by heightened emotional arousal.",
    stressed:
      "Experiencing mental or emotional strain and tension due to external pressures or demands.",
    lethargic:
      "Feeling physically and mentally sluggish or lacking energy and enthusiasm.",
    withdrawn:
      "Choosing to isolate oneself or avoid social interaction and external stimuli.",
    tense:
      "Having muscles and nerves tightly contracted, often due to anxiety or stress.",
    anxious:
      "Feeling uneasy or worried, often accompanied by a sense of impending danger or uncertainty.",
    isolated:
      "Being physically or emotionally separated from others, often leading to feelings of loneliness and detachment.",

    bored:
      "Feeling uninterested or lacking excitement, often due to monotony or disinterest in one's current activities.",
    calm: "Experiencing a tranquil and peaceful state of mind, typically free from agitation or stress.",
    meh: "Expressing a lack of enthusiasm or indifference towards something.",
    tempered:
      "Being in a balanced and controlled emotional state, often after managing intense feelings.",
    undisturbed:
      "Remaining unaffected or untroubled by external events or distractions.",
    observant:
      "Paying close attention and keenly perceiving details in one's surroundings.",
    detached:
      "Feeling emotionally disengaged or disconnected from a situation or outcome.",
    alert: "Being fully awake, attentive, and aware of one's surroundings.",
    focused:
      "Concentrating one's attention and effort on a specific task or goal.",

    optimistic:
      "Having a positive outlook on future events and expecting good outcomes.",
    grateful: "Feeling thankful and appreciative for something or someone.",
    satisfied:
      "Experiencing contentment and fulfillment with one's current situation or achievements.",
    amused:
      "Finding something funny or entertaining, often resulting in a lighthearted feeling.",
    pleased:
      "Feeling a sense of delight or satisfaction with a particular situation or outcome.",
    comfortable:
      "Being at ease and relaxed, typically in a physical or social context.",
    content:
      "Feeling a sense of overall satisfaction and well-being with life.",
    serene: "Experiencing a deep and tranquil sense of peace and calm.",
    chill:
      "Remaining relaxed and unconcerned, often in response to stress or pressure.",
    mellow:
      "Having a laid-back and easygoing attitude, often accompanied by a sense of calm.",
    eager:
      "Feeling enthusiastic and excited about a future event or opportunity.",
    included: "Feeling welcomed, accepted, and part of a group or community.",

    ecstatic:
      "Overwhelmed with extreme joy and excitement, often to the point of euphoria.",
    thrilled:
      "Feeling intensely excited and delighted about a specific event or outcome.",
    tranquil:
      "Experiencing a state of calm and peacefulness, typically free from disturbance.",
    accepted:
      "Feeling welcomed and embraced by others, often accompanied by a sense of belonging.",
    satisfied:
      "Experiencing contentment and fulfillment with one's current situation or achievements.",
    valued:
      "Feeling appreciated and esteemed by others, often resulting in a sense of self-worth.",
    inspired:
      "Feeling motivated and creatively stimulated, often by something or someone.",
    empowered:
      "Having a sense of control, confidence, and capability to achieve one's goals.",
    joyful: "Experiencing a deep and genuine sense of happiness and delight.",
    happy:
      "Feeling content and pleased with one's overall state of well-being.",
    loved:
      "Experiencing affection, care, and strong emotional attachment from others.",
    vibrant:
      "Feeling full of life and energy, often accompanied by enthusiasm and positivity.",
  };

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
          emotionDescription={emotionDescription}
        />
      )}
    </div>
  );
}

export default App;
