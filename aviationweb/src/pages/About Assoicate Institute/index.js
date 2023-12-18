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
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

const Associate = () => {
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
    backgroundImage:
      'url("https://i2.wp.com/pilotstories.net/wp-content/uploads/2018/01/cockpit2-3-01.jpeg?resize=980%2C654&ssl=1")',
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
        About Associate Institute
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
          About Associate Institute
        </Link>
      </Breadcrumbs>
    </div>
  </Col>
</Row>

      <Grid>
        <Container style={{marginTop:20}}>
          <Row>
            <Typography
              style={{
                fontSize: "1.125rem",
                textAlign: "center",
                textAlign: "justify",
                marginTop: 10,
                color:"GrayText",
               
              }}
            >
              WELCOME TO ACADEMY OF AVIATION'S INTERNATIONAL VISA CONTACT PAGE
              FOR ASSOCIATE STUDY-ABROAD COMMERCIAL PILOT STUDENTS
            </Typography>
          </Row>
        </Container>
      </Grid>

      <Container>
        <Divider style={{ backgroundColor: "gray" }} />
      </Container>

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Typography
          style={{  fontSize: 30, fontWeight: "bold" }}
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

                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Passenger Airlines GSSA
              </Typography>
              <Typography style={{ marginTop: 20,textAlign:"justify" }}>
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

      {/* <div style={{marginTop:20}}>
      <Image src="https://wallpaperaccess.com/full/58346.jpg"
      height={80}
      alt="Avitation"
      fluid/>
    </div> */}

      <div style={{ marginTop: 30 }}>
        <Footer />
      </div>
    </div>
  );
};

export default Associate;
