import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Marquee from "react-fast-marquee";
import Footer from "../../components/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActsStatus = () => {
  const logo = require("../../Images/logo3.png");

  const cards = [
    {
      image: "https://wallpapercave.com/wp/wp12643242.jpg",
      title: "Card 2",
      description: "Aviation Academy Chennai",
    },
    {
      image: "https://orientflights.com/wp-content/uploads/2023/05/silhouette-air-plane-landing-illuminated-track-sunset-with-beautiful-red-sky-sun-background-scaled.jpg",
      title: "Card 2",
      description: "NSDC and JAIN University",
    },
    {
      image: "https://t4.ftcdn.net/jpg/06/16/64/07/360_F_616640745_BbBfbCgAXE09DkhHmDD1Go32y8AdXhJY.jpg",
      title: "Card 2",
      description: "Advanced Diploma ",
    },
    {
      image: "https://static.stacker.com/s3fs-public/2019-02/shutterstock_109696760.jpg",
      title: "Card 2",
      description: "Air Cargo Management",
    },
    {
      image: "https://getwallpapers.com/wallpaper/full/b/b/7/297843.jpg",
      title: "Card 2",
      description: "Aviation UG Diploma Courses",
    },
    {
      image: "https://i1.wp.com/pilotstories.net/wp-content/uploads/2018/01/IMG_63552.jpg?resize=750%2C500&ssl=1",
      title: "Card 2",
      description: "Diploma in Aviation Security",
    },
    {
      image: "https://s1.1zoom.me/b5050/109/Evening_Sky_Passenger_Airplanes_Asphalt_512661_1920x1080.jpg",
      title: "Card 2",
      description: "Air Hostess/Flight ",
    },

    // Add more cards as needed
  ];

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time between slides in milliseconds
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    // ],
  };

  return (
    <div style={{overflow:"hidden-"}}>
      <Grid>
        <Header />
        <NavBar />
      </Grid>

      <Row
        style={{
          position: "relative",
          backgroundImage: 'url("https://aviationweek.com/sites/default/files/inline-images/AD24-COMMTAKES-2_joepriesaviationDOTnet_1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh", 
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
              Acts & Status
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
                Acts & Status
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <Grid style={{marginTop:30}}>
        <Container
          fluid
          style={{
            background: "linear-gradient(90deg, #9464aa 0%, #f7f6fb 100%)",
            padding: 10,
          }}
        >
          <Row xs={1} md={2}>
            <Col>
              <Image
                src="https://icp.gov.ae/wp-content/uploads/2020/10/%D8%A5%D9%82%D8%A7%D9%85%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D8%B1%D9%82%D8%A9-3-1-scaled.jpg"
                alt="Aviation"
                fluid
              />
            </Col>
            <Col>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 30,

                  marginTop: 4,
                  textAlign: "justify",
                }}
              >
                Acts & Status
              </Typography>
              <p style={{ textAlign: "justify", padding: 2 }}>
                A firm believer in the power of people, Mr. Vithalani fosters a
                familial environment within the company, cultivating a dynamic
                team where relationships flourish and excellence is a way of
                life. His enduring belief in the profound impact of human
                capital has catalyzed enduring international alliances,
                solidifying The Global Group’s global recognition and
                unassailable goodwill. Today, the Global Group, under Mr.
                Vithalani’s exemplary leadership, stands as a testament to
                ethical business practices, unyielding commitment to service
                excellence, and unwavering values. His influence has permeated
                every facet of the organization, establishing it as a revered
                force in the aviation landscape. We are dedicated to fostering
                an integrated vision that prioritizes the symbiotic relationship
                between our esteemed clients and our array of services. Our
                mission is to continually elevate business efficiency through
                collaborative partnerships and tailored solutions. With an
                unwavering commitment to integrity and personalized attention,
                we nurture a culture of enterprise that thrives on strategic
                growth and transparent dealings. Our dedication is directed
                towards providing a seamless customer experience, ensuring that
                each client’s requirements are not just met, but exceeded.
              </p>
            </Col>
          </Row>
        </Container>
      </Grid>

      <Grid style={{marginTop:30}}>
        <Container >
          <Row style={{ display: "flex", justifyContent: "space-between",marginTop:25 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              Regulatory Key Changes
            </Typography>
            {/* <Col xs={12} md={6} style={{ marginTop: 25 }}> */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Independent statutory organisations :
              </Typography>
              <Typography style={{ textAlign: "justify" ,marginTop:10}}>
                The primary domestic legislations governing the aviation
                industry:
                <br />
                <Typography style={{marginTop:10}}>
                (1) The Aircraft Act, 1934 empowers the federal government to
                make rules for regulating the manufacture, sale, use, operation,
                export, import and safety of all civil aircraft.
                <br />
                (2) The Aircraft Rules, 1937 deals with flying conditions,
                registration, airworthiness and licences, among other things.
                <br />
                (3) The Civil Aviation Requirements set out detailed
                requirements and compliance procedures in order to
                <br />
                (4) Fulfil the duties and obligations of India under the Chicago
                Convention relating to international civil aviation;
                <br />
                (5) Standardize and harmonies requirements, taking into account
                the rules and regulations of other regulatory authorities;
                <br />
                (6) Implement the recommendations of the courts of inquiry or
                any other committee constituted by the federal government.
                <br />
                (7) Address issues relating to the import, registration, safety
                and certification of aircraft.
                </Typography>
              </Typography>
            {/* </Col> */}
            {/* <Col xs={12} md={6} style={{ marginTop: 30 }}>
              <Image
                src="https://static.vecteezy.com/system/resources/previews/027/747/050/non_2x/airplane-taking-off-at-dusk-flying-towards-a-beautiful-sunset-generated-by-ai-free-photo.jpg"
                alt="Aviation"
                fluid
              />
            </Col> */}
          </Row>
        </Container>
      </Grid>

      <div style={{marginTop:50}}>
        <Container>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index}>
                <Card style={{ maxWidth: 315,marginRight:"10px" }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ textAlign: "center" }}
                    >
                      {card.text}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </Container>
      </div>

      <Grid style={{ marginTop: 30 }}>
        <Footer />
      </Grid>
    </div>
  );
};

export default ActsStatus;
