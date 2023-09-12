import React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "../styles/Reports.css";
import dayjs from "dayjs";
import { Box, TextField, Typography } from "@mui/material";
import { Route, Router, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faChartColumn,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export function Reports() {
  const navigate = useNavigate();

  const path = window.location.pathname;

  const prevEmotions = JSON.parse(localStorage.getItem("emotions"));

  return (
    <div className="report-page">
      <div className="title-container">
        <h1 className="header-text">your weekly reports</h1>

        <p className="report-sub">
          here you can view all your logged in emotions filtered weekly
        </p>
      </div>

      <div className="card-content-1">
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
          <div className={`nav-home ${path === "/reports" && "active"}`}>
            <div className="home-navi">
              <FontAwesomeIcon
                style={{ width: "20px", height: "20px", paddingBottom: "2px" }}
                icon={faHouse}
                onClick={() => navigate("/")}
              />
              <span className="nav-text">home</span>
            </div>
            {console.log(path)}
            <div className={`report-navi ${path === "/reports" && "active"}`}>
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
