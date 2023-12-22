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
import { TiTickOutline } from "react-icons/ti";

const RolesResponsibilites = () => {
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
            'url("https://calaero.edu/wp-content/uploads/2022/12/PSA-Aircraft_1-cropped.jpg")',
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
              Roles & Responsibilites
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
                Roles Responsibilites
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: "30px" }}>
        <Container fluid>
          <Typography
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            AVIATION ROLES & RESPONSIBILITIES
          </Typography>
        </Container>
      </div>

      <div
        style={{ marginTop: "30px", textAlign: "justify", padding: "0px 20px" }}
      >
        <Container fluid>
          <Typography>
            Responsibility for aviation operations is shared between a range of
            parties including Airservices, other federal government agencies,
            aircraft operators (airlines) and airport operators. you’ll also
            need a degree with an emphasis for that field such as business or
            architecture At many busy airports, highest paid employees.!
          </Typography>
        </Container>
      </div>

      <div
        style={{
          backgroundColor: "#cfc6f1",
          marginTop: "30px",
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200,
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Container fluid>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Aviation Law and Regulations Training Schedule
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Discover How Your Career Can Take Flight
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              padding: "0 70px", // Default padding for larger devices
              marginTop: "10px",
              "@media (min-width: 768px)": {
                padding: "0 70px", // Adjusted padding for smaller devices
              },
            }}
          >
            International air transportation is governed by a complex and
            fragmented system of global regulatory agencies. Act now, as spaces
            fill up quickly!
          </Typography>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col xs={6} md={6}>
              <div style={{ marginTop: "30px" }}>
                <img
                  src="https://aviationbenefits.org/media/166621/safety-culture.png"
                  style={{}}
                />
              </div>
            </Col>

            <Col xs={6} md={6}>
              <div style={{ marginTop: "40px" }}>
                <Container fluid>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "30px",
                      color: "#5ce2d7",
                    }}
                  >
                    WHAT ARE THE DIFFERENT ROLES AND RESPONSIBILITIES
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ marginTop: "15px", textAlign: "start" }}>
                      <ul>
                        <li>
                          {" "}
                          <TiTickOutline /> Capability to patrol an area, notes
                          of what you see it.{" "}
                        </li>
                        <li>
                          {" "}
                          <TiTickOutline /> Ability to move as part of a team{" "}
                        </li>
                        <li>
                          {" "}
                          <TiTickOutline /> Physical fitness
                        </li>
                        <li>
                          {" "}
                          <TiTickOutline /> Common sense, courage, and integrity
                        </li>
                        <li>
                          {" "}
                          <TiTickOutline /> Ability to react competently
                          peacefully to situations
                        </li>
                        <li>
                          {" "}
                          <TiTickOutline /> Self-confidence and self-reliance
                        </li>
                        <li>
                          {" "}
                          <TiTickOutline /> General public against actions{" "}
                        </li>
                        <li>
                          {" "}
                          <TiTickOutline /> Domestic security and aviation
                          security.{" "}
                        </li>
                        <li>
                          {" "}
                          <TiTickOutline /> Aviation security services satisfy
                          people{" "}
                        </li>
                      </ul>
                    </p>
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Container fluid>
          <Typography
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            AIRSERVICES
          </Typography>
          <p style={{ marginTop: "5px", textAlign: "justify" }}>
            Airservices is a government-owned Air Navigation Service Provider
            responsible for providing safe, secure, efficient, and
            environmentally sustainable services to the aviation industry. We
            provide a range of worldclass services that allow safe and equitable
            access to our skies. Our legislated responsibility and primary focus
            is ensuring safe air travel and providing service outcomes that are
            matched to the needs of our airline customers.
          </p>
          <p style={{ marginTop: "5px", textAlign: "justify" }}>
            We are responsible for flight path design, air traffic control,
            aviation rescue fire fighting services, and providing a noise
            complaints and information service.
          </p>
        </Container>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Container fluid>
          <Typography
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            AIRPORT OPERATORS
          </Typography>
          <p style={{ marginTop: "10px", textAlign: "justify" }}>
            Airport operators are the decision-makers for all on-airport
            activities, including developing infrastructure to support aircraft
            operations, such as new runways, and safeguarding aviation
            operations. Airport operators may also develop noise management
            plans, limit aircraft movements and ground running, encourage
            quieter fleets, prepare long-term forecasting of aircraft noise
            around the airport, such as the Australian Noise Exposure Forecast
            (ANEF), and manage local community engagement.
          </p>
        </Container>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Container fluid>
          <Typography
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            CIVIL AVIATION SAFETY AUTHORITY (CASA)
          </Typography>
          <p style={{ marginTop: "10px", textAlign: "justify" }}>
            CASA is a government body that regulates Australian aviation safety.
            It sets down rules that pilots, aircraft operators and air traffic
            controllers must comply with. CASA validates the instrument flight
            procedures Airservices produces and is the ultimate approver of
            Airspace Change Proposals.
          </p>
        </Container>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Container fluid>
          <Typography
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            DEPARTMENT OF INFRASTRUCTURE, TRANSPORT, REGIONAL DEVELOPMENT AND
            COMMUNICATIONS
          </Typography>
          <p style={{ marginTop: "10px", textAlign: "justify" }}>
            The Department of Infrastructure, Transport, Regional Development
            and Communications (the Department) is responsible for administering
            the approval through the Minister for Infrastructure, Transport and
            Regional Development (the Minister) for airport infrastructure
            projects for federally leased airports, generally submitted through
            a Master Plan or Major Development Plan (MDP) under the Airports Act
            1996. The Department also provides policy advice to the Minister on
            the efficient management of Australian airspace and aircraft noise
            and emissions.
          </p>
          <p style={{ marginTop: "5px", textAlign: "justify" }}>
            The Department can make recommendations to the Government on
            regulatory measures to manage aircraft noise which may include
            operational restrictions where appropriate, for example, curfews &
            movement caps. The Department is also responsible for setting the
            requirement for federally leased airports to produce an ANEF as part
            of the Airport Master Plan process.
          </p>
        </Container>
      </div>

      <div>
        <Container fluid style={{ marginTop: "30px" }}>
          <Row>
            <Col>
              <img src="https://www.centralprotection.ca/wp-content/uploads/2022/12/1000-Aviation-1.webp" />
            </Col>

            <Col>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>
                The personal abilities for which people are designated, and
                which are then established during training, are highly relevant.
                Most aviation people will possess many of the skills that
                security use the technologies that support the reinforcement
                knowledge companies look for, and that is easily convenient to
                this sector:
              </p>
              <p style={{ fontSize: "16px", textAlign: "justify" }}>
                Being able to evaluate information to establish certain facts
                and principles are key strengths for anyone within the aviation
                industry. Though tragic, the Tenerife airport disaster did lead
                experts on to review all their procedures, including the
                importance of standardized phraseology in radio communications
                being emphasised. 
              </p>
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

export default RolesResponsibilites;
