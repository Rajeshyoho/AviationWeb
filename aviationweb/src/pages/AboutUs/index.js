import { Box, Divider, Grid, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Marquee from "react-fast-marquee";
import Footer from "../../components/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const AboutUs = () => {
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
            <Navbar.Brand href="#home">About US</Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Grid>

      {/* <Marquee
        width="100%"
        direction="left"
        height="100px"
        style={{ paddingTop: 30, color: "red", fontWeight: "bold" }}
      >
        * Aviation includes the activities surrounding mechanical flight and the
        aircraft industry.
      </Marquee> */}

      <Grid style={{ padding: 5}}>
        <Breadcrumb style={{backgroundColor: "#FFFFFF",textDecoration:"none"}}>
          <Breadcrumb.Item href="Home" >Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">About ASDHEC</Breadcrumb.Item>
        </Breadcrumb>
      </Grid>

      <div>
        <Container>
          <Row xs={1} md={2} style={{ marginTop: 30 }}>
            <Grid item xs={4} md={6}>
              {/* <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 20,
                  fontFamily: "initial",
                }}
              >
                About Us
              </Typography> */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 23,
                  fontFamily: "initial",
                }}
              >
                Aviation Skill Development And Higher Educational Council
              </Typography>

              <Divider
                style={{
                  marginTop: 20,
                  backgroundColor: "#0e2246",
                }}
              />

              <div
                style={{
                  display: "flex",
                  paddingTop: 20,
                  textAlign: "center",
                  backgroundPosition: "center",
                }}
              >
                <Image
                  src="https://www.lcc.edu/academics/areas-of-study/computers-engineering-technology/images/aviation-gallery/full-8.jpg"
                  // style={{ objectFit: "cover" }}
                  alt="Aviation"
                  fluid
                />
              </div>
            </Grid>

            <Col>
              <Typography style={{ textAlign: "justify" }}>
                <Typography>
                  Aviation includes the activities surrounding mechanical flight
                  and the aircraft industry. Aircraft includes fixed-wing and
                  rotary-wing types, morphable wings, wing-less lifting bodies,
                  as well as lighter-than-air craft such as hot air balloons and
                  airships. Aviation began in the 18th century with the
                  development of the hot air balloon, an apparatus capable of
                  atmospheric displacement through buoyancy. Some of the most
                  significant advancements in aviation technology came with the
                  controlled gliding flying of Otto Lilienthal in 1896; then a
                  large step in significance came with the construction of the
                  first powered airplane by the Wright brothers in the early
                  1900s. Since that time, aviation has been technologically
                  revolutionized by the introduction of the jet which permitted
                  a major form of transport throughout the world.
                </Typography>
                <br />
                <Typography>
                  For Native Americans, music is more than just sound, and each
                  dance move has meaning. Art in every form whether totem poles,
                  pottery, or literature—is a fact of life, ingrained into the
                  culture. Many Native American languages even lack a term
                  meaning “art.” Instead, great works would be described as
                  “effective,” or “well-done.” And the idea of an artist was of
                  a person who was simply better at a job than was another. As
                  Native American Heritage Month ends, take a moment to explore
                  indigenous art. The Ministry of Civil Aviation administers the
                  Aircraft Act and the Aircraft Rules, and various other
                  aviation-related legislations. It formulates national policies
                  and programmes and develops and regulates the Indian Civil
                  Aviation sector. It exercises administrative control over
                  entities such as the Directorate General of Civil Aviation
                  (DGCA), the Bureau of Civil Aviation Security (BCAS) and the
                  Airports Authority of India (AAI). It has the authority to
                  enter into air service agreements with other countries.
                </Typography>
                <br />
                {/* <Typography>
                The scheduled and non-scheduled air transport operators need a
                no-objection certificate from the Directorate General of Civil
                Aviation (DGCA) to import aircraft. The validity of this
                certificate is three years. Then, the operators need permission
                from the Ministry of Civil Aviation to import or acquire the
                aircraft; this permission is valid for one year. For private
                import, one also requires an import license from the Directorate
                of Foreign Trade. An eighteen years old aircraft cannot be
                imported for passenger operations. A temporary registration
                certificate is granted for bringing the aircraft by air.
                </Typography> */}
              </Typography>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#e6e6e6", marginTop: 30 }}>
        <Container>
          <Row xs={1} md={2}>
            <Col style={{ marginTop: 20 }}>
              <Box sx={{ padding: 1 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 30,
                    fontFamily: "initial",
                    textAlign: "justify",
                  }}
                >
                  Awards & Recognition
                </Typography>

                <Typography style={{ marginTop: 10, textAlign: "justify" }}>
                  » Lifetime Achievement Award by Air Cargo Club of Bombay for
                  overall contribution to Industry, Feb 2020.
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  » Rashtriya Udyog Ratan Award in Delhi for contribution to
                  Aviation Industry, Feb 2021.
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  » General Sales Agent of the Year International for excellence
                  in Air Cargo, 5 times consecutively from 2012-2020, by Stat
                  Trade Times Integrated Leadership.
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  » Chairman of Plastics Export Promotion Council of India
                  (PLEXCONCIL).
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  » Nati Ratna Puraskar by Shree Ghoghari Lohana Mahajan –
                  Mumbai, Nov 2022.
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  » Recognized for distinguished services & contribution to
                  ACAAI Convention in Istanbul.
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  » Numerous awards from customer Airlines for outstanding
                  commitment & contribution.
                </Typography>
                <Typography sx={{ textAlign: "justify" }}>
                  » His enduring belief in the profound impact of human capital
                  has catalyzed enduring international alliances.
                </Typography>
              </Box>
            </Col>

            <Col>
              <div
                style={{
                  display: "flex",
                  // paddingTop: 20,
                  textAlign: "center",
                  backgroundPosition: "center",
                }}
              >
                <Image
                  src="https://keystoneacademic-res.cloudinary.com/image/upload/element/80/80673_USAviation2.jpg"
                  // style={{ objectFit: "cover" }}
                  alt="Aviation"
                  fluid
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Grid style={{ paddingTop: 20 }}>
        <Footer />
      </Grid>
    </>
  );
};

export default AboutUs;
