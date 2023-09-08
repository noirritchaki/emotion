import React from "react";
import Button from "@mui/material/Button";
import "../styles/Reports.css";
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

  return (
    <div className="report-page">
      <div className="title-container">
        <h1 className="header-text">your weekly reports</h1>
        {/* <Typography
          variant={"body2"}
          className="sub-text"
          sx={{
            fontSize: "14px",
            lineHeight: "150%",
            fontWeight: "400",
            textAlign: "left",
            padding: "8px 20px 0px 20px",
            minWidth: "90%",
          }}
        >
          here you can view all your logged in emotions filtered weekly
        </Typography> */}

        <p className="report-sub">
          here you can view all your logged in emotions filtered weekly
        </p>
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
