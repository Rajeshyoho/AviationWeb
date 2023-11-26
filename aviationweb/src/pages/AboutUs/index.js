import React from "react";
import { Image } from "react-bootstrap";
import { Grid, Box, Card, Typography } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Marquee from "react-fast-marquee";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material/styles";
import Footer from "../../components/Footer";

const AboutUs = () => {
  const logo = require("../../Images/logo3.png");

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        sx={{
          background: " #ddeef7f5",
        }}
      >
        <Grid sx={{ display: "flex", my: 1 }}>
          <Image className="img-fluid" style={{ height: 130 }} src={logo} />
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
      </Grid>

      <Marquee
        width="100%"
        direction="left"
        height="100px"
        style={{ paddingTop: 30, color: "red", fontWeight: "bold" }}
      >
        * Aviation includes the activities surrounding mechanical flight and the
        aircraft industry.
      </Marquee>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Image
          src="https://www.lcc.edu/academics/areas-of-study/computers-engineering-technology/images/aviation-gallery/full-8.jpg"
          width="85%"
        />
      </div>

      <div style={{ paddingTop: 30 }}>
        <Container>
          <Row style={{ paddingTop: 20 }}>
            <Col xs={4} md={3}>
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  height: 224,
                }}
              >
                <Tabs
                  orientation="vertical"
                  // variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  // aria-label="Vertical tabs example"

                  sx={{ height: 300 }}
                >
                  <Tab label="About ASDHEC" {...a11yProps(0)} />
                  <Tab label="Vision & Mission" {...a11yProps(1)} />
                  <Tab label="Acts & Status" {...a11yProps(2)} />
                  <Tab label="ASDHEC Logo" {...a11yProps(3)} />
                  <Tab label="Associate Institute/Colleges" {...a11yProps(4)} />
                  <Tab label="Training Patners" {...a11yProps(5)} />
                </Tabs>
              </Box>
            </Col>
            <Col xs={12} md={8}>
              <TabPanel value={value} index={0}>
                {/* <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "initial",
                  }}
                >
                  About Us
                </Typography> */}
                Aviation includes the activities surrounding mechanical flight
                and the aircraft industry. Aircraft includes fixed-wing and
                rotary-wing types, morphable wings, wing-less lifting bodies, as
                well as lighter-than-air craft such as hot air balloons and
                airships. Aviation began in the 18th century with the
                development of the hot air balloon, an apparatus capable of
                atmospheric displacement through buoyancy. Some of the most
                significant advancements in aviation technology came with the
                controlled gliding flying of Otto Lilienthal in 1896; then a
                large step in significance came with the construction of the
                first powered airplane by the Wright brothers in the early
                1900s. Since that time, aviation has been technologically
                revolutionized by the introduction of the jet which permitted a
                major form of transport throughout the world.
                <br />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "initial",
                  }}
                >
                  Early beginnings
                </Typography>
                There are early legends of human flight such as the stories of
                Icarus in Greek myth, Jamshid and Shah Kay Kāvus in Persian
                myth, and the flying automaton of Archytas of Tarentum (428–347
                BC).Later, somewhat more credible claims of short-distance human
                flights appear, such as the winged flights of Abbas ibn Firnas
                (810–887, recorded in the 17th century), Eilmer of Malmesbury
                (11th century, recorded in the 12th century) and the hot-air
                Passarola of Bartholomeu Lourenço de Gusmão (1685–1724).
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 30,
                    fontFamily: "initial",
                  }}
                >
                  Vision & Mission
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    paddingTop: 2,
                    fontSize: 20,
                    fontFamily: "initial",
                  }}
                >
                  Vision :
                </Typography>
                Vision: Achieve the sustainable growth of the global civil
                aviation system.
                <Typography
                  sx={{
                    fontWeight: "bold",
                    paddingTop: 2,
                    fontSize: 20,
                    fontFamily: "initial",
                  }}
                >
                  {" "}
                  Mission:{" "}
                </Typography>
                To serve as the global forum of States for international civil
                aviation. ICAO develops policies and Standards, undertakes
                compliance audits, performs studies and analyses, provides
                assistance and builds aviation capacity through many other
                activities and the cooperation of its Member States and
                stakeholders.
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 30,
                    fontFamily: "initial",
                  }}
                >
                  International Law
                </Typography>
                India has ratified the following international conventions:
                <br /> (1) the Convention for the Unification of Certain Rules
                Relating to International Carriage by Air;
                <br />
                (2) the Convention on International Civil Aviation signed in
                Chicago on December 7, 1944; <br />
                (3) the Convention on the International Recognition of Rights in
                Aircraft;
                <br />
                (4) the Convention on Damage Caused by Foreign Aircraft to Third
                Parties on the Surface; <br />
                (5) the Convention on Offences and Certain Other Acts Committed
                on Board Aircraft;
                <br />
                (6) the Convention for the Suppression of Unlawful Seizure of
                Aircraft; <br />
                (7) the Convention on the Suppression of Unlawful Acts against
                the Safety of Civil Aviation; <br />
                (8) the Convention for the Unification of Certain Rules for
                International Carriage by Air; and
                <br />
                (9) the Convention on International Interests in Mobile
                Equipment.
              </TabPanel>
              <TabPanel value={value} index={3}>
                ASDHEC air transport service, other than a scheduled air
                transport service, can be operated by any undertaking except
                with the special permission of the Central Government or under a
                non-scheduled operator’s permit granted by the Central
                Government. Air charter operations are regulated for passenger
                services which only apply to twin-engine aeroplanes with seating
                capacity of not more than nine seats, single-engine aeroplanes
                and single-piston engine aeroplanes. Cargo operations can only
                be undertaken by non-scheduled air transport operators which
                operate multi-engine fixed-wing aircraft (freighter version) and
                single or multi-engine helicopters. The DGCA also regulates the
                operation of tourist charter flights to and from India as part
                of an Inclusive Tour Package under the Aeronautical Information
                Circular dated February 6, 2020.
              </TabPanel>
              <TabPanel value={value} index={4}>
                The National Flying Training Institute (NFTI) is a premier
                aerospace training institution in India that offers pilot
                training courses. NFTI is located in Gondia, Maharashtra, and
                was established in 2008 by the Indian government through the
                Ministry of Civil Aviation. The Private Pilot License (PPL),
                Commercial Pilot License (CPL), and Airline Transport Pilot
                License (ATPL) courses are only a few of the pilot training
                programmes offered by NFTI. The academy also provides other
                specialist training, such as courses for Instrument Rating,
                Multi-Engine Rating, and Flight Instructor Rating. The
                Directorate General of Civil Aviation (DGCA), India’s civil
                aviation regulatory agency, has authorized both the PPL and CPL
                programmes.
              </TabPanel>
              <TabPanel value={value} index={5}>
                Independent training institutes that are authorized to sell
                and/or teach IATA Training courses in the fields of Airline
                Management, Quality and Operations, Airports, Cargo and
                Logistics, Ground Operations, Management and Leadership, Safety,
                Security, Travel and Tourism.
                <br />
                Independent aviation training organizations that offer a
                selection of IATA classroom courses and diploma programs
                delivered by IATA instructors with IATA course material.
                Participants enjoy a similar learning experience to that of an
                IATA Training Center, only closer to home.
                <br />
                IATA offers a number of industry-specific academic partnership
                programs for working professionals. IATA’s academic programs
                provide the in-depth, aviation business-centric knowledge to
                enable you to be a driving force in any organization.
                <br />
                The International Air Transport Association’s (IATA) –
                Competency-based Training and Assessment Centers program (CBTA
                Centers) is the global accreditation authority on recognizing
                organizations for compliance with the training provisions for
                dangerous goods under a competency-based training and assessment
                approach. Training organizations will be accredited by the CBTA
                Center to provide dangerous goods training under
                competency-based training and assessment.
              </TabPanel>
            </Col>
          </Row>
        </Container>

        {/* <Grid item sx={{ padding: 0.5 }}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      border: "1px dashed grey",
                      padding: "15px 10px",
                      textAlign: "start",
                      ":hover": {
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        ":hover": {
                          color: "rgb(98 198 216)",
                        },
                        fontWeight: "bold",
                      }}
                    >
                      About ASDHEC
                    </Typography>
                  </Card>
                </a>
              </Grid>
              <Grid item sx={{ padding: 0.5 }}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      border: "1px dashed grey",
                      padding: "15px 10px",
                      textAlign: "start",
                      ":hover": {
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        ":hover": {
                          color: "rgb(98 198 216)",
                        },
                        fontWeight: "bold",
                      }}
                    >
                      Vision & Mission
                    </Typography>
                  </Card>
                </a>
              </Grid>
              <Grid item sx={{ padding: 0.5 }}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      border: "1px dashed grey",
                      padding: "15px 10px",
                      textAlign: "start",
                      ":hover": {
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        ":hover": {
                          color: "rgb(98 198 216)",
                        },
                        fontWeight: "bold",
                      }}
                    >
                      Acts & Status
                    </Typography>
                  </Card>
                </a>
              </Grid>
              <Grid item sx={{ padding: 0.5 }}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      border: "1px dashed grey",
                      padding: "15px 10px",
                      textAlign: "start",
                      ":hover": {
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        ":hover": {
                          color: "rgb(98 198 216)",
                        },
                        fontWeight: "bold",
                      }}
                    >
                      ASDHEC Logo
                    </Typography>
                  </Card>
                </a>
              </Grid>
              <Grid item sx={{ padding: 0.5 }}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      border: "1px dashed grey",
                      padding: "15px 10px",
                      textAlign: "start",
                      ":hover": {
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        ":hover": {
                          color: "rgb(98 198 216)",
                        },
                        fontWeight: "bold",
                      }}
                    >
                      Associate Institute/Colleges
                    </Typography>
                  </Card>
                </a>
              </Grid>
              <Grid item sx={{ padding: 0.5 }}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      border: "1px dashed grey",
                      padding: "15px 10px",
                      textAlign: "start",
                      ":hover": {
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        ":hover": {
                          color: "rgb(98 198 216)",
                        },
                        fontWeight: "bold",
                      }}
                    >
                      Training Patners
                    </Typography>
                  </Card>
                </a>
              </Grid> */}

       
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
