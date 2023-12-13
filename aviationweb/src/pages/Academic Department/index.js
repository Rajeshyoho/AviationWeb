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

const Department = () => {
  const logo = require("../../Images/logo3.png");
  return (
    <>
      <Grid
        sx={{
          background: " #ddeef7f5",
          overflowX: "hidden",
        }}
      >
         <Grid className='linearHeader' sx={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
      <Image className='img-fluid' style={{ height: 130,  }} src={logo} />
      <WeatherWidget/>

      </Grid>
      </Grid>

      <Grid>
      <NavBar/>
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
        {/* <div id="header" className="header container-fluid">
          <div className="headerText">
      
          </div>
        </div> */}
        <div style={{padding:0,margin:0}}>
          <img src="https://www.lamar.edu/_files/images/academics/academics-at-lamar-university.jpg" 
          style={{width:"100%"}}/>
        </div>

        <Container>
          <Row>
            <Col>
              <h2
                style={{
                  fontSize: "30px",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  fontFamily: "initial",
                }}
              >
                Divisions and Departments
              </h2>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <p style={{textAlign:"justify"}}>
                As the academic core of The University of Alabama, the College
                of Arts and Sciences is a forward-thinking leader in the arts,
                humanities, and natural and social sciences. With guidance from
                our award-winning faculty, our students graduate prepared to
                make transformative impacts in their chosen fields and the world
                around them.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{textAlign:"justify"}}>
                Here, we’ve organized our 22 departments according to four areas
                of emphasis: fine and performing arts, humanities, social
                sciences, and natural sciences and math. Visit our department
                websites to learn more about their programs and research, look
                up a department’s contact information in our Directory, or visit
                our Majors, Minors & Concentrations page for a full list of the
                undergraduate and graduate programs we offer.
              </p>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
          <Col>
            <h2
              style={{
                fontSize: "30px",
                marginTop: "1rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "initial",
              }}
            >
              Fine & Performing Arts
            </h2>
          </Col>

          <Row>
            <Col>
              <p style={{textAlign:"justify"}}>
                Our fine and performing arts departments advance the study and
                practice of art, theatre, dance, and music through programs that
                encompass classical, contemporary, and experimental styles.
                Renowned faculty inspire our students to achieve meaningful,
                creative accomplishments locally, nationally, and globally.
              </p>
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

        <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Col>
            <h2
              style={{
                fontSize: "30px",
                marginTop: "1rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "initial",
              }}
            >
              Social Sciences
            </h2>
          </Col>

          <Row>
            <Col>
              <p style={{textAlign:"justify"}}>
                Our fine and performing arts departments advance the study and
                practice of art, theatre, dance, and music through programs that
                encompass classical, contemporary, and experimental styles.
                Renowned faculty inspire our students to achieve meaningful,
                creative accomplishments locally, nationally, and globally.
              </p>
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
    </>
  );
};

export default Department;
