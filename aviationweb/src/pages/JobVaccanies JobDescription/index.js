import { Box, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
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

const JobDescription = () => {
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
          <Typography variant="h5">Flight Attendant job description</Typography>
          <Container style={{ marginBottom: "25px" }}>
            <Typography style={{ marginTop: "20px", textAlign: "justify" }}>
              A Flight Attendant is a professional who is responsible for
              ensuring the safety, security, and comfort of passengers on board
              an airline. They provide customer service before, during, or at
              the end of each trip while creating a welcoming aviation engineers
              who are highly skilled in handling between flights.
            </Typography>
          </Container>
        </Box>
        <div style={{marginBottom:"10px"}}></div>
      </Grid>

       

      <div>
        <Container>
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              marginTop: 25,
            }}
          >
            Aviation job description responsibilities Post Job
          </Typography>
          <Typography style={{ marginTop: 10,textAlign:"justify" }}>
            An aviation engineer provides an essential service by working to
            maintain or build a particular type of aircraft. Those working in
            this field are usually employed by an airline or maintenance company
            on either a contract or long term basis. To be a properly licensed
            aviation engineer, many months of study are required, followed by
            practical experience to gain company approval.
          </Typography>

          <Typography style={{ marginTop: 10 }}>
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
                romantic of being in the clouds, transportation form for
                travel and cargo shipping.
              </li>
            </ul>
          </Typography>
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

      <div>
        <Container>
          <Row
            style={{
              marginTop: "30px",
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
      </div>

      <Grid style={{ marginTop: "50px" }}>
        <Footer />
      </Grid>
    </div>
  );
};

export default JobDescription;
