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
            'url("https://images.unsplash.com/photo-1627501691850-db08eb81199a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
        <Typography
          variant="h2"
          style={{
            fontSize: "30px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Aviation supporting the new success Sustainable Development Goals
        </Typography>
      </div>

      <div>
        <Container fluid style={{ marginTop: "30px" }}>
          <Row>
            <Col>
              <img
                src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/09/23164814/Aeronautical-Engineering.jpg"
                style={{ height: "450px", width: "100%" }}
              />
            </Col>

            <Col>
              <Typography
                variant="h5"
                style={{
                  fontSize: "25px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "rgb(161 225 229)",
                }}
              >
                Airline Employment opportunities
              </Typography>
              <Container>
                <p style={{ textAlign: "justify", marginTop: "20px" }}>
                  Aviation maintenance to air traffic control, there is no limit
                  to the bounds that humans are willing to go to keep the skies
                  safe. However, there are a few different types of aviation,
                  with three being the main pillars that uphold the aviation
                  industry as a whole: commercial, general, and military
                  aviation.
                </p>
                <Typography
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Aviation industry offers a wide range of career options and
                  Designation :
                </Typography>
                <Row
                  style={{
                    marginTop: "20px",
                    textAlign: "center",
                    textAlign: "start",
                  }}
                >
                  <Col>
                    <Typography>
                      <ul>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Aircraft
                          design
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Piloting
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Air traffic
                          control
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Airport
                          management
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Jet
                          mechanics
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Space
                          exploration
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Flight
                          attendant
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Ground crew
                        </li>
                      </ul>
                    </Typography>
                  </Col>
                  <Col>
                    <Typography>
                      <ul>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Aircraft
                          design
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Piloting
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Air traffic
                          control
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Flight
                          service manager{" "}
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Aerospace
                          engineering
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Business
                          administration
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> cabin
                          service director
                        </li>
                        <li>
                          {" "}
                          <GoDotFill style={{ color: "#f8560c" }} /> Aviation
                          Safety
                        </li>
                      </ul>
                    </Typography>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div>
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
      </div> */}

      <Grid
        container
        spacing={{ xs: 1, sm: 3 }}
        columns={{ xs: 12, sm: 8, md: 12 }}
        style={{ marginTop: "15px" }}
      >
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
              High Demand For Skilled Professionals
              </Typography>
              <p
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
              </p>

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
              <p
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
              </p>

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
              <p
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
              </p>

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

      <div style={{ backgroundColor: "#e6e7e8" }}>
        <Container fluid style={{ marginTop: "30px" }}>
          <Row style={{ padding: "20px" }}>
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
                  <li>
                    <GoDotFill /> Aviation Safety Management
                  </li>
                </ul>
              </Typography>
            </Col>

            <Col md={8}>
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
                the FAA, while others may be on staff or on retainer our Members
                section there’s a description by large corporations who own
                aircraft or deal with airlines. Graduates and professionals can
                get employment in prime areas like airports, airlines, Flight
                schools, Airline insurance companies, Sales & advertising
                companies, educational institutes, etc. Areas of recruitment in
                Aviation are Air Traffic Control. Aviation Safety.
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
                  Learn More about Airline and Aviation Industry Job{" "}
                  <WiDirectionRight />
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
