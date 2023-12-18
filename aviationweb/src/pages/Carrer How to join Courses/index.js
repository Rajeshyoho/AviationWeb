import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Divider, Grid, Typography } from "@mui/material";
import { Image, NavDropdown } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../components/Footer";
import HorizontalMarquee from "../../components/HorizontalMarquee";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

const HowToJoinCourse = () => {
  const logo = require("../../Images/logo3.png");

  return (
    <>

    <Grid>
      <Header />
      <NavBar />
      </Grid>


      {/* <Grid style={{ marginLeft: 5 }}>
        <Breadcrumb
          style={{ backgroundColor: "#FFFFFF", textDecoration: "none" }}
        >
          <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">ASDHEC Logo</Breadcrumb.Item>
        </Breadcrumb>
      </Grid> */}

<Row
  style={{
    position: "relative",
    backgroundImage:
      'url("https://flyairaviationacademy.in/images/DIPLOMA-IN-AIRPORT-GROUND-HANDLING-WITH-FLIGHT-DISPATCH-RTR%20-AERO.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "60vh", // Set the height to 100% of the viewport height
    paddingLeft: "40px",
    paddingRight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    width: "100%"
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
       How To Join Courses
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
    <div role="presentation" >
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
          alignItems:"center"
        }}
      >
         <Link underline="hover" color="inherit" href="Home" style={{display:"flex",alignItems:"center"}}>
          <HomeIcon fontSize="medium" style={{marginRight:"5px",marginBottom:"2px"}}/>
         Home
        </Link>
        <Link underline="none"  color="inherit" href="/">
          Carrer
        </Link>
        <Link
          underline="none"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          style={{color:"rgba(161,225,229,1)"}}
        >
          How To Join Courses
        </Link>
      </Breadcrumbs>
    </div>
  </Col>
</Row>

      <div style={{ marginTop: 30 }}>
        <Container>
          <Typography
            style={{
              fontWeight: "bold",

              fontSize: "30px",
              textAlign: "center",
            }}
          >
            Airport Ground Staff Course Details
          </Typography>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Divider
                style={{
                  borderBottom: "3px solid #fc001b",
                  maxWidth: "800px",
                  marginTop: 10,
                }}
              />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Typography style={{ marginTop: 15 }}>
            The number of aircraft and airports is increasing rapidly in India
            as India is facing a shortage of well-skilled ground staff. There is
            a huge demand for ground staff who can deal with the functioning at
            the airport. It is a certification course related to the safety and
            comfort of passengers in the airport including checking, providing
            information, assisting disabled passengers, and selling tickets.
          </Typography>
        </Container>
      </div>

      <div>
        <Container style={{ marginTop: 20, marginRight: 20 }}>
          <Row xs={1} md={2}>
            <Col>
              <ul>
                <li>Airport Division</li>
                <li>Aviation Fundamentals</li>
                <li>
                  Reservation includes Baggage screening and Queue Management
                </li>
                <li>Check-in Procedures</li>
                <li>Baggage Make-Up Area</li>
                <li>Security Hold Area and boarding gate</li>
                <li>Boarding Gate Formalities and Announcements</li>
                <li>Arrival Procedures</li>
                <li>Ramp Management</li>
                <li>Frequent Flyer Program</li>
                <li>SABRE- Basic Reservations and check-in</li>
                <li>SABRE- Passenger Handling</li>
                <li>Inter-department coordination</li>
              </ul>
            </Col>
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Is Aeronautical engineering a good career option?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, aeronautical engineering has an excellent and amazing
                    career in the future because the aviation sector is the
                    fastest-growing sector in the world.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What is an airport ground staff course?
                  </Accordion.Header>
                  <Accordion.Body>
                    Airport ground staff courses are training programs designed
                    to prepare individuals for various roles in airport
                    operations. These roles include check-in agents. and more.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How long does an airport ground staff course usually take to
                    complete?
                  </Accordion.Header>
                  <Accordion.Body>
                    The duration can vary depending on the course and the
                    institution offering it. Typically, these courses can range
                    from a few weeks to several months.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What is the cost of an airport ground staff course?
                  </Accordion.Header>
                  <Accordion.Body>
                    Course fees vary widely by location and institution. It's
                    essential to research different programs to find one that
                    fits your budget.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Typography
            style={{

              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Ground Staff Course Admission Process
          </Typography>
          <p>
            To become a ground staff, the candidate has to follow the following
            Ground Staff Admission Process:-
          </p>
          <ul style={{ marginLeft: 20 }}>
            <li>
              To join the ground staff Course a candidate should fill the form
              of Aircraft Maintenance Engineering Common Entrance Test (AME
              CET).
            </li>
            <li>
              After clearing AME CET Exam, based on the All India Rank (AIR) of
              AME CET students will get admission in one of top ground staff
              institutes.
            </li>
          </ul>
        </Container>
      </div>

      <div>
        <Container>
          <Typography
            style={{
 
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Ground Staff Course Duration
          </Typography>
          <p>
            Ground staff course duration is tentatively 11 months certification
            course in the aviation sector. The cabin crew course covers various
            topics like checking, assisting disabled passengers, providing
            information, confirming reservations, etc.
          </p>

          <p>
            To get admission in ground staff certification course student must
            qualify the following eligibility criteria:-
          </p>

          <ul style={{ marginLeft: 20 }}>
            <li>
              A student must be appearing or passed 10+2 with any stream or 3
              year engineering diploma from any recognized board/university.
            </li>

            <li>
              Students who are searching for one of the top most institutes of
              Ground staff in India can qualify the National level Entrance Test
              of AME CET.
            </li>
          </ul>
        </Container>
      </div>

      <div  style={{marginTop:5}}>
        <HorizontalMarquee />
      </div>

      <div style={{marginTop:5}}>
        <Footer/>
      </div>
    </>
  );
};

export default HowToJoinCourse;
