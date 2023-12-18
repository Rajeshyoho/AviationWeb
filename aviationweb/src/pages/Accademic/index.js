import React from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";

const Accademic = () => {
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
          <Box>
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
       <Grid>
      <Header />
      <NavBar />
      </Grid>


      <Grid>
        <Image
          src="https://th.bing.com/th/id/R.8fbc817ee6377ce8ff5bb8744cb4c329?rik=PrCKPHLkXKNkiw&riu=http%3a%2f%2fwww.gis.sch.sa%2fuserfiles%2fWebPage+Header_Academics_1483169554.jpg&ehk=M8iTnpfpYdRC8Srxhdn4zXO4zlK5yy2YY8wniv1O4QM%3d&risl=&pid=ImgRaw&r=0"
          style={{ width: "100%", height: "40%" }}
        />

        <Container></Container>

        <Container>
          <Row style={{ marginTop: 40, height: 550 }}>
            <Col xs={12} md={6} lg={4}>
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  marginTop: 10,
                }}
              >
                <Divider variant="horizontal"/>
                <Tabs
                  orientation="vertical"
                  // variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  // aria-label="Vertical tabs example"
                >
                  <Tab
                    sx={{
                      border: "1px dashed grey",
                      marginTop: 1,
                      textAlign: "start",
                      ":hover": {
                        boxShadow: 3,
                      },
                    }}
                    label="Home"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{
                      border: "1px dashed grey",
                      marginTop: 1,
                      textAlign: "start",
                      ":hover": {
                        boxShadow: 3,
                      },
                    }}
                    label="About Us"
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={{
                      border: "1px dashed grey",
                      marginTop: 1,
                      textAlign: "start",
                      ":hover": {
                        boxShadow: 3,
                      },
                    }}
                    label="Histroy"
                    {...a11yProps(2)}
                  />
                  {/* <Tab
                  sx={{
                    border: "1px dashed grey",
                    marginTop: 1,
                    textAlign: "start",
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  label="ASDHEC Logo"
                  {...a11yProps(3)}
                />
                <Tab
                  sx={{
                    border: "1px dashed grey",
                    marginTop: 1,
                    textAlign: "start",
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  label="Associate Institute/Colleges"
                  {...a11yProps(4)}
                />
                <Tab
                  sx={{
                    border: "1px dashed grey",
                    marginTop: 1,
                    textAlign: "start",
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  label="Training Patners"
                  {...a11yProps(5)}
                /> */}
                </Tabs>
              </Box>
            </Col>

            <Col xs={12} md={6} lg={8}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 40,
                }}
              >
                Academics
              </Typography>
              <Divider style={{ backgroundColor: "gray" }} />

              <TabPanel value={value} index={0}>
                <Container>
                  <Row>
                    <Col style={{ marginLeft: 20 }}>
                      <Typography style={{ marginTop: 30 }}>
                        <a
                          href="AcademicsCouncil"
                          style={{ textDecoration: "none" }}
                        >
                          Academic Council
                        </a>
                      </Typography>

                      <Typography style={{ marginTop: 30 }}>
                        <a
                          href="Academic Council"
                          style={{ textDecoration: "none" }}
                        >
                          Departments
                        </a>
                      </Typography>

                      <Typography style={{ marginTop: 30 }}>
                        <a
                          href="Academic Council"
                          style={{ textDecoration: "none" }}
                        >
                          Associate Regulations
                        </a>
                      </Typography>

                      <Typography style={{ marginTop: 30 }}>
                        <a
                          href="Academic Council"
                          style={{ textDecoration: "none" }}
                        >
                          Certification courses
                        </a>
                      </Typography>
                    </Col>

                    <Col style={{ marginLeft: 20 }}>
                      <Typography style={{ marginTop: 30 }}>
                        <a
                          href="Academic Council"
                          style={{ textDecoration: "none" }}
                        >
                          Diploma courses
                        </a>
                      </Typography>

                      <Typography style={{ marginTop: 30 }}>
                        <a
                          href="Academic Council"
                          style={{ textDecoration: "none" }}
                        >
                          UG Degress
                        </a>
                      </Typography>

                      <Typography style={{ marginTop: 30 }}>
                        <a
                          href="Academic Council"
                          style={{ textDecoration: "none" }}
                        >
                          PG Degress
                        </a>
                      </Typography>

                      <Typography style={{ marginTop: 30 }}>
                        <a
                          href="Academic Council"
                          style={{ textDecoration: "none" }}
                        >
                          Training programmes
                        </a>
                      </Typography>
                    </Col>
                  </Row>
                </Container>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 2,
                  }}
                >
                  About Us
                </Typography>
                International Aviation Advisory Services, we are a dedicated
                team of experts offering comprehensive advisory services in the
                aviation sector. Renowned as one of the leading advisors in
                civil aviation consulting, we have swiftly made our mark in the
                industry, catering to both domestic and international clients.
                Our clients consistently choose us for our commitment to
                transparency, efficiency, extensive regulatory knowledge, and
                market insights. Our range of services encompasses various
                aspects of aviation: Aviation Consultancy and Advisory: We
                provide expert guidance and advice in all areas of aviation,
                leveraging our deep industry knowledge and experience. Business
                Aircraft Operations with Foreign-Registered Aircraft in India:
                We offer assistance in establishing and managing business
                aircraft operations involving foreign-registered aircraft within
                India. Non-Scheduled Airlines: We help clients to navigate the
                process of starting non-scheduled airlines, enabling them to
                meet regulatory requirements and launch their operations
                successfully. Non-Scheduled Flight Operations: Our team assists
                in setting up non-scheduled flight operations, ensuring
                compliance with regulations, and facilitating smooth operations.
                Obtaining Operating Authorizations for Foreign-Registered
                Aircraft: We support clients in obtaining the necessary
                authorizations for operating foreign-registered aircraft,
                ensuring compliance with all relevant regulations. Scheduled
                Airline and Operations: We provide comprehensive guidance to
                clients interested in starting scheduled airline operations,
                helping them navigate the complexities of the process. Regional
                Airline and Operations: Our expertise extends to assisting
                clients in establishing and operating regional airlines,
                capitalizing on the potential of this market segment. MRO
                (Maintenance, Repair, and Overhaul): We offer guidance and
                support in setting up MRO facilities, ensuring adherence to
                industry standards and regulatory compliance.
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 30,
                    marginTop:2
                  }}
                >
                  International Histroy
                </Typography>
                A brief treatment of aviation follows. For full treatment of
                military aviation, see military aircraft. For civil aviation,
                see airplane; history of flight.
                <br />
                The first objects to fly that carried people were balloons,
                which were pioneered in France by the Montgolfier brothers in
                1783. Some of the basic scientific principles of
                heavier-than-air flight were laid down in England in the early
                19th century by Sir George Cayley. In the 1890s Otto Lilienthal
                of Germany became the first person to make and fly successful
                gliders. The American brothers Wilbur and Orville Wright were
                inspired by Lilienthal and by 1902 had developed a fully
                practical biplane (double-winged) glider that could be
                controlled in every direction. Fitting a small engine and two
                propellers to another biplane, the Wrights on December 17, 1903,
                made the world’s first successful human-carrying engine-powered
                heavier-than-air flight at a site near Kitty Hawk, on the coast
                of North Carolina.
                <br />
                The Wright brothers’ success soon inspired successful aircraft
                designs and flights by others, and World War I (1914–18) further
                accelerated the expansion of aviation. Though initially used for
                aerial reconnaissance, aircraft were soon fitted with machine
                guns to shoot at other aircraft and with bombs to drop on ground
                targets; military aircraft with these types of missions and
                armaments became known, respectively, as fighters and bombers.
                
              </TabPanel>
            </Col>
          </Row>
        </Container>
      </Grid>

      <Grid style={{ paddingTop: 20 }}>
        <Footer />
      </Grid>
    </>
  );
};

export default Accademic;
