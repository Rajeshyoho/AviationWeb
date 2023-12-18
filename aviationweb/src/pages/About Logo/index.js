import {
  Divider,
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
} from "@mui/material";
import React from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

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

      <Grid
        style={{
          textAlign: "center",
          marginTop: 20,
          fontSize: "30px",
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#114379",
        }}
      >
        <h1>OUR POLICIES</h1>
      </Grid>

      <Grid>
        <Container fluid style={{ padding: 20, textAlign: "justify" }}>
          <Typography style={{ textAlign: "justify" }}>
            The Global Group of Companies, a pan India conglomerate in its 48th
            year, is the first General Sales Agent in India, with the core
            business of airline representation for passenger & cargo and other
            allied businesses. Besides servicing the travel trade industry all
            through these years, the Founder Chairman, Mr H K Vithalani & the
            Group have been involved in philanthropic activities since four
            decades. Focus has been education, healthcare, environment,
            inclusion with special focus on women & girls. They have done
            several projects with Shivanand Mission at Virnagar. First was to
            construct a girls school BHAKTI SADAN in 1991 for young girls from
            neighbouring villages. Second was to construct and set up a hostel
            for boarding & lodging hostel for girls in 1996 – called Dayaben
            Karsandas Vithalani and also donated to set up a complete Eye Ward
            under the name of Karsandas Raghavjee Vithalani at the 400 bed
            hospital on campus of the Shivanand Mission. Free medical check ups
            and cataract surgeries take place here for residents of 100
            neighbouring villages by highly qualified doctors. Chaiman & Group
            Companies are also affiliated with many works of social service and
            charity. Notable among them are some of the charities &
            organisations the Group is associated with on regular basis:
          </Typography>
          <br />
          <Typography style={{ textAlign: "justify" }}>
            <h3
              style={{
                fontSize: "30px",
                fontWeight: "bold",
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
        <Grid sx={{ flexDirection: { xs: "column", lg: "row" }, marginTop: 2 }}>
          <Box
            sx={{
              flexDirection: { xs: "column", lg: "row" },
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Grid>
              <img
                src="https://www.faa.gov/sites/faa.gov/files/images/ato/by-the-numbers/flights-handled.jpg"
                style={{ height: 300, width: "100%" }}
              />
            </Grid>
            <Grid sx={{ marginTop: { xs: 3, lg: 0 } }}>
              <img
                src="https://www.faa.gov/sites/faa.gov/files/images/ato/by-the-numbers/avg-flights.jpg"
                style={{ height: 300, width: "100%" }}
              />
            </Grid>
          </Box>
          <Box
            sx={{
              flexDirection: { xs: "column", lg: "row" },
              display: "flex",
              justifyContent: "space-around",
              marginTop: 3,
            }}
          >
            <Grid>
              <img
                src="https://www.faa.gov/sites/faa.gov/files/images/ato/by-the-numbers/sched-pax-flights.jpg"
                style={{ height: 300, width: "100%" }}
              />
            </Grid>
            <Grid sx={{ marginTop: { xs: 3, lg: 0 } }}>
              <img
                src="https://www.faa.gov/sites/faa.gov/files/images/ato/by-the-numbers/peak-ops.jpg"
                style={{ height: 300, width: "100%" }}
              />
            </Grid>
          </Box>
          <Box
            sx={{
              flexDirection: { xs: "column", lg: "row" },
              display: "flex",
              justifyContent: "space-around",
              marginTop: 3,
            }}
          >
            <Grid>
              <img
                src="https://www.faa.gov/sites/faa.gov/files/images/ato/by-the-numbers/controllers.jpg"
                style={{ height: 300, width: "100%" }}
              />
            </Grid>
            <Grid sx={{ marginTop: { xs: 3, lg: 0 } }}>
              <img
                src="https://www.faa.gov/sites/faa.gov/files/images/ato/by-the-numbers/ga.jpg"
                style={{ height: 300, width: "100%" }}
              />
            </Grid>
          </Box>
        </Grid>
      </Container>

      <div style={{ marginTop: 15 }}>
        <Footer />
      </div>
    </div>
  );
};

export default AboutLogo;
