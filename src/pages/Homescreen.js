import React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Button";
import "../styles/Homescreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faChartColumn,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export function Homescreen({ onStart }) {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  const today = new Date();
  const f = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
    timeStyle: "short",
    // weekday: "short",
    // day: "numeric",
    // month: "short",
    // hour12: true,
    // hour: "numeric",
    // minute: "numeric",
  });

  const greet =
    hour < 12 ? "good morning" : hour < 18 ? "good afternoon" : "good evening";

  const prevEmotions = JSON.parse(localStorage.getItem("emotions"));

  return (
    <div className="homescreen-app">
      <h1 className="greeting-title">{greet}</h1>
      <p className="sub-text">
        stay on top of your emotions and log them through your day
      </p>

      <div className="cta-card">
        <div className="card-content">
          <h2 className="card-title">let's start by checking in</h2>

          <div className="cta-container">
            <Button className="how-cta" variant="contained" onClick={onStart}>
              how do you feel?
            </Button>
          </div>
        </div>
      </div>
      <div className="card-content-1">
        <div className="prev-emotions">
          <h2 className="prev-card-title">your emotions</h2>
        </div>
        {/* TODO: Add styling to show previous emotions */}

        {prevEmotions ? (
          prevEmotions?.reverse()?.map((e) => (
            <div className="prev-emotion">
              <p className="prev-emotion-emotion">
                I'm feeling{" "}
                <span className="emotion-names">{e.emotion.join(" and ")}</span>
              </p>
              {e?.action?.map((a) => (
                <p className="prev-emotion-action">{a}</p>
              ))}
              <p className="prev-emotion-time">{e.time}</p>
              <hr className="solid" />
              {/* <p className="prev-emotion-text">{e.mood}</p>
                <p className="prev-emotion-text">{e.note}</p> */}
            </div>
          ))
        ) : (
          <h2 className="card-title">previous emotions</h2>
        )}
      </div>

      <div className="navigation-bar">
        <nav className="navbar">
          <a href="#" className="nav-link nav-link-active">
            <FontAwesomeIcon
              style={{ width: "20px", height: "20px", paddingBottom: "2px" }}
              icon={faHouse}
            />
            <span className="nav-text">home</span>
          </a>

          <a href="#" className="nav-link">
            <FontAwesomeIcon
              style={{ width: "20px", height: "20px", paddingBottom: "2px" }}
              icon={faChartColumn}
            />
            <span className="nav-text">reports</span>
          </a>

          <a href="#" className="nav-link">
            <FontAwesomeIcon
              style={{ width: "20px", height: "20px", paddingBottom: "2px" }}
              icon={faCircleUser}
            />
            <span className="nav-text">profile</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
