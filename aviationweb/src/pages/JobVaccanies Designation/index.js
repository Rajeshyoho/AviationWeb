import { Box, Grid, Typography, Button } from "@mui/material";
import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
// import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Footer from "../../components/Footer";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { GoDotFill } from "react-icons/go";
import "../../components/DesignationPosition.css";
import { WiDirectionRight } from "react-icons/wi";

const DesignationPosition = () => {
  const logo = require("../../Images/logo3.png");

  return (
    <div style={{ overflow: "hidden" }}>
      <Grid>
        <Header />
        <NavBar />
      </Grid>

      <Row
        style={{
          position: "relative",
          backgroundImage:
            'url("https://scontent.fmaa2-3.fna.fbcdn.net/v/t1.6435-9/130299541_135298905052544_8308866746948375884_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=300f58&_nc_ohc=IVTMye_l6FcAX_1xLa7&_nc_ht=scontent.fmaa2-3.fna&oh=00_AfDyyJkCwdWFTyd3Pdmd7wk-TSrL2GpPnxEtFRHiq1qgHA&oe=659BD9C5")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh", // Set the height to 100% of the viewport height
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // width: "100%",
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
              Designation / Position
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
                Job Vaccanies
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                style={{ color: "rgba(161,225,229,1)" }}
              >
                Designation Position
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h2>
          Aviation supporting the new success Sustainable Development Goals
        </h2>
      </div>

      <div>
        <Container fluid style={{ marginTop: "30px" }}>
          <Typography
            className="p"
            style={{
              marginTop: "20px",
              textAlign: "center",
              textAlign: "justify",
            }}
          >
            When asked to make a list of airline jobs, most people instantly
            think of pilots. But the flight crew, while their jobs are
            definitely important, are only a small part of what keeps an
            airplane flying and flight schedules on track. Airlines rely on many
            individuals to perform their job in order to keep them in business.
            They include baggage handlers, ticket agents, and avionics
            technicians. Many airline jobs are well paying and offer prestige as
            well as excitement and fantastic benefits.
          </Typography>
        </Container>
      </div>

      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        columns={{ xs: 12, sm: 8, md: 12 }}
        style={{ marginTop: "15px" }}
      >
        {/* <Container fluid style={{ marginTop: "30px" }}> */}
        {/* <Row style={{marginTop:"30px",padding:10}}> */}
        <Grid item xs={12} sm={4} md={4}>
          <div style={{}}>
            <Typography
              style={{
                backgroundColor: "#8805e6",
                color: "#ffffff",
                marginTop: "20px ",
                marginBottom: "20px",
                paddingTop: "10px",
                opacity: 0.8,
              }}
            >
              <Typography style={{ textAlign: "center", marginTop: "10px" }}>
                Economic growth
              </Typography>
              <Typography
                style={{
                  marginTop: "20px",
                  padding: "0px 35px",
                  textAlign: "start",
                  textAlign: "justify",
                }}
              >
                Air travel is the world's rapid transport network, essential for
                trade, business, tourism and economic growth. Every day, 128,000
                flights take off, carrying 12.5 million passengers and $18
                billion of world trade. On Airline Job Finder we break down many
                different kinds of airline careers. Each of the following types
                of airline jobs is discussed in great detail.
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                <Button
                  style={{
                    borderRadius: 30,
                    backgroundColor: "#ffffff",
                    color: "#8805e6",
                    marginBottom: "30px",
                  }}
                >
                  Learn More <WiDirectionRight />
                </Button>
              </div>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <div style={{}}>
            <Typography
              style={{
                backgroundColor: "#ee7a01",
                color: "#ffffff",
                marginTop: "20px ",
                marginBottom: "20px",
                paddingTop: "10px",
                opacity: 0.8,
              }}
            >
              <Typography style={{ textAlign: "center", marginTop: "10px" }}>
                Social Development growth
              </Typography>
              <Typography
                style={{
                  marginTop: "20px",
                  padding: "0px 35px",
                  textAlign: "start",
                  textAlign: "justify",
                }}
              >
                The airline district sales manager oversees all of a district’s
                reservations and ticket sales offices, and the sales
                representatives in that district. Sales representatives promote
                their airline in an effort to sell cargo space and plane
                tickets. Calibration of the equipment may also be required.
                general questions regarding directions, terminal services, or
                arranging wheelchair access.
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                <Button
                  style={{
                    borderRadius: 30,
                    backgroundColor: "#ffffff",
                    color: "#ee7a01",
                    marginBottom: "30px",
                  }}
                >
                  Learn More <WiDirectionRight />
                </Button>
              </div>
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <div style={{}}>
            <Typography
              style={{
                backgroundColor: "#88a72c",
                color: "#ffffff",
                marginTop: "20px ",
                marginBottom: "20px",
                paddingTop: "10px",
                opacity: 0.8,
              }}
            >
              <Typography style={{ textAlign: "center", marginTop: "10px" }}>
                Enviromental Efficiency growth
              </Typography>
              <Typography
                style={{
                  marginTop: "20px",
                  padding: "0px 35px",
                  textAlign: "start",
                  textAlign: "justify",
                }}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident."
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                <Button
                  style={{
                    borderRadius: 30,
                    backgroundColor: "#ffffff",
                    color: "#88a72c",
                    marginBottom: "30px",
                  }}
                >
                  Learn More <WiDirectionRight />
                </Button>
              </div>
            </Typography>
          </div>
        </Grid>
        {/* </Row> */}
        {/* </Container> */}
      </Grid>

      <div>
        <Container fluid style={{ marginTop: "30px" }}>
          <Row>
            <Col>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Some common benefits Position:
              </Typography>

              <Typography style={{ marginTop: 5 }}>
                <ul>
                  <li>
                    <GoDotFill /> Aircraft Maintenance
                  </li>
                  <li>
                    <GoDotFill /> Aircraft Mechanic
                  </li>
                  <li>
                    <GoDotFill /> Airline Customer Service
                  </li>
                  <li>
                    <GoDotFill /> Airline Food Services{" "}
                  </li>
                  <li>
                    <GoDotFill /> Federal Aviation Administration
                  </li>
                  <li>
                    <GoDotFill /> Passenger Service Agent
                  </li>
                  <li>
                    <GoDotFill /> Ground Operations
                  </li>
                  <li>
                    <GoDotFill /> Quality Control Officer
                  </li>
                  <li>
                    <GoDotFill /> Flight Test Engineer
                  </li>
                  <li>
                    <GoDotFill /> Aircraft General Knowledge
                  </li>
                  <li>
                    <GoDotFill /> Airline Reservations
                  </li>
                  <li>
                    <GoDotFill /> Cargo Carriers
                  </li>
                  <li>
                    <GoDotFill /> Aviation Law Management
                  </li>
                </ul>
              </Typography>
            </Col>

            <Col>
              <Typography style={{ fontSize: "18px", textAlign: "justify" }}>
                According to U.S. Department of Labor Bureau of Labor
                Statistics, Flight crewmembers make up 33 percent of air
                transportation employment, and include pilots and flight
                attendants. Airplane Wing Photo As the airline industry
                continues to recover from the affects of 9/11, more airline jobs
                are becoming available and demand for qualified applicants is
                increasing.
              </Typography>
              <Typography
                style={{
                  fontSize: "18px",
                  textAlign: "justify",
                  marginTop: "10px",
                }}
              >
                For each type of job profiled in our Members section there’s a
                description, pay details, and educational requirements. You
                won’t want to miss our interviews with industry veterans either.
                Their insights are invaluable. Some aviation attorneys work for
                the FAA, while others may be on staff or on retainer
                our Members section there’s a description by large
                corporations who own aircraft or deal with airlines.
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  paddingTop: "20px",

                }}
              >
                <Button
                  style={{
                    borderRadius: 30,
                    backgroundColor: "#7cdfd7",
                    color: "#88a72c",
                    marginBottom: "30px",
                  }}
                >
                  Learn More about Airline and Aviation Industry Job <WiDirectionRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ marginTop: "50px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default DesignationPosition;
