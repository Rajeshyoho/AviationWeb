import {
  Divider,
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Box,
  CardActionArea,
} from "@mui/material";
import React from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

const ExperienceFeatures = () => {
  const logo = require("../../Images/logo3.png");

  return (
    <>
      <Grid>
        <Header />
        <NavBar />
      </Grid>

      <Row
        style={{
          position: "relative",
          backgroundImage:
            'url("https://kaimah.co.nz/imgs/pilot-training-gallery/ivan-shimko-tCp2K2sYpFg-unsplash.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh", // Set the height to 100% of the viewport height
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1,
          }}
        ></div>
        <Col
          md={6}
          xs={12}
          style={{
            position: "relative",
            zIndex: 2,
            // textAlign: "center",
          }}
        >
          <div>
            <h3
              style={{
                color: "white",
                fontSize: "36px",
                fontWeight: "bold",
              }}
            >
              Experience / Features
            </h3>
          </div>
        </Col>

        <Col
          className="banner"
          md={6}
          xs={12}
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <div role="presentation">
            <Breadcrumbs
              aria-label="breadcrumb"
              style={{
                zIndex: 900,
                display: "flex",
                alignItems: "center",
                margin: "10px",
                fontSize: "20px",
                color: "#ffffff",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link
                underline="hover"
                color="inherit"
                href="Home"
                style={{ display: "flex", alignItems: "center" }}
              >
                <HomeIcon
                  fontSize="medium"
                  style={{ marginRight: "5px", marginBottom: "2px" }}
                />
                Home
              </Link>
              <Link underline="none" color="inherit" href="/">
                Job Vaccancies
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                style={{ color: "rgba(161,225,229,1)" }}
              >
                Experience Features
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <div>
        <Container fluid style={{ marginTop: 30 }}>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
              <div style={{ position: "relative", width: "100%" }}>
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  muted
                  loop
                  poster=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="img-fluid" 
                >
                  <source
                    src="https://www.iata.org/globalassets/iata/training/subject-area/Hero_sa-law-regulation/"
                    type="video/mp4"
                  />
                </video>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    width: "100%",
                    textAlign: "center",
                    width: "80%", // Adjust the width for larger screens
                    maxWidth: "600px",
                  }}
                >
                  <h1>Your Overlay Text</h1>
                  <p>Additional information or description here.</p>
                </div>
              </div>
              </Grid>

              <Grid item xs={6}>
              <Typography
                style={{
                  fontWeight: "bold",
                  textAlign: "justify",
                }}
              >
                Skills Required for a Career in Aviation
              </Typography>
             
              <Typography style={{ marginTop: 10, textAlign: "justify" }}>
                Soaring in the vast blue skies, the business of aviation is full
                of adventure and curiosity. Whether you want to be an air
                traffic controller, a sky navigator or an airport operations
                supervisor, aviation offers you a fun journey like no other. But
                what skills do you need to go to this wonderful place? Buckle up
                and prepare for an exciting journey as you demonstrate the
                essential skills needed for a career in aviation.
              </Typography>
              <Typography style={{ marginTop: 10, textAlign: "justify" }}>
                <ul>
                  <li> 1. Pleasant & friendly personality</li>
                  <li> 2. Agility & good sense of balance</li>
                  <li> 3. Good health & physical fitness</li>
                  <li> 4. Clear speech and voice </li>
                  <li> 5. Presence of mind </li>
                  <li> 6. Team worker </li>
                  {/* <li> 7. Presence of mind </li>
                  <li> 8. Punctuality </li> */}
                  {/* <li> 9. Patience </li>
                  <li>10. Politeness</li> */}
                </ul>
              </Typography>
              </Grid>

              </Grid>
              
        </Container>
      </div>

      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Typography
              style={{
                textAlign: "justify",
                fontWeight: "bold",
                fontSize: "30px",
                textAlign: "center",
              }}
            >
              List of Careers in Aviation
            </Typography>

            <Typography style={{ textAlign: "justify", marginTop: 10 }}>
              The field of aviation offers a vast array of exciting and diverse
              career opportunities for individuals passionate about aviation,
              travel, and technology. Exploring these paths allows aspiring
              professionals to contribute to the ever-evolving world of
              aviation. Below mentioned are the list of careers in aviation
              which plays a crucial role in shaping its future:
            </Typography>

            <Box style={{ display: "flex", marginTop: 10 }}>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                1. Pilot:
              </Typography>
              <Typography style={{ marginTop: 5, marginRight: 10 }}>
                Take command of the skies as a pilot, operating and navigating
                aircraft with precision and skill.
              </Typography>
            </Box>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ExperienceFeatures;
