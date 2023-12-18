import { Grid, Typography, Box, Divider, Card,Button } from "@mui/material";
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

const PGDegrees = () => {

    const logo = require("../../Images/logo3.png");

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
      'url("https://gmraviationacademy.org/assets/img/445726612.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "60vh", // Set the height to 100% of the viewport height
    paddingLeft: "40px",
    paddingRight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    width: "100%"
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
       PG Degrees
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
          PG Degrees
        </Link>
      </Breadcrumbs>
    </div>
  </Col>
</Row>

    <Container
      style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
    >
      <Row>
        <Col>
          <h5
            style={{
              opacity: 0.8,

              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            AVIATION MANAGEMENT
          </h5>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2
            style={{
              opacity: 0.8,
              fontWeight: "bold",

            }}
          >
            PG PROGRAMS
          </h2>
        </Col>
      </Row>

      <Row>
        <Col
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              borderRadius: "5px",
              border: " 2px solid #e22421",
              width: "89px",
            }}
          ></h2>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col>
          <p
            style={{
              fontSize: "16px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500",
            }}
          >
            In today’s competitive world, every student wants to secure a
            rewarding job after their higher education. After completion of
            their 10th (S.S.L.C), a large number of students are interested to
            join Hotel Management Diploma courses which will help them to get
            placed in a star hotel within a short span of time. Based on the
            caliber and talent of the students, these courses help the student
            secure a suitable job in their career.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p
            style={{
              fontSize: "16px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500",
            }}
          >
            The hotel management diploma courses offered by Chennais Amirta
            IIHM are more valuable in the industry because they are being
            certified directly by renowned universities and autonomous bodies
            approved by the Government of India. Inorder to cater to the needs
            and interests of every aspiring hotel management student, Chennais
            Amirta offers a wide range of courses ranging from one-year
            duration to three-years duration.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p
            style={{
              fontSize: "16px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500",
            }}
          >
            Below are the courses offered by our institution for the current
            academic year admissions.
          </p>
        </Col>
      </Row>
    </Container>

    <div style={{ height: "40px" }}></div>

    <Container style={{ padding: "16px" }}>
  <Card style={{padding:"20px",borderRadius:"10px"}}>
  <Row>
    <Col>
      <h3 style={{
          color:"black",
          opacity:0.5,
          fontWeight: "bold"}}>Paavai Engineering College</h3>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          fontSize:"14px",
          letterSpacing: "0.5px",
          color: "rgb(112 112 109)",
          fontWeight: "500"}}>3 Years</span> <span style={{
          fontSize:"14px",
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Chennai, Bangalore, Hyderabad</span>
    </Col>
  </Row>

<div style={{marginTop:"20px"}}>
  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          color: "black",
          opacity:0.7,
          fontWeight: "600"}}>University</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Alagappa University</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600"}}>Eligibility</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>10 th Regular Schooling</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600",paddingRight:"22px"}}>Course</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Professional Diploma in Hotel Management & Catering Science</span>
    </Col>
  </Row>
  </div>
  </Card>
</Container>

<Container style={{ padding: "16px" }}>
  <Card style={{padding:"20px",borderRadius:"10px"}}>
  <Row>
    <Col>
      <h3 style={{
          color:"black",
          opacity:0.5,
          fontWeight: "bold"}}>Paavai Engineering College</h3>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          fontSize:"14px",
          letterSpacing: "0.5px",
          color: "rgb(112 112 109)",
          fontWeight: "500"}}>3 Years</span> <span style={{
          fontSize:"14px",
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Chennai, Bangalore, Hyderabad</span>
    </Col>
  </Row>

<div style={{marginTop:"20px"}}>
  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          color: "black",
          opacity:0.7,
          fontWeight: "600"}}>University</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Alagappa University</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600"}}>Eligibility</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>10 th Regular Schooling</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600",paddingRight:"22px"}}>Course</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Professional Diploma in Hotel Management & Catering Science</span>
    </Col>
  </Row>
  </div>
  </Card>
</Container>

<Container style={{ padding: "16px" }}>
  <Card style={{padding:"20px",borderRadius:"10px"}}>
  <Row>
    <Col>
      <h3 style={{
          color:"black",
          opacity:0.5,
          fontWeight: "bold"}}>Paavai Engineering College</h3>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          fontSize:"14px",
          letterSpacing: "0.5px",
          color: "rgb(112 112 109)",
          fontWeight: "500"}}>3 Years</span> <span style={{
          fontSize:"14px",
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Chennai, Bangalore, Hyderabad</span>
    </Col>
  </Row>

<div style={{marginTop:"20px"}}>
  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          color: "black",
          opacity:0.7,
          fontWeight: "600"}}>University</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Alagappa University</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600"}}>Eligibility</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>10 th Regular Schooling</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600",paddingRight:"22px"}}>Course</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Professional Diploma in Hotel Management & Catering Science</span>
    </Col>
  </Row>
  </div>
  </Card>
</Container>

<Container style={{ padding: "16px" }}>
  <Card style={{padding:"20px",borderRadius:"10px"}}>
  <Row>
    <Col>
      <h3 style={{
          color:"black",
          opacity:0.5,
          fontWeight: "bold"}}>Paavai Engineering College</h3>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          fontSize:"14px",
          letterSpacing: "0.5px",
          color: "rgb(112 112 109)",
          fontWeight: "500"}}>3 Years</span> <span style={{
          fontSize:"14px",
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Chennai, Bangalore, Hyderabad</span>
    </Col>
  </Row>

<div style={{marginTop:"20px"}}>
  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          color: "black",
          opacity:0.7,
          fontWeight: "600"}}>University</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Alagappa University</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600"}}>Eligibility</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>10 th Regular Schooling</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600",paddingRight:"22px"}}>Course</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Professional Diploma in Hotel Management & Catering Science</span>
    </Col>
  </Row>
  </div>
  </Card>
</Container>

<Container style={{ padding: "16px" }}>
  <Card style={{padding:"20px",borderRadius:"10px"}}>
  <Row>
    <Col>
      <h3 style={{
          color:"black",
          opacity:0.5,
          fontWeight: "bold"}}>Paavai Engineering College</h3>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          fontSize:"14px",
          letterSpacing: "0.5px",
          color: "rgb(112 112 109)",
          fontWeight: "500"}}>3 Years</span> <span style={{
          fontSize:"14px",
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Chennai, Bangalore, Hyderabad</span>
    </Col>
  </Row>

<div style={{marginTop:"20px"}}>
  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          color: "black",
          opacity:0.7,
          fontWeight: "600"}}>University</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Alagappa University</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600"}}>Eligibility</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>10 th Regular Schooling</span>
    </Col>
  </Row>

  <Row>
    <Col>
      <span style={{
          letterSpacing: "0.5px",
          opacity:0.7,    
          color: "black",
          fontWeight: "600",paddingRight:"22px"}}>Course</span> <span style={{
              marginLeft:"20px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500"}}>Professional Diploma in Hotel Management & Catering Science</span>
    </Col>
  </Row>
  </div>
  </Card>
</Container>

<Container>
  <Row>
      <Col>
      <div style={{display:"flex",justifyContent:"space-between"}}>
          <Button style={{borderRadius:"36px",padding:"8px 20px",fontWeight:"bold",backgroundColor:"#0e2246",borderColor:"#0e2246",color:"#ffffff"}} href="#UGDegrees"> UG PROGRAMS {">>"} </Button>
          <Button style={{borderRadius:"36px",padding:"8px 20px",fontWeight:"bold",backgroundColor:"#0e2246",borderColor:"#0e2246",color:"#ffffff"}} href="#DiplomaCourse"> {"<<"} Diploma PROGRAMS </Button>

      </div>
      </Col>
  </Row>
</Container>

<Container style={{marginTop:"50px"}}>
  <Row>
      <Col style={{textAlign:"center"}}>
      <h2   style={{ opacity: 0.8,
              fontWeight: "bold",
             }}>ADMISSION PROCEDURE</h2>
      </Col>
  </Row>

  <Row>
        <Col
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              borderRadius: "5px",
              border: " 2px solid #e22421",
              width: "89px",
            }}
          ></h2>
        </Col>
      </Row>
</Container>

<Container>
  <Row style={{marginTop:"50px",marginBottom:"20px"}}>
    <li  style={{listStyle: 'none',
              fontSize: "16px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500",
            }}>
      <span style={{ color: 'red', fontSize: '1.5em', marginRight: '5px' }}>&bull;</span>
      Chennais Amirta International Institute of Hotel Management commences the admissions for the academic year 2023-24 from the month of January 2023.
    </li>
    <li  style={{listStyle: 'none',
              fontSize: "16px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500",
            }}>
      <span style={{ color: 'red', fontSize: '1.5em', marginRight: '5px' }}>&bull;</span>
      Interested Candidates can apply or enquire through our website by means of the enquiry form or by means of a phone call.
    </li>

    <li  style={{listStyle: 'none',
              fontSize: "16px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500",
            }}>
      <span style={{ color: 'red', fontSize: '1.5em', marginRight: '5px' }}>&bull;</span>
      Our Admissions officer will contact you and brief about the courses available based on your educational qualifications and preference and will fix an appointment for you to visit any of our offices across South India.
    </li>
    <li  style={{listStyle: 'none',
              fontSize: "16px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500",
            }}>
      <span style={{ color: 'red', fontSize: '1.5em', marginRight: '5px' }}>&bull;</span>
      During your personal visit (along with parents/guardian), our Career guidance officer will brief you in detail about the various courses offered by our institution, our placement track records, importance of hotel management education, fees, amenities, etc.
    </li>

    <li  style={{listStyle: 'none',
              fontSize: "16px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500",
            }}>
      <span style={{ color: 'red', fontSize: '1.5em', marginRight: '5px' }}>&bull;</span>
      Based on your eligibility, our officer will suggest the right course for you which will help you secure a successful career.
    </li>
    <li  style={{listStyle: 'none',
              fontSize: "16px",
              letterSpacing: "0.5px",
              color: "rgb(112 112 109)",
              fontWeight: "500",
            }}>
      <span style={{ color: 'red', fontSize: '1.5em', marginRight: '5px' }}>&bull;</span>
      Seats are always on high-demand in Chennais Amirta IIHM beacuse of the various benefits that a student gets while studying in our institute. Chennais Amirta strictly follows a ‘First Come First Serve’ admission policy and hence students who visit us earlier are more likely to secure a seat (based on eligibility) for admission.
    </li>
  </Row>
</Container>

<div>
    <Footer/>
</div>
  </>
  )
}

export default PGDegrees
