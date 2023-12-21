import { Box, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "react-bootstrap/Table";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Description from "../../components/Description";
// import CardList from "../../components/Description";
import { useParams } from "react-router-dom";
import IndividualCard from "../../components/IndividualCard";
import { Switch } from "@mui/material";

const JobDescription = () => {
  const logo = require("../../Images/logo3.png");

  const imageStyle = {
    borderRadius: "50%", // for a circular shape
    maxWidth: 300,
    height: 300,
    display: "block",
    margin: "0 auto",
  };

  // Media query for small devices
  const smallDeviceStyle = {
    ...imageStyle,
    maxWidth: "80%", // Adjust the value as needed
  };

  const cards = [
    {
      title: "Airline Ticketing Executive",
      image:"https://aviationoutlook.com/wp-content/uploads/2021/05/Fractional-Jet-Ownership-vs.-Whole-Aircraft-Ownership-1024x573.jpg",
      description:
        "Airline Ticketing Executive / Travel Consultant / airport ground staff Flight and Fare enquiries emails Good Communication in English 6 days working and 1 week off Operate and control aircraft along planned routes and during takeoffs and landings. Monitor engines, fuel consumption, and other aircraft systems during flight.",
    },

    {
      title: "Airline ground staff",
      image:"https://20256628.fs1.hubspotusercontent-na1.net/hub/20256628/hubfs/Aviation%20Landing%20Page%20(1).jpg?width=2878&name=Aviation%20Landing%20Page%20(1).jpg",
      description:
        "An airline pilot, or aviator, transports passengers and cargo by airplane. Some commercial aviators perform other duties, such as dusting crops or monitoring traffic.commercial and airline pilots were earning a median annualemployment opportunities for airline and commercial pilots.",
    },
    // Add more cards as needed
  ];

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
              Job Description
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
                Job Description
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <Grid
        sx={{
          backgroundColor: "#f0f0fb",
          // marginTop: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              marginTop: 8,
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            JOB OFFERS TRENDS | COMPANIES | JOB DESCRIPTIONS | JOB TYPES |
            SALARIES
          </Typography>
        </Box>

        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <br />
          <Typography variant="h5">Flight job description</Typography>
          <Container style={{ marginBottom: "25px" }}>
            <Typography
              style={{
                marginTop: "20px",
                textAlign: "justify",
                marginBottom: "20px",
              }}
            >
              A Flight Attendant is a professional who is responsible for
              ensuring the safety, security, and comfort of passengers on board
              an airline. They provide customer service before, during, or at
              the end of each trip while creating a welcoming aviation engineers
              who are highly skilled in handling between flights.
            </Typography>
          </Container>
        </Box>
        <div style={{ marginBottom: "10px" }}></div>
      </Grid>

      <Description cards={cards} />


      {/* <div>
        <Container>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Flight Technician</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Flies on the aircraft and provides flight attendant services as
                well as technician services as needed (combination flight
                attendant and technician). Typically a licensed FCC Avionics
                Repairman. (BDO Code 440)
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Flight Coordinator/Office Manager</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Schedules aircraft and records flight times, maintains aircraft
                schedule changes as well as manages the day-to-day
                administrative duties of the departmental office. (BDO Code 500)
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Flight Coordinator/Office Manager</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Schedules aircraft and records flight times, maintains aircraft
                schedule changes as well as manages the day-to-day
                administrative duties of the departmental office. (BDO Code 500)
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Flight Coordinator/Scheduler </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Schedules aircraft and records flight times, maintains aircraft
                schedule changes as well as other administrative duties. (BDO
                Code 520)
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Senior Flight Attendant</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Most seasoned member of flight attendant staff. May manage
                flight attendants schedule and/or supervise other flight
                attendants. Provides safety assurance as well as ensuring a
                cabin environment that is conducive to passenger needs.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Line Service Personnel</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Responsible for refueling, moving aircraft in and out of hangar,
                cleans and restocks aircraft. Assists in routine maintenance,
                pre-flights, meeting of arriving and dispatching departing
                aircraft, etc.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Manager of Maintenance</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A licensed A&P who supervises other A&P maintenance technicians
                and helpers directly or through a lead maintenance technician or
                maintenance foreman.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </div> */}

      <div>
        <Container>
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              marginTop: "30px",
            }}
          >
            Aviation job description Salaries information
          </Typography>
          {/* <Typography style={{ marginTop: 10, textAlign: "justify" }}>
            An aviation engineer provides an essential service by working to
            maintain or build a particular type of aircraft. Those working in
            this field are usually employed by an airline or maintenance company
            on either a contract or long term basis. To be a properly licensed
            aviation engineer, many months of study are required, followed by
            practical experience to gain company approval.
          </Typography> */}
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <Table
                striped
                bordered
                hover
                responsive="lg"
                className="text-center table-design"
              >
                <thead>
                  <tr>
                    <th>Schedule Date</th>
                    <th>Starting Time</th>
                    <th>Ending Time</th>
                    <th>Applicant Name</th>
                    <th>Applied position</th>
                    <th>Interviewer Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>02.01.2023</td>
                    <td>10.35 am</td>
                    <td>11.40 am</td>
                    <td>Candiate</td>
                    <td>Research Associate</td>
                    <td>John Foe</td>
                  </tr>
                  <tr>
                    <td>02.01.2023</td>
                    <td>10.35 am</td>
                    <td>11.40 am</td>
                    <td>Candiate</td>
                    <td>Research Associate</td>
                    <td>John Foe</td>
                  </tr>
                  <tr>
                    <td>02.01.2023</td>
                    <td>10.35 am</td>
                    <td>11.40 am</td>
                    <td>Candiate</td>
                    <td>Research Associate</td>
                    <td>John Foe</td>
                  </tr>
                  <tr>
                    <td>02.01.2023</td>
                    <td>10.35 am</td>
                    <td>11.40 am</td>
                    <td>Candiate</td>
                    <td>Research Associate</td>
                    <td>John Foe</td>
                  </tr>
                  <tr>
                    <td>02.01.2023</td>
                    <td>10.35 am</td>
                    <td>11.40 am</td>
                    <td>Candiate</td>
                    <td>Research Associate</td>
                    <td>John Foe</td>
                  </tr>
                  <tr>
                    <td>02.01.2023</td>
                    <td>10.35 am</td>
                    <td>11.40 am</td>
                    <td>Candiate</td>
                    <td>Research Associate</td>
                    <td>John Foe</td>
                  </tr>
                  <tr>
                    <td>02.01.2023</td>
                    <td>10.35 am</td>
                    <td>11.40 am</td>
                    <td>Candiate</td>
                    <td>Research Associate</td>
                    <td>John Foe</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>

          {/* <Typography style={{ marginTop: 10 }}>
            <ul>
              <li>
                (1) A small Montana-based airport was looking for a part-time
                commercial pilot with an instrument rating and minimum of 2000
                hours total flight time.
              </li>
              <li>
                (2) Individuals looking for entry-level employment in the
                aviation field as technicians, mechanics or pilots
              </li>
              <li>
                (3) Aviation maintenance technician ($55,000)* - Airline pilot
                ($118,000)* - Commercial pilot ($76,000)*
              </li>
              <li>
                (4) A career in aviation may seem like an excellent idea, Aside
                romantic of being in the clouds, transportation form for travel
                and cargo shipping.
              </li>
            </ul>
          </Typography> */}
        </Container>
      </div>

      {/* <div>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Requirements and skills
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Our Recruitors
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Responsibilities
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </div> */}

      {/* <div>
        <Container>
          <Row
            style={{
              marginTop: "50px",
              textAlign: "center",
              textAlign: "justify",
            }}
          >
            <Col>
              <Typography style={{ fontWeight: "bold", fontSize: "30px" }}>
                Skills
              </Typography>
              <Typography>
                <ul>
                  <li>
                    <GoDotFill />
                    Having high attention to details.{" "}
                  </li>
                  <li>
                    <GoDotFill />
                    Being able to meet strict deadlines.{" "}
                  </li>
                  <li>
                    <GoDotFill />
                    Having awareness of safety regulations.{" "}
                  </li>
                  <li>
                    <GoDotFill />
                    Being methodical and accurate.{" "}
                  </li>
                  <li>
                    <GoDotFill />
                    Being able to stay calm under emergency circumstances.{" "}
                  </li>
                  <li>
                    <GoDotFill />
                    Having good hand-to-eye coordination.{" "}
                  </li>
                  <li>
                    <GoDotFill />
                    Having good communication skills.{" "}
                  </li>
                </ul>
              </Typography>
            </Col>

            <Col>
              <Typography style={{ fontWeight: "bold", fontSize: "30px" }}>
                Education
              </Typography>
              <Typography style={{ textAlign: "justify" }}>
                Academic requirements in Aviation industry vary according to
                desired job placements. Aircraft dispatcher posts require
                applicants having A levels in travel and tourism and GCSE’s
                grades (A-C) in Math, English, and Leisure & Tourism. Other
                cases are airport baggage handlers that only require a good
                standard of numeracy and literacy and being over 18 years old.
                People who want to be flight attendants require GCSE´s or
                equivalent grades and other requirements that vary according to
                airlines.
              </Typography>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* <div>
        <Container>
          <Row>
            <Typography
              style={{
                marginTop: "30px",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Ready To Take Flight.!
            </Typography>

            <Col>
              <Image
                src="https://s.yimg.com/ny/api/res/1.2/zoLMtpg1Xp5x_4H1O5owOg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://media.zenfs.com/en/accesswire.ca/6738905601446b84f03296a7b7c66c5d"
                alt="Rounded Image"
                style={imageStyle}
              />
            </Col>

            <Col>
              <Image
                src="https://calaero.edu/wp-content/uploads/2019/08/3.png"
                alt="Rounded Image"
                style={imageStyle}
              />
            </Col>

            <Col>
              <Image
                src="https://res.cloudinary.com/highereducation/image/upload/w_740,c_fill,f_auto,fl_lossy,q_auto/v1536349659/TheBestSchools.org/aviation-jobs.jpg"
                alt="Rounded Image"
                style={imageStyle}
              />
            </Col>
          </Row>
        </Container>
      </div> */}

      <Grid style={{ marginTop: "50px" }}>
        <Footer />
      </Grid>
    </div>
  );
};

export default JobDescription;
