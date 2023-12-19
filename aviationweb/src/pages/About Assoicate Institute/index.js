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
import {React,useState} from "react";
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
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";

const Associate = () => {
  const logo = require("../../Images/logo3.png");


  const [isHovered, setIsHovered] = useState(false);

const handleHover = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

  return (
    <>
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
                About Associate Institute
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <Grid>
        <Container style={{ marginTop: 20 }}>
          <Row>
            <Typography
              style={{
                fontSize: "15px",
                fontWeight:"bold",
                textAlign: "center",
                textAlign: "justify",
                marginTop: 10,
                color: "GrayText",
              }}
            >
              WELCOME TO ACADEMY OF AVIATION'S INTERNATIONAL VISA CONTACT PAGE
              FOR ASSOCIATE STUDY-ABROAD COMMERCIAL PILOT STUDENTS IN
            </Typography>
          </Row>
        </Container>
      </Grid>

      <Container>
        <Divider style={{ backgroundColor: "gray" }} />
      </Container>

      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
          Comprehensive solutions to elevate your aviation experience
        </Typography>
      </div>

      <div style={{ marginTop: "50px" }}>
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
              <Typography style={{ marginTop: 10, textAlign: "justify" }}>
                Global Aviation is a comprehensive full-service provider for an
                international airline, offering a range of services that include
                reservations and ticketing, revenue projections, optimal route
                recommendations, and government approvals. With the right
                partner, Global Aviation can be a great way to provide the best
                customer experience and represent their brand on a global scale.
              </Typography>

              <Typography style={{ marginTop: 10, textAlign: "justify" }}>
                India’s public aviation industry is a promising sector due to
                rising demand from the top class, high disposable income, good
                census and rapid economic growth. It hopes to become the third
                largest airline market. The industry is following a continuous
                trend, paving the way for a new wave of growth and expansion
                with a focus on low cost carriers, modern airports, foreign
                direct investment and regional connectivity.
              </Typography>
            </Col>

            <Col style={{ marginTop: 20 }}>
              <Image
                src="https://aviationweek.com/sites/default/files/styles/crop_freeform/public/2020-07/ups_747_8_photo_source_boeing.jpg?itok=9kYhLCyB"
                style={{ height: "auto", width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>


      <Container style={{ marginTop: "60px" }}>
        <Row>
          <Col>
            <Card
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
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
                // height="80"
                image="https://wallpapercave.com/dwp2x/wp12488409.jpg"
                alt="green iguana"
                style={{ height: "auto" }}
              />
            </Card>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Airport Management
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
                // height="80"
                image="https://i.dailymail.co.uk/i/pix/2015/12/24/23/2F99C0B000000578-0-image-a-10_1451000910228.jpg"
                alt="green iguana"
                style={{ height: "170px" }}
              />
            </Card>
            <Typography
              // gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Aviation Safety
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
                // height="80"
                image="https://img.freepik.com/premium-photo/airplane-landing-airport-rays-setting-sun-with-copyspace_766625-11904.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=ais"
                alt="green iguana"
                style={{ height: "auto" }}
              />
            </Card>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Aviation Security
            </Typography>
          </Col>

          <Col>
            <Card
              sx={{
                maxWidth: 300,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)", // You can adjust the scale factor
                },
              }}
            >
              <CardMedia
                component="img"
                // height="50"
                image="https://img.freepik.com/free-photo/travel-background-with-toy-plane-map_23-2147828038.jpg?w=900&t=st=1701519746~exp=1701520346~hmac=0234cf19973cf555c89f6ebf3e3192420e85ca739f2d0b6e27a687ae0a0bb026"
                alt="green iguana"
                style={{ height: "auto" }}
              />
            </Card>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              International Training
            </Typography>
          </Col>
        </Row>
        <Row style={{ marginTop: 5 }}>
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
                // height="80"
                image="https://live.staticflickr.com/6008/5997998007_4cd4389200_z.jpg"
                alt="green iguana"
                style={{ height: "auto" }}
              />
            </Card>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Management Program
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
                // height="80"
                image="https://assets.website-files.com/5e1eec0d24ceb80e3be0beb0/5e3ab2079daa818148bd8682_john-young-original-aviation-painting-for-sale.jpg"
                alt="green iguana"
                style={{ height: "auto" }}
              />
            </Card>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Air Traffic Control
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
                // height="80"
                image="https://th.bing.com/th/id/R.092534598919c18e24783642bb332c7d?rik=umI2rBOA23d1Ag&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2014%2f05%2fairplane-wallpaper-1.jpg&ehk=L2daLCtEHRtyyWTdrRpgn9tudRO2bVoXXoo%2b0wbHpxs%3d&risl=&pid=ImgRaw&r=0"
                alt="green iguana"
                style={{ height: "auto" }}
              />
            </Card>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Passenger Rights
            </Typography>
          </Col>

          <Col>
            <Card
              sx={{
                maxWidth: 300,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.05)", // You can adjust the scale factor
                },
              }}
            >
              <CardMedia
                component="img"
                // height="50"
                image="https://c2.staticflickr.com/4/3311/4595342964_a3a8525ca8_z.jpg"
                alt="green iguana"
                style={{ height: "auto" }}
              />
            </Card>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ textAlign: "center", marginTop: 10 }}
            >
              Air Acts 
            </Typography>
          </Col>
        </Row>
      </Container>     

      <div style={{ marginTop: "50px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Associate;