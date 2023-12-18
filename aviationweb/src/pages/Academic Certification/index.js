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
import Header from "../../components/Header";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Table from "react-bootstrap/Table";

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
      <Grid>
      <Header />
      <NavBar />
      </Grid>


      <Row
  style={{
    position: "relative",
    backgroundImage:
      'url("https://wallpapercave.com/dwp2x/wp9401221.jpg")',
      backgroundposition: "center",
      backgroundrepeat: "no-repeat",
      backgroundsize: "cover",
    minHeight: "60vh", // Set the height to 100% of the viewport height
    paddingLeft: "40px",
    paddingRight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    width: "100%",objectFit:"cover"
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
       Certification Courses
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
          Academic
        </Link>
        <Link
          underline="none"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          style={{color:"rgba(161,225,229,1)"}}
        >
          Certificate & Courses
        </Link>
      </Breadcrumbs>
    </div>
  </Col>
</Row>

      {/* <Grid>
        <img
          src=""
          width="100%"
        />
      </Grid> */}

      {/* <div>
        <Container>
          <Row style={{ marginTop: 20 }}>
            <Col>
              <Typography
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                Certificate Course in Aviation Management
              </Typography>
              <Typography style={{ marginTop: 15,textAlign:"justify" }}>
                The Certificate Course in Aviation Management- Ground/Cabin Crew
                provides students with the skills and information needed to
                perform the duties of an Executive/Manager in the aviation
                industry. Anyone who wants to enhance their industry knowledge
                can apply for this course. The topics covered in this course are
                aviation, ground handling aviation terms, air transport safety,
                aircraft familiarization, fire fighting.
              </Typography>
              <br />
              <Typography style={{textAlign:"justify"}}>
                Aviation Certificate Courses give specialized knowledge
                essential to certain areas of the aviation business. Individuals
                can develop their professions in the aviation business by taking
                certificate courses. Aviation Certificate Courses are suitable
                for graduates, Junior-level managers in aviation, managers
                entering the aviation industry, and aviation professionals. It
                takes a few months or a year to complete.
              </Typography>
              <br />
              <Typography style={{ fontWeight: "bold" }}>
                PPL Conditions
                <Divider style={{ backgroundColor: "gray" }} />
              </Typography>
              <ul style={{ marginTop: 10, marginLeft: 12 }}>
                <li>Cannot receive any type of compensation for flights</li>
                <li>Single engine / non-high performance aircraft only</li>
                <li>Day flying only in good weather (VFR) conditions</li>
              </ul>

              <br />
              <Typography style={{ fontWeight: "bold" }}>
                Admission Requirements
                <Divider style={{ backgroundColor: "gray" }} />
              </Typography>
              <ul style={{ marginTop: 10, marginLeft: 12 }}>
                <li>Minimum 14 years of age</li>
                <li>Valid Category 3 Aviation Medical**</li>
                <li>Language Proficiency Assessment</li>
                <li>Valid Passport</li>
              </ul>

              <Typography style={{textAlign:"justify"}}>
                The TOTAL ESTIMATE is based on flight training being conducted
                in a Cessna 152 to meet Transport Canada minimum experience
                requirements of 45 hours of flight training. Extra hours may be
                required to meet Transport Canada flight test standards. The
                AVERAGE flight time to obtain a PPL in British Columbia is 60
                hours.
              </Typography>
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
      </div> */}

<div>
      <Container>
        <Row style={{marginTop:"30px",marginBottom:"20px"}}>
          <Col>
            <h2 style={{textAlign:"center"}}><span style={{borderBottom:"3px solid #0e2246",paddingBottom:"2px"}}>ADVANCED VOCATIONAL TRAINING SCHEME(AVTS)</span></h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>
              <span style={{fontWeight:"bold"}}>National Skill training Institute, Chennai</span>
              is one of the premier institutes run by the Directorate General of
              Training (DGT), Minis-try of Skill Development and
              Entrepreneurship, Govt. of India. It was initially set up by the
              Directorate General of Employ-ment and Training (DGE&T), Ministry
              of Employment and Labour, Govt. of India in the year 1963 with the
              main objective of imparting training to the instructor of ITIs in
              the country. Currently there are 33 NSTIs and 3 Extn. centres
              across the country.
            </div>
          </Col>
        </Row>

        <Row style={{marginTop:"30px"}}>
          <Col>
            <h5 style={{fontWeight:"bold"}}>
              ADVANCED VOCATIONAL TRAINING SCHEME(AVTS) -SHORT TERM COURSES
            </h5>
          </Col>
        </Row>

        <Row>
          <ol>
            <li>
              1.Short-term courses of 2-4 weeks duration in engineering areas
              are envisaged / being implemented in NSTIs.
            </li>
            <li>
              2.Special Course duration can be extended up to 12 weeks also.
            </li>
            <li>
              3.Courses on skill upgradation / enhancement can also be arranged
              in basic engineering orientation and foundation in core
              engineering disciplines in viz., Fitting, Carpentry, Plumbing,
              Electrical and Electronics sector.
            </li>
            <li>
              4.The programme will benefit Engineering, ITI, and Polytechnic
              students, as well as industrial personnel, by providing updated
              knowledge, skills, and practice.
            </li>
          </ol>
        </Row>
      </Container>

      <Container style={{marginTop:"30px"}}>
        <div className="text-center" style={{backgroundColor:"#0e2246",display:"flex",justifyContent:"center"}}>
        <thead>
            <tr>
              <th style={{color:"white",paddingTop:"10px",paddingBottom:"10px"}}>ELECTRONIC CONTROLS MAINTENANCE (ECM)</th>
            </tr>
          </thead>
        </div>
  
        <Table className="text-center" striped bordered hover responsive="sm">
       
          <thead >
            <tr >
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Sl. No.</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Name of the Course</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Code</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{fontSize:"14px"}}>
                PROGRAMMING OF PLC USING SIEMENS S7-1200 / S7-400 PLCS. (TIA
                PORTAL)
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{fontSize:"14px"}}>
                SIEMENS PLC - S7 400/1200 - SCADA & HMI PROGRAMMING &
                APPLICATIONS. (TIA PORTAL & WIN CC SCADA).
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td style={{fontSize:"14px"}}> POWER ELECTRONICS & INDUSTRIAL APPLICATIONS. (INCLUDES SOLAR
                BASED INVERTER).</td>
                <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{fontSize:"14px"}}> FIBER OPTIC COMMUNICATION, OFC SPLICING TECHNIQUES &
                INSTALLATION</td>
              <td>23902</td>
              <td>1 week</td>
            </tr>
            <tr>
              <td>5</td>
              <td style={{fontSize:"14px"}}>
                PROGRAMMING OF PLC USING SIEMENS S7-1200 / S7-400 PLCS. (TIA
                PORTAL)
              </td>
              <td>23901</td>
              <td>2 week</td>
            </tr>
            <tr>
              <td>6</td>
              <td style={{fontSize:"14px"}}>
              EMBEDDED SYSTEM PROGRAMMING FOR INDUSTRIAL APPLICATIONS USING
                RASPBERRY PI – 2040 (DUAL CORE).
              </td>
              <td>23905</td>
              <td>5 week</td>
            </tr>
            <tr>
              <td>7</td>
              <td style={{fontSize:"14px"}}>
              INDUSTRIAL AUTOMATION WITH AC/DC DRIVES & PLCS.
              </td>
              <td>23906</td>
              <td>3 week</td>
            </tr>
            <tr>
              <td>8</td>
              <td style={{fontSize:"14px"}}>
              OPERATION AND MAINTENANCE OF DRONES.
              </td>
              <td>23907</td>
              <td>5 week</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container style={{marginTop:"30px"}}>
        <div className="text-center" style={{backgroundColor:"#0e2246",display:"flex",justifyContent:"center"}}>
        <thead>
            <tr>
              <th style={{color:"white",paddingTop:"10px",paddingBottom:"10px"}}>PROCESS CONTROL INSTRUMENTATION</th>
            </tr>
          </thead>
        </div>
  
        <Table className="text-center" striped bordered hover responsive="sm">
       
          <thead >
            <tr >
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Sl. No.</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Name of the Course</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Code</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{fontSize:"14px"}}>
              PROGRAMMING AND APPLICATIONS OF INDUSTRIAL AUTOMATION
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{fontSize:"14px"}}>
              IoT WITH SENSORS AND CONTROLLERS
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td style={{fontSize:"14px"}}>CALIBRATION OF INDUSTRIAL INSTRUMENTS</td>
                <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{fontSize:"14px"}}>NETWORKING AND COMMUNICATIONS WITH HMI/SCADA.</td>
              <td>23902</td>
              <td>1 week</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container style={{marginTop:"30px"}}>
        <div className="text-center" style={{backgroundColor:"#0e2246",display:"flex",justifyContent:"center"}}>
        <thead>
            <tr>
              <th style={{color:"white",paddingTop:"10px",paddingBottom:"10px"}}>MACHINE TOOL MAINTENANCE </th>
            </tr>
          </thead>
        </div>
  
        <Table className="text-center" striped bordered hover responsive="sm">
       
          <thead >
            <tr >
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Sl. No.</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Name of the Course</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Code</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{fontSize:"14px"}}>
              5 'S  MANAGEMENT & TOTAL PRODUCTIVE MAINTENANCE 
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{fontSize:"14px"}}>
              PAINTING TECHNIQUES, DEFECTS & REMEDIES
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td style={{fontSize:"14px"}}>CONDITION MONITORING & FAILURE ANALYSIS OF BEARINGS</td>
                <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{fontSize:"14px"}}>NETWORKING AND COMMUNICATIONS WITH HMI/SCADA.</td>
              <td>23902</td>
              <td>1 week</td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container style={{marginTop:"30px"}}>
        <div className="text-center" style={{backgroundColor:"#0e2246",display:"flex",justifyContent:"center"}}>
        <thead>
            <tr>
              <th style={{color:"white",paddingTop:"10px",paddingBottom:"10px"}}>PRODUCTION TECHNOLOGY</th>
            </tr>
          </thead>
        </div>
  
        <Table className="text-center" striped bordered hover responsive="sm">
       
          <thead >
            <tr >
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Sl. No.</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Name of the Course</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Code</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{fontSize:"14px"}}>
              MANUFACTURING PROCESS & TECHNIQUES IN PRODUCTION TECHNOLOGY 
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td >
              DESIGN & MANUFACTURING OF PRESS TOOLS
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>

      <Container style={{marginTop:"30px"}}>
        <div className="text-center" style={{backgroundColor:"#0e2246",display:"flex",justifyContent:"center"}}>
        <thead>
            <tr>
              <th style={{color:"white",paddingTop:"10px",paddingBottom:"10px"}}>ELECTRONIC CONTROLS MAINTENANCE (ECM)</th>
            </tr>
          </thead>
        </div>
  
        <Table className="text-center" striped bordered hover responsive="sm">
       
          <thead >
            <tr >
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Sl. No.</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Name of the Course</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Code</th>
              <th style={{backgroundColor:"#0e2246",color:"white"}}>Course Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{fontSize:"14px"}}>
                PROGRAMMING OF PLC USING SIEMENS S7-1200 / S7-400 PLCS. (TIA
                PORTAL)
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{fontSize:"14px"}}>
                SIEMENS PLC - S7 400/1200 - SCADA & HMI PROGRAMMING &
                APPLICATIONS. (TIA PORTAL & WIN CC SCADA).
              </td>
              <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td style={{fontSize:"14px"}}> POWER ELECTRONICS & INDUSTRIAL APPLICATIONS. (INCLUDES SOLAR
                BASED INVERTER).</td>
                <td>
              23901
              </td>
              <td>
              1 week
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{fontSize:"14px"}}> FIBER OPTIC COMMUNICATION, OFC SPLICING TECHNIQUES &
                INSTALLATION</td>
              <td>23902</td>
              <td>1 week</td>
            </tr>
            <tr>
              <td>5</td>
              <td style={{fontSize:"14px"}}>
                PROGRAMMING OF PLC USING SIEMENS S7-1200 / S7-400 PLCS. (TIA
                PORTAL)
              </td>
              <td>23901</td>
              <td>2 week</td>
            </tr>
            <tr>
              <td>6</td>
              <td style={{fontSize:"14px"}}>
              EMBEDDED SYSTEM PROGRAMMING FOR INDUSTRIAL APPLICATIONS USING
                RASPBERRY PI – 2040 (DUAL CORE).
              </td>
              <td>23905</td>
              <td>5 week</td>
            </tr>
            <tr>
              <td>7</td>
              <td style={{fontSize:"14px"}}>
              INDUSTRIAL AUTOMATION WITH AC/DC DRIVES & PLCS.
              </td>
              <td>23906</td>
              <td>3 week</td>
            </tr>
            <tr>
              <td>8</td>
              <td style={{fontSize:"14px"}}>
              OPERATION AND MAINTENANCE OF DRONES.
              </td>
              <td>23907</td>
              <td>5 week</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>

      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Certificate;
