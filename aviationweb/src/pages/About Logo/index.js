import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Grid,
  Typography
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { Image } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import "../../components/Logo.css"

const AboutLogo = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const logo = require("../../Images/logo3.png");

  return (
    <div style={{overflow:"hidden"}}>
      <Grid>
        <Header />
        <NavBar />
      </Grid>

      <Row
        style={{
          position: "relative",
          backgroundImage: 'url("https://wallpapercave.com/wp/wp12435900.jpg")',
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
              About Logo
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
                About Logo
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

     

      <Grid>
        <Container fluid style={{ padding: 20, textAlign: "justify" }}>
          <Typography style={{ textAlign: "justify" }}>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginTop:"20px"
              }}
            >
              Best Pilot Training Institutes in the World 2023
            </h3>
            While there are many good flying clubs in India but these days there
            is a growing trend of people opting to complete their flying and
            gain their licenses from abroad. Captain U.S. Tiwari, a senior pilot
            of Air India (narrow-body) promptly confirmed this by saying,
            “Enrolling into a flying school abroad can prove to be an expensive
            affair but young aspiring pilots prefer it as it is a quicker option
            to complete their flying hours”.
          </Typography>
        </Container>
      </Grid>
            
            <Container>
<div className="col" style={{marginTop:"30px",marginBottom:"30px"}}>
      <a href="#" className="card card-10 stacked--fan-right">
        <div className="content">
          <Image
              className="img-fluid"
              style={{ width: "100%",marginLeft:"10px", transition: "transform 0.9s"}}
              src={logo}
              alt="Logo"
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
              onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
            /> 
        </div>
      </a>
    </div>
              {/* </Card>   */}

           
            </Container>

      <div style={{ marginTop: "40px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default AboutLogo;