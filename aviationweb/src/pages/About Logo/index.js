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

      <Grid style={{ textAlign: "center" }}>
        <h1>CSR</h1>
      </Grid>

      <Grid>
        <Container>
          <Typography>
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
          <Typography>
            <h3>Best Pilot Training Institutes in the World 2023</h3>
            <p>
              While there are many good flying clubs in India but these days
              there is a growing trend of people opting to complete their flying
              and gain their licenses from abroad. Captain U.S. Tiwari, a senior
              pilot of Air India (narrow-body) promptly confirmed this by
              saying, “Enrolling into a flying school abroad can prove to be an
              expensive affair but young aspiring pilots prefer it as it is a
              quicker option to complete their flying hours”.
            </p>
          </Typography>
        </Container>
      </Grid>

      {/* <div>
        <Container fluid >
          <Row xs={1} md={2}>
            <Col xs={6}>
              <Image src="https://www.faa.gov/sites/faa.gov/files/images/ato/by-the-numbers/flights-handled.jpg" />
            </Col>

            <Col xs={6}>
              <Image src="https://www.faa.gov/sites/faa.gov/files/images/ato/by-the-numbers/avg-flights.jpg" />
            </Col>
          </Row>
        </Container>
      </div> */}

      <Container>
        <Grid sx={{ flexDirection: { xs: "column", lg: "row" } }}>
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

      <div
        style={{
          marginTop: 30,
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "justify",
        }}
      >
        <Typography>
          <h2> Aviation Testimonial</h2>
          <Divider style={{ backgroundColor: "gray" }} />
        </Typography>
      </div>
      <div>
        <Container style={{ backgroundColor: "#c7d4e3", marginTop:10 ,borderRadius:5}}>
          <Row>
            <Typography style={{ marginTop: 20 }}>
              <p>
                Montair’s experienced instructors and advanced aircraft were an
                integral part in preparing me for a career as a professional
                pilot. Their drive for perfection equipped me with the
                fundamental skills and attitude required to take on just about
                any job in the aviation industry. The meticulous standards to
                which they maintain their aircraft always gave me peace-of-mind
                knowing that I was safe, while the well-equipped classroom and
                training facilities created an excellent environment in which to
                learn. The camaraderie created by this welcoming environment led
                to relationships and memories that will last a lifetime. I take
                the skills and experience that I gained during my time at
                Montair with me every day I go to work, making me a better and
                safer pilot.
              </p>
              <div style={{display:"flex"}}>
              <img
                src="https://e7.pngegg.com/pngimages/901/285/png-clipart-airplane-computer-icons-avatar-pilot-smiley-airplane-thumbnail.png"
                style={{ borderRadius: 300, height: 50, width: 50 }}
              />
              <p style={{marginTop:14, marginLeft:20}}>
                The New Streamlined Launch and Reentry Licensing Process
                Advisory Circulars and Guidance
              </p>
              </div>
            </Typography>
          </Row>
        </Container>
      </div>

      <div style={{marginTop:10}}>
        <Footer/>
      </div>
    </>
  );
};

export default AboutLogo;
