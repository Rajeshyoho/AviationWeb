import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import "../../components/VisionMission.css";
// import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-bootstrap/Carousel";
// import NavBar from "../../components/NavBar"
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import Footer from "../../components/Footer";

const images = [
  "https://wallpapercave.com/dwp2x/wp12041609.jpg",
  "https://wallpapercave.com/dwp2x/wp9579853.jpg",
  "https://wallpapercave.com/wp/wp10561288.jpg",
  "https://flytechaviation.aero/wp-content/uploads/2021/03/Flytech-Aviation-Academy-aeronautical-traning-1.jpg",
];

const VisionMission = () => {

    const logo = require("../../Images/logo3.png");

  const [selectedImage, setSelectedImage] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextClick = () => {
    setSelectedImage((prevImage) =>
      prevImage === images.length ? 1 : prevImage + 1
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 5000); // Change 5000 to the desired interval in milliseconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [selectedImage]);

  const containerStyle = {
    "@media (max-width: 600px)": {
      width: "100%", // Adjust styles for smaller screens
    },
    height: "400px",
    position: "relative",
    margin: "auto",
    cursor: "pointer",
    boxShadow: "0 0 5px #000",
    backgroundImage: `url(${"https://s.wsj.net/public/resources/images/BN-KB814_AUSPIL_P_20150831080105.jpg"})`,
    backgroundSize: "cover",
  };

  const overlayStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(77, 77, 77, .9)",
    color: "#FEF5DF",
    opacity: isHovered ? 0.8 : 0,
    transition: "all 0.5s",
    fontFamily: "'Playfair Display', serif",
  };

  const headStyle = {
    fontSize: "30px",
    lineHeight: "40px",
    transform: isHovered ? "translateY(0px)" : "translateY(40px)",
    transition: "all 0.7s",
  };
  return (
    <Grid>
      
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

  <Grid >
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Vision & Mission</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </Grid>

      <Grid container sx={{ padding:3}}>
        <Grid item xs={12} md={6} sx={{ paddingX: { xs: 1, sm: 2, md: 3 } }}>
          <div>
            <h3>
              <li
                style={{
                  listStyle: "none",
                  textDecoration: "underline",
                  color: "#5236ab",
                  fontSize: "20px",
                  marginBottom: "15px",
                  padding: "0px",
                }}
              >
                <a>Company overview</a>
              </li>
            </h3>
            <h1
              style={{ color: "#200a58", marginBottom: "15px", padding: "0px" }}
            >
              The CGI Constitution
            </h1>
            <h2
              style={{
                color: "#200a58",
                fontWeight: 400,
                marginBottom: "15px",
                padding: "0px",
              }}
            >
              Defining the essence of who we are
            </h2>
            <p style={{ fontSize: "18px", lineHeight: "32px", padding: "0px" }}>
              CGI's Constitution is a reflection of our Culture. The
              Constitution is made up of the common Dream, Vision, Mission and
              Values that drive us as we strive together to build a global IT
              and business consulting services leader. With frameworks and
              programs founded upon this Constitution, CGI's consultants and
              professionals have the opportunity to participate in the life and
              development of their company, which, in turn, results in client
              loyalty and shareholder growth.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Carousel fade={true} pause={false}>
            {images.map((imageUrl, index) => (
              <Carousel.Item key={index} interval={1000}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={`Image ${index + 1}`}
                    height="400"
                    image={imageUrl}
                    style={{ objectFit: "cover" }} // Add this line
                  />
                  <Carousel.Caption>
                    {/* <h3>{`Slide ${index + 1} label`}</h3> */}
                    {/* <p>Some text related to the image</p> */}
                  </Carousel.Caption>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>
      </Grid>

      <Grid container sx={{ padding:"30px" }}>
        <Grid item xs={12} md={6} sx={{ paddingX: { xs: 1, sm: 2, md: 3 } }}>
          <div>
            <h3 style={{ color: " #0e2246", fontSize: "19px" }}>Our Dream</h3>
            <p style={{ margin: "3px 0px 20px", fontSize: "17px" }}>
              To create an environment in which we enjoy working together and,
              as owners, contribute to building a company we can be proud of.
            </p>
          </div>
          <div>
            <h3 style={{ color: " #0e2246", fontSize: "19px" }}>Our Vision</h3>
            <p style={{ margin: "3px 0px 20px", fontSize: "17px" }}>
              To create an environment in which we enjoy working together and,
              as owners, contribute to building a company we can be proud of.
            </p>
          </div>
          <div>
            <h3 style={{ color: " #0e2246", fontSize: "19px" }}>Our Mission</h3>
            <p style={{ margin: "3px 0px 20px", fontSize: "17px" }}>
              To help our clients succeed through outstanding quality,
              competence and objectivity, providing thought leadership and
              delivering the best services and solutions to fully satisfy client
              objectives in information technology, business processes, and
              management. In all we do, we are guided by our Dream, living by
              our Values to foster trusted relationships and meet our
              commitments now and in the future.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3
            style={{ paddingLeft: "10px", color: " #0e2246", fontSize: "19px" }}
          >
            Our Values
          </h3>
          <div
            sx={{ paddingX: { xs: 1, sm: 2, md: 3 } }}
            className="accordianBorder"
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="accordianHeader">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordianText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="accordianHeader">Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordianText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className="accordianHeader">Accordion 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordianText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography className="accordianHeader">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordianText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <Typography className="accordianHeader">Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="accordianText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>

      <Grid container sx={{ padding:"30px" }}>
        <Grid item xs={12} md={6} sx={{ paddingX: { xs: 1, sm: 2, md: 3 } }}>
          <div>
            <h3 style={{ color: " #0e2246", fontSize: "19px" }}>
              The CGI Culture through the adherence of our Constitution
            </h3>
            <p style={{ margin: "3px 0px 10px", fontSize: "17px" }}>
              Our Constitution is the foundation of our Culture, expressed in
              words. To learn more—and to read a Word from Our Founder—visit the
              CGI Culture page. This document explains the rationale of our
              Constitution and how it is a reflection of our Culture. It aims to
              guide all CGI consultants and professionals, whom we call members,
              in their day-to-day actions to live the Dream.
            </p>
            <p style={{ margin: "3px 0px 10px", fontSize: "17px" }}>
              The world will continue to change. CGI will have to remain close
              to its clients and continue to evolve. Correspondingly, CGI
              members will have to continue to evolve our Constitution through
              the coming decades to support the continuous success of CGI and
              ensure its perenniality.
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={containerStyle}>
            <div style={overlayStyle} className="overlay">
              <div style={headStyle} className="head">
                <h3>Product Name</h3>
                <p style={{ borderTop: "1px solid", fontSize: "20px" }}>
                  View Conent
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
 
    <div>
        <Footer/>
    </div>

    </Grid>
  );
};

export default VisionMission;