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
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
  };

  const headStyle = {
    fontSize: "30px",
    lineHeight: "40px",
    transform: isHovered ? "translateY(0px)" : "translateY(40px)",
    transition: "all 0.7s",
  };
  return (
    <Grid>
      {/* <Grid
        sx={{
          background: " #ddeef7f5",
          overflowX: "hidden",
        }}
      >
  <Grid className='linearHeader' sx={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
      <Image className='img-fluid' style={{ height: 130,  }} src={logo} />
      <WeatherWidget/>

      </Grid>
      </Grid> */}

      <Grid>
        <Header />
        <NavBar />
      </Grid>

      <Row
        style={{
          position: "relative",
          backgroundImage: 'url("https://wallpapercave.com/wp/wp12643319.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh", // Set the height to 100% of the viewport height
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
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
              Vision Mission
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
                About Us
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                style={{ color: "rgba(161,225,229,1)" }}
              >
                Vision Mission
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <Grid container sx={{ padding: 3 }}>
        <Grid item xs={12} md={6} sx={{ paddingX: { xs: 1, sm: 2, md: 3 } }}>
          <div>
            <h1
              style={{
                marginBottom: "15px",
                padding: "0px",
                fontSize: "30px",
                fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              Vision and Mission 
            </h1>
            <h2
              style={{
                marginBottom: "15px",
                padding: "0px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Defining the essence
            </h2>
            <p
              style={{ padding: "0px", textAlign: "justify", fontSize: "19px" }}
            >
              CGI's Constitution is a reflection of our Culture. The
              Constitution is made up of the common Dream, Vision, Mission and
              Values that drive us as we strive together to build a global IT
              and business consulting services leader. With frameworks and
              programs founded upon this Constitution, CGI's consultants and
              professionals have the opportunity to participate in the life and
              development of their company, which, in turn, results in client
              loyalty and shareholder growth, like a road map of how to achieve
              the goals set in your vision statement.
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

      <Grid container sx={{ padding: "30px", textAlign: "justify" }}>
        <Grid item xs={12} md={6} sx={{ paddingX: { xs: 1, sm: 2, md: 3 } }}>
          <div>
            <h3 style={{ fontWeight: "bold", fontSize: "19px" }}>Our Dream</h3>
            <p style={{ margin: "3px 0px 20px", fontSize: "17px" }}>
              To create an environment in which we enjoy working together and,
              as owners, contribute to building a company we can be proud of.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: "bold", fontSize: "19px" }}>Our Vision</h3>
            <p style={{ margin: "3px 0px 20px", fontSize: "17px" }}>
              To create an environment in which we enjoy working together and,
              as owners, contribute to building a company we can be proud of.
            </p>
          </div>
          <div>
            <h3 style={{ fontWeight: "bold", fontSize: "19px" }}>
              Our Mission
            </h3>
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
            style={{
              paddingLeft: "10px",
              fontWeight: "bold",
              fontSize: "19px",
            }}
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

      <Grid container sx={{ padding: "30px", textAlign: "justify" }}>
        <Grid item xs={12} md={6} sx={{ paddingX: { xs: 1, sm: 2, md: 3 } }}>
          <div>
            <h3 style={{ fontWeight: "bold", fontSize: "19px" }}>
              The CGI Culture through the adherence of our Constitution
            </h3>
            <Typography
              style={{
                margin: "3px 0px 10px",
                fontSize: "17px",
                textAlign: "justify",
              }}
            >
              Our Constitution is the foundation of our Culture, expressed in
              words. To learn more—and to read a Word from Our Founder—visit the
              CGI Culture page. This document explains the rationale of our
              Constitution and how it is a reflection of our Culture. It aims to
              guide all CGI consultants and professionals, whom we call members,
              in their day-to-day actions to live the Dream.
            </Typography>
            <Typography
              style={{
                margin: "3px 0px 10px",
                fontSize: "17px",
                textAlign: "justify",
              }}
            >
              The world will continue to change. CGI will have to remain close
              to its clients and continue to evolve. Correspondingly, CGI
              members will have to continue to evolve our Constitution through
              the coming decades to support the continuous success of CGI and
              ensure its perenniality.
            </Typography>
            <Typography
              style={{
                margin: "3px 0px 10px",
                fontSize: "17px",
                textAlign: "justify",
              }}
            >
              All existing EOIs in the pool as on 12 October 2022 meeting the
              old policy requirements were eligible for selection.The first EOI selection round under the new policy will be held in August 2023 and every three months thereafter
            </Typography>
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
        <Footer />
      </div>
    </Grid>
  );
};

export default VisionMission;
