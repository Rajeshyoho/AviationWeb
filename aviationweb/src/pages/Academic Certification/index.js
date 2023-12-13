import { Grid, Typography, Box, Divider, Card } from "@mui/material";
import { React } from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";

const Certificate = () => {
  const logo = require("../../Images/logo3.png");

  const commonStyles = {
    m: 1,
    borderColor: "text.primary",
    width: "100%",
    height: "100%",
  };

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
 <NavBar/>
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

      <Grid>
        <img
          src="https://visionfly.in/assets/images/resources/1.jpg"
          width="100%"
        />
      </Grid>

      <div>
        <Container>
          <Row style={{ marginTop: 20 }}>
            <Col>
              <Typography
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  fontFamily: "initial",
                  marginTop: 20,
                }}
              >
                Certificate Course in Aviation Management
              </Typography>
              <p style={{ marginTop: 15 }}>
                The Certificate Course in Aviation Management- Ground/Cabin Crew
                provides students with the skills and information needed to
                perform the duties of an Executive/Manager in the aviation
                industry. Anyone who wants to enhance their industry knowledge
                can apply for this course. The topics covered in this course are
                aviation, ground handling aviation terms, air transport safety,
                aircraft familiarization, fire fighting.
              </p>
              <br />
              <p>
                Aviation Certificate Courses give specialized knowledge
                essential to certain areas of the aviation business. Individuals
                can develop their professions in the aviation business by taking
                certificate courses. Aviation Certificate Courses are suitable
                for graduates, Junior-level managers in aviation, managers
                entering the aviation industry, and aviation professionals. It
                takes a few months or a year to complete.
              </p>
              <br />
              <Typography style={{ fontFamily: "initial", fontWeight: "bold" }}>
                PPL Conditions
                <Divider style={{ backgroundColor: "gray" }} />
              </Typography>
              <ul style={{ marginTop: 10, marginLeft: 12 }}>
                <li>Cannot receive any type of compensation for flights</li>
                <li>Single engine / non-high performance aircraft only</li>
                <li>Day flying only in good weather (VFR) conditions</li>
              </ul>

              <br />
              <Typography style={{ fontFamily: "initial", fontWeight: "bold" }}>
                Admission Requirements
                <Divider style={{ backgroundColor: "gray" }} />
              </Typography>
              <ul style={{ marginTop: 10, marginLeft: 12 }}>
                <li>Minimum 14 years of age</li>
                <li>Valid Category 3 Aviation Medical**</li>
                <li>Language Proficiency Assessment</li>
                <li>Valid Passport</li>
              </ul>

              <p>
                The TOTAL ESTIMATE is based on flight training being conducted
                in a Cessna 152 to meet Transport Canada minimum experience
                requirements of 45 hours of flight training. Extra hours may be
                required to meet Transport Canada flight test standards. The
                AVERAGE flight time to obtain a PPL in British Columbia is 60
                hours.
              </p>
            </Col>

            <Col>
              <Grid>
                <Box
                  variant="outlined"
                  border={1}
                  sx={{
                    ...commonStyles,
                    border: "2px",
                    borderColor: "black",
                    padding: 2,
                    maskBorderOutset: 2,
                  }}
                >
                  <Card variant="outlined">
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ padding: 4 }}>
                        <img
                          src="https://thewinstonegroup.lk/ace/wp-content/uploads/2023/03/cropped-new-ace-logo.png"
                          style={{ height: 100 }}
                          alt=""
                        />
                      </Box>
                      <Box sx={{ padding: 4 }}>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Indian_Academy_of_Sciences_Logo.png/220px-Indian_Academy_of_Sciences_Logo.png"
                          style={{ height: 120 }}
                          alt=""
                        />
                      </Box>
                      <Box sx={{ padding: 4 }}>
                        <img
                          src="https://www.presscouncil.nic.in/img/pcilogonew.png"
                          style={{ height: 100 }}
                          alt=""
                        />
                      </Box>
                    </Grid>

                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Grid>
                        <Box>
                          <Typography
                            variant="h6"
                            color="brown"
                            style={{ fontFamily: "Pacifico, cursive" }}
                          >
                            E & ICT Academy , IIT Kanpur
                          </Typography>
                          <Typography variant="h4" sx={{ padding: 2 }}>
                            (A joint initiative of Meity % IIT Kanpur)
                          </Typography>
                        </Box>

                        <Box sx={{ marginTop: 3 }}>
                          <Typography variant="h5" color="brown">
                            Certificate Courses
                          </Typography>
                        </Box>
                        <Box sx={{ alignItems: "center" }}>
                          <Typography variant="h5" sx={{ marginTop: 2 }}>
                            This is to certify that
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              marginTop: 1,
                              alignItems: "center",
                              textAlign: "center",
                            }}
                          >
                            <Typography variant="h5">Dr./ Mr./ Ms. </Typography>
                            <Typography
                              variant="h4"
                              style={{ fontFamily: "initial" }}
                            >
                              {" "}
                              ARUN MOHAN{" "}
                            </Typography>
                          </Box>
                          <Typography variant="h5" sx={{ marginTop: 1 }}>
                            has successfully completed the certification course
                            on{" "}
                          </Typography>
                          <Typography variant="h6" sx={{ marginTop: 1 }}>
                            Professional Certificate Course in AI and Machine
                            Learning
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                      <Grid
                        lg={6}
                        xs={12}
                        sx={{ padding: 4, alignItems: "center" }}
                      >
                        <Box>
                          <img
                            src="https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-bangla-mobile-code-0.png"
                            style={{ width: 200, height: 180 }}
                            alt=""
                          />
                        </Box>
                        <Box
                          sx={{ display: "flex", marginTop: 1, marginLeft: 2 }}
                        >
                          <Typography variant="h6">Date of issue : </Typography>
                          <Typography style={{ marginTop: 6, marginLeft: 3 }}>
                            {" "}
                            15-06-2023
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid
                        lg={6}
                        xs={12}
                        sx={{
                          padding: 4,
                          alignItems: "center",
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography sx={{ fontStyle: "italic" }} variant="h6">
                          Arun Mohan
                        </Typography>
                        <br />
                        <Typography variant="h6">Prof.B.V.Phani</Typography>
                        <Divider sx={{ borderColor: "black" }} />
                        <Typography variant="h6">
                          Chief Investigator E & ICT Academy, IIT Kanpur
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Box>
              </Grid>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Certificate;
