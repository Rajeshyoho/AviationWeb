import {
    Divider,
    Grid,
    Typography,
    Card,
    Button,
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
  import { Box } from "@mui/system";


const UGDegrees = () => {
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
            <Navbar.Brand href="#home">UG Degrees</Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Grid>

      <Grid style={{padding:2}}>
        <Breadcrumb
          style={{ backgroundColor: "#FFFFFF", textDecoration: "none" }}
        >
          <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">ASDHEC Logo</Breadcrumb.Item>
        </Breadcrumb>
      </Grid>
    <div>
      <Row>
        <Col>
          <img
            style={{ height: "500px", width: "100%",padding:0,margin:0 }}
            src="https://www.ilamindia.in/assets/images/pg-mba-b3.webp"
          />
        </Col>
      </Row>
    </div>

    <Container
      style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
    >
      <Row>
        <Col>
          <h5
            style={{
              opacity: 0.8,
              fontFamily: "sans-serif",
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
              fontFamily: "sans-serif",
            }}
          >
            UG PROGRAMS
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
      <Row>
        <Col>
          <h3 style={{
              color:"black",
              opacity:0.5,
              fontWeight: "bold"}}>BACHELOR OF SCIENCE IN AVIATION</h3>
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

<div style={{marginTop:"20px",marginBottom:"20px"}}>
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
      </div>
    </Container>

    <Container style={{ padding: "16px" }}>
      <Row>
        <Col>
          <h3 style={{
              // letterSpacing: "0.5px",
              // color: "rgb(112 112 109)",
              color:"black",
              opacity:0.5,
              fontWeight: "bold"}}>Bachelor in Hotel Management & Catering Science</h3>
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

<div style={{marginTop:"20px",marginBottom:"20px"}}>
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
      </div>
    </Container>

    <Container style={{ padding: "16px" }}>
      <Row>
        <Col>
          <h3 style={{
              // letterSpacing: "0.5px",
              // color: "rgb(112 112 109)",
              color:"black",
              opacity:0.5,
              fontWeight: "bold"}}>Executive Diploma in Hotel Management & Catering Science</h3>
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

<div style={{marginTop:"20px",marginBottom:"20px"}}>
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
      </div>
    </Container>

    <Container style={{ padding: "16px" }}>
      <Row>
        <Col>
          <h3 style={{
              // letterSpacing: "0.5px",
              // color: "rgb(112 112 109)",
              color:"black",
              opacity:0.5,
              fontWeight: "bold"}}>Bachelor in Hotel Operations</h3>
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

<div style={{marginTop:"20px",marginBottom:"20px"}}>
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
      </div>
    </Container>

    <Container style={{ padding: "16px" }}>
      <Row>
        <Col>
          <h3 style={{
              // letterSpacing: "0.5px",
              // color: "rgb(112 112 109)",
              color:"black",
              opacity:0.5,
              fontWeight: "bold"}}>Bachelor in Food Production</h3>
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

<div style={{marginTop:"20px",marginBottom:"20px"}}>
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
      </div>
    </Container>

<Container>
  <Row>
      <Col>
      <div style={{display:"flex",justifyContent:"space-between"}}>
          <Button style={{borderRadius:"36px",padding:"8px 20px",fontWeight:"bold",backgroundColor:"#0e2246",borderColor:"#0e2246",color:"#ffffff"}} href="#DiplomaCourse"> Diploma PROGRAMS {">>"} </Button>
          <Button style={{borderRadius:"36px",padding:"8px 20px",fontWeight:"bold",backgroundColor:"#0e2246",borderColor:"#0e2246",color:"#ffffff"}} href="#PGDegrees"> {"<<"} PG PROGRAMS </Button>

      </div>
      </Col>
  </Row>
</Container>

<Container style={{marginTop:"50px"}}>
  <Row>
      <Col style={{textAlign:"center"}}>
      <h2   style={{ opacity: 0.8,
              fontWeight: "bold",
              fontFamily: "sans-serif"}}>ADMISSION PROCEDURE</h2>
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

export default UGDegrees
