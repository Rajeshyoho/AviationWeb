import {
  Box,
  Card,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WeatherWidget from "./Weather";
import { Image } from "react-bootstrap";
import useMediaQuery from "@mui/material/useMediaQuery";

const theme = createTheme();

// Small Screen Header Component
const SmallScreenHeader = () => {
  const smallScreenLogo = require("../Images/logo3.png"); // Add path to the small screen image

  return (
    <Grid
      className="smallScreenHeader"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "red", // Adjust the background color as needed
      }}
    >
      <Link to="/#Home">
        <Image
          className="img-fluid"
          style={{ width: "100%", maxHeight: "30vh" }}
          src={smallScreenLogo}
          alt="Small Screen Logo"
        />
      </Link>
    </Grid>
  );
};

const Header = () => {
  const logo = require("../Images/logo3.png");
  const [parentWidth, setParentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setParentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isSmallDevice ? (
        <SmallScreenHeader />
      ) : (
        <Grid
          className="linearHeader"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/#Home">
            <Image
              className="img-fluid"
              style={{ width: "100%", maxHeight: "20vh" }}
              src={logo}
              alt="Logo"
            />
          </Link>
          {!isSmallDevice && <WeatherWidget />}
        </Grid>
      )}
    </>
  );
};

export default Header;
