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
import { GoDotFill } from "react-icons/go";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../components/Experience.css";
import SkillBar from "../../components/SkillBar";

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
        <Container fluid style={{ marginTop: "30px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} md={6}>
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
              <Container>

                <Row>
                    <Col>
                    <Typography style={{ marginTop: 10, textAlign: "justify" }}>
                <ul>
                  <li> 1. Pleasant & friendly personality</li>
                  <li> 2. Agility & good sense of balance</li>
                  <li> 3. Good health & physical fitness</li>
                  <li> 4. Clear speech and voice </li>
                  <li> 5. Presence of mind </li>
                  <li> 6. Team worker </li>
                </ul>
              </Typography>
                    </Col>
                    <Col>
                    <div>
      {/* <SkillBar  percentage={80} />
      <SkillBar  percentage={90} />
      <SkillBar  percentage={70} />
      <SkillBar  percentage={60} />
      <SkillBar  percentage={50} /> */}

      {/* Add more skill bars as needed */}
    </div>
                    </Col>
                </Row>
              </Container>
             
            </Grid>
          </Grid>
        </Container>
      </div>

      <div>
        <Container style={{ marginTop: "30px" }}>
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

            <Box style={{ marginTop: "20px" }}>
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Airline and Commercial Pilot
              </Typography>
              <Typography style={{ marginTop: 5, marginRight: 10 }}>
                Becoming a pilot is one of the most popular choices to establish
                a career in Aviation after the 12th standard. Apart from flying
                a plane, ensuring the safety of the passengers and attendants
                will be your responsibility.
              </Typography>
            </Box>

            <Box style={{ marginTop: "20px" }}>
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Air Traffic Controller
              </Typography>
              <Typography
                style={{ marginTop: 5, marginRight: 10, textAlign: "justify" }}
              >
                The work of an air traffic controller is to regulate the whole
                air navigation system. They are accountable for the safety of
                all the air transports and the people who are flying it in the
                air.
              </Typography>
            </Box>

            <Box style={{ marginTop: "20px" }}>
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Flight Attendant
              </Typography>
              <Typography
                style={{ marginTop: 5, marginRight: 10, textAlign: "justify" }}
              >
                Flight attendants make sure that the passengers adhere to rules
                & regulations so that the journey remains safe and comfortable
                during the flight. If you want to start a career in this field,
                you will have to pass a test to get a license before getting the
                position of a flight attendant.
              </Typography>
            </Box>

            <Box style={{ marginTop: "20px" }}>
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Aviation Management
              </Typography>
              <Typography
                style={{ marginTop: 5, marginRight: 10, textAlign: "justify" }}
              >
                This is a field where you can work in various roles and handle
                tasks like airport operations, recruitment, managing accounts,
                public relations, economics, etc. Apart from this, you will also
                have to ensure the implementation of various laws, rules, and
                regulations pertaining to the sector.
              </Typography>
            </Box>
          </Row>
        </Container>
      </div>

      <div>
        <Container style={{ marginTop: "40px" }}>
          <Row>
            <Col>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Skills Required for a Career in Aviation
              </Typography>

              <Typography style={{ marginTop: 5 }}>
                <ul>
                  <li>
                    <GoDotFill /> Pleasant & friendly personality
                  </li>
                  <li>
                    <GoDotFill /> Agility & good sense of balance
                  </li>
                  <li>
                    <GoDotFill /> Good health & physical fitness
                  </li>
                  <li>
                    <GoDotFill /> Clear speech and voice{" "}
                  </li>
                  <li>
                    <GoDotFill /> Presence of mind
                  </li>
                  <li>
                    <GoDotFill /> Team worker
                  </li>
                  <li>
                    <GoDotFill /> Patience
                  </li>
                  <li>
                    <GoDotFill /> Quality Control Officer
                  </li>
                  <li>
                    <GoDotFill /> Total Quality Management
                  </li>
                  <li>
                    <GoDotFill /> Aircraft General Knowledge
                  </li>
                  <li>
                    <GoDotFill /> Human Performance and Limitations
                  </li>
                  <li>
                    <GoDotFill /> Strategic Management
                  </li>
                  <li>
                    <GoDotFill /> Aviation Law Management
                  </li>
                </ul>
              </Typography>
            </Col>

            <Col>
              <img src="https://assets-jb.fmg-services.co.uk/AJS/uploads/hub/advices/501_1000/GettyImages-925423998-1.jpg" />
            </Col>
          </Row>
        </Container>
      </div>

      

      {/* <div class="canvas-wrap">
  <canvas id="canvas"></canvas>
</div> */}


      {/* <div style="height: 100%; width: 100%;">
		<h1>Progress Bar (Light)</h1>
		<hr />
		<h2>Large Progress Bar with Text</h2>
		<div class="progress progress-striped active">
			<div class="progress-bar"  role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%">
				<span class="sr-only">75% Complete</span>
			</div>
		</div>
        </div> */}


      <div style={{ marginTop: "50px" }}>
        <Footer />
      </div>
    </>
  );
};

export default ExperienceFeatures;
