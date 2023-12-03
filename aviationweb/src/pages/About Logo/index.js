import {
  Divider,
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
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

const AboutLogo = () => {
  const logo = require("../../Images/logo3.png");

  return (
    <>
      <Grid
        sx={{
          background: " #ddeef7f5",
          overflowX: "hidden",
        }}
      >
        <Grid
          className="linearHeader"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image className="img-fluid" style={{ height: 130 }} src={logo} />
        </Grid>
      </Grid>

      <Grid>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">ASDHEC Logo</Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Grid>

      <Grid style={{ padding: 5 }}>
        <Breadcrumb
          style={{ backgroundColor: "#FFFFFF", textDecoration: "none" }}
        >
          <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">ASDHEC Logo</Breadcrumb.Item>
        </Breadcrumb>
      </Grid>

      <div style={{ padding: 12 }}>
        <Row xs={1} md={2} style={{ backgroundColor: "#007aff" }}>
          <Col>
            <div
              style={{
                backgroundColor: "#007aff",
                display: "flex",
                padding: 0,
                textAlign: "center",
                backgroundPosition: "center",
              }}
            >
              <Image
                src="https://www.academyofaviation.com/images/aoa-logo-plain-white.png"
                style={{
                  backgroundColor: "#007aff",
                }}
                alt="Aviation"
                fluid
              />
            </div>
          </Col>

          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: 20, fontWeight: "bold" }}>
              Aviation Skill Development And Higher Educational Council
              <br />
              Best Pilot Training Institutes in the World
            </Typography>
          </Col>
        </Row>
      </div>

      <Grid>
        <Container>
          <Row>
            <Typography
              style={{
                fontSize: "1.125rem",
                textAlign: "center",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              WELCOME TO ACADEMY OF AVIATION'S INTERNATIONAL VISA CONTACT PAGE
              FOR STUDY-ABROAD COMMERCIAL PILOT STUDENTS.
            </Typography>
          </Row>
        </Container>
      </Grid>

      <Container>
        <Divider style={{ backgroundColor: "gray" }} />
      </Container>

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Typography
          style={{ fontFamily: "inherit", fontSize: 30, fontWeight: "bold" }}
        >
          Comprehensive solutions to elevate your aviation experience
        </Typography>
      </div>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col>
            <Card
              sx={{
                maxWidth: 360,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)", // You can adjust the scale factor
                },
              }}
            >
              <CardMedia
                component="img"
                height="80"
                image="https://wallpapercave.com/dwp2x/wp12488409.jpg"
                alt="green iguana"
              />
            </Card>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Airlines
            </Typography>
          </Col>

          <Col>
            <Card
              sx={{
                maxWidth: 360,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)", // You can adjust the scale factor
                },
              }}
            >
              <CardMedia
                component="img"
                height="80"
                image="https://img.freepik.com/free-photo/jumbo-jet-flying-sky_23-2150895681.jpg?t=st=1701500725~exp=1701504325~hmac=d6e499f4c90da7c026d00b38562bde168f0deaa83b77fa91dde6136b4e037c00&w=1060"
                alt="green iguana"
              />
            </Card>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Airlines
            </Typography>
          </Col>

          <Col>
            <Card
              sx={{
                maxWidth: 345,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)", // You can adjust the scale factor
                },
              }}
            >
              <CardMedia
                component="img"
                height="80"
                image="https://img.freepik.com/premium-photo/airplane-landing-airport-rays-setting-sun-with-copyspace_766625-11904.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=ais"
                alt="green iguana"
              />
            </Card>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Airlines
            </Typography>
          </Col>

          <Col>
            <Card
              sx={{
                maxWidth: 345,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)", // You can adjust the scale factor
                },
              }}
            >
              <CardMedia
                component="img"
                height="80"
                image="https://img.freepik.com/free-photo/travel-background-with-toy-plane-map_23-2147828038.jpg?w=900&t=st=1701519746~exp=1701520346~hmac=0234cf19973cf555c89f6ebf3e3192420e85ca739f2d0b6e27a687ae0a0bb026"
                alt="green iguana"
              />
            </Card>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Airlines
            </Typography>
          </Col>
        </Row>
      </Container>

      <div style={{ marginTop: 30 }}>
        <Container>
          <Row>
            <Col>
              <Typography
                style={{
                  fontFamily: "inherit",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Passenger Airlines GSSA
              </Typography>
              <Typography style={{ marginTop: 20 }}>
                Global Aviation is a comprehensive full-service provider for an
                international airline, offering a range of services that include
                reservations and ticketing, revenue projections, optimal route
                recommendations, and government approvals. With the right
                partner, Global Aviation can be a great way to provide the best
                customer experience and represent their brand on a global scale.
              </Typography>
            </Col>

            <Col style={{ marginTop: 20 }}>
              <Image className="img-fluid" style={{ height: 130 }} src={logo} />
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ marginTop: 30 }}>
        <Footer />
      </div>
    </>
  );
};

export default AboutLogo;
