import { Grid, Typography, Box, Divider, Card } from "@mui/material";
import { React } from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../components/Department.css"; // Make sure to provide the correct path to your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

const Department = () => {
  const logo = require("../../Images/logo3.png");
  return (
    <div style={{overflow:"hidden"}}>
       <Grid>
      <Header />
      <NavBar />
      </Grid>


      {/* <Grid style={{ padding: 5 }}>
        <Breadcrumb
          style={{ backgroundColor: "#FFFFFF", textDecoration: "none" }}
        >
          <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">ASDHEC Logo</Breadcrumb.Item>
        </Breadcrumb>
      </Grid> */}

      <>
     
      <Row
  style={{
    position: "relative",
    backgroundImage:
      'url("https://www.lamar.edu/_files/images/academics/academics-at-lamar-university.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "60vh", // Set the height to 100% of the viewport height
    paddingLeft: "40px",
    paddingRight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
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
       Departments
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
          About Us
        </Link>
        <Link
          underline="none"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          style={{color:"rgba(161,225,229,1)"}}
        >
          Departments
        </Link>
      </Breadcrumbs>
    </div>
  </Col>
</Row>



        <Container fluid>
          <Row>
            <Col>
              <h2
                style={{
                  fontSize: "30px",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  textAlign:"center"
                }}
              >
                Divisions and Departments
              </h2>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Typography style={{ textAlign: "justify" }}>
                As the academic core of The University of Alabama, the College
                of Arts and Sciences is a forward-thinking leader in the arts,
                humanities, and natural and social sciences. With guidance from
                our award-winning faculty, our students graduate prepared to
                make transformative impacts in their chosen fields and the world
                around them.
              </Typography>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Typography style={{ textAlign: "justify" }}>
                Here, we’ve organized our 22 departments according to four areas
                of emphasis: fine and performing arts, humanities, social
                sciences, and natural sciences and math. Visit our department
                websites to learn more about their programs and research, look
                up a department’s contact information in our Directory, or visit
                our Majors, Minors & Concentrations page for a full list of the
                undergraduate and graduate programs we offer.
              </Typography>
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ marginTop: "40px", marginBottom: "40px" }}>
          <Col>
            <h2
              style={{
                fontSize: "30px",
                marginTop: "1rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                textAlign: "center",

              }}
            >
              Fine & Performing Arts
            </h2>
          </Col>

          <Row>
            <Col>
              <Typography style={{ textAlign: "justify" }}>
                Our fine and performing arts departments advance the study and
                practice of art, theatre, dance, and music through programs that
                encompass classical, contemporary, and experimental styles.
                Renowned faculty inspire our students to achieve meaningful,
                creative accomplishments locally, nationally, and globally.
              </Typography>
            </Col>
          </Row>

          <Row>
            <Col>
              <span style={{ fontWeight: "bolder" }}>Associate Dean:</span>{" "}
              <span
                style={{
                  color: "#0e2246",
                  fontWeight: "bolder",
                  textDecoration: "underline",
                  textDecorationColor: "#0e2246",
                }}
              >
                Dr. Tricia McElroy
              </span>
            </Col>
          </Row>

          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp9482512.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">
                    DEPARTMENT OF ART & ART HISTORY
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp9482512.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">SCHOOL OF MUSIC</h2>
                </div>
              </div>
            </Col>

            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp9482512.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">
                    DEPARTMENT OF THEATRE AND DANCE
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Col>
            <h2
              style={{
                fontSize: "30px",
                marginTop: "1rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                textAlign: "center",

              }}
            >
              Social Sciences
            </h2>
          </Col>

          <Row>
            <Col>
              <Typography style={{ textAlign: "justify" }}>
                Our fine and performing arts departments advance the study and
                practice of art, theatre, dance, and music through programs that
                encompass classical, contemporary, and experimental styles.
                Renowned faculty inspire our students to achieve meaningful,
                creative accomplishments locally, nationally, and globally.
              </Typography>
            </Col>
          </Row>

          <Row>
            <Col>
              <span style={{ fontWeight: "bolder" }}>Associate Dean:</span>{" "}
              <span
                style={{
                  color: "#0e2246",
                  fontWeight: "bolder",
                  textDecoration: "underline",
                  textDecorationColor: "#0e2246",
                }}
              >
                Dr. Tricia McElroy
              </span>
            </Col>
          </Row>

          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp11440932.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">
                    DEPARTMENT OF ART & ART HISTORY
                  </h2>
                </div>
              </div>
            </Col>

            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp11440935.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">SCHOOL OF MUSIC</h2>
                </div>
              </div>
            </Col>

            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp11440935.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">DEPARTMENT OF AMERICAN</h2>
                </div>
              </div>
            </Col>

            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp2225026.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">DEPARTMENT OF ENGLISH</h2>
                </div>
              </div>
            </Col>

            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp11440859.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">DEPARTMENT OF PHILOSOPHY</h2>
                </div>
              </div>
            </Col>

            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp2225018.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">DEPARTMENT OF PROGRAMS</h2>
                </div>
              </div>
            </Col>

            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp11440927.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">
                    DEPARTMENT OF THEATRE AND DANCE
                  </h2>
                </div>
              </div>
            </Col>
            <Col md={3} style={{ marginTop: "20px" }}>
              <div className="image-card">
                <img
                  src="https://wallpapercave.com/dwp1x/wp4756379.jpg"
                  alt="Image"
                  className="card-image"
                />
                <div className="shadow-overlay"></div>
                <div className="card-content">
                  <h2 className="card-title">
                    DEPARTMENT OF THEATRE AND DANCE
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Department;
