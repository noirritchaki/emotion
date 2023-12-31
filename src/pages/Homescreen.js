import React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Button";
import "../styles/Homescreen.css";
import { Route, Router, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faChartColumn,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Switch } from "@mui/material";

export function Homescreen({ onStart }) {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  const navigate = useNavigate();

  const path = window.location.pathname;

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

  {
    console.log(prevEmotions);
  }

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

      {/* TODO: Add styling to show previous emotions */}

      <div className="card-content-2">
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
            </div>
          ))
        ) : (
          <h2 className="card-title">previous emotions</h2>
        )}
        : (<h2 className="card-title">previous emotions</h2>)
      </div>

      <div className="navigation-bar">
        <nav className="navbar">
          <div className={`nav-home ${path === "/" && "active"}`}>
            <div className={`home-navi ${path === "/" && "active"}`}>
              <FontAwesomeIcon
                style={{ width: "20px", height: "20px", paddingBottom: "2px" }}
                icon={faHouse}
                onClick={() => navigate("/")}
              />
              <span className="nav-text">home</span>
            </div>
            {console.log(path)}
            <div className="report-navi">
              <FontAwesomeIcon
                style={{ width: "20px", height: "20px", paddingBottom: "2px" }}
                icon={faChartColumn}
                onClick={() => navigate("/reports")}
              />
              <span className="nav-text">reports</span>
            </div>
            <div className="profile-navi">
              <FontAwesomeIcon
                style={{ width: "20px", height: "20px", paddingBottom: "2px" }}
                icon={faCircleUser}
                onClick={() => navigate("/profile")}
              />
              <span className="nav-text">profile</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
