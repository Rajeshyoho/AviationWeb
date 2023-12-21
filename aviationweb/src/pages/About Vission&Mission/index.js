import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import "../../components/VisionMission.css";
import HomeIcon from "@mui/icons-material/Home";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const images = [
  "https://wallpapercave.com/dwp2x/wp12041609.jpg",
  "https://wallpapercave.com/dwp2x/wp9579853.jpg",
  "https://wallpapercave.com/wp/wp10561288.jpg",
  "https://flytechaviation.aero/wp-content/uploads/2021/03/Flytech-Aviation-Academy-aeronautical-traning-1.jpg",
];

const VisionMission = () => {
  const logo = require("../../Images/logo3.png");

  const [selectedImage, setSelectedImage] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextClick = () => {
    setSelectedImage((prevImage) =>
      prevImage === images.length ? 1 : prevImage + 1
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 5000); // Change 5000 to the desired interval in milliseconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [selectedImage]);

  const containerStyle = {
    "@media (max-width: 600px)": {
      width: "100%", // Adjust styles for smaller screens
    },
    height: "400px",
    position: "relative",
    margin: "auto",
    cursor: "pointer",
    boxShadow: "0 0 5px #000",
    backgroundImage: `url(${"https://s.wsj.net/public/resources/images/BN-KB814_AUSPIL_P_20150831080105.jpg"})`,
    backgroundSize: "cover",
  };

  const overlayStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(77, 77, 77, .9)",
    color: "#FEF5DF",
    opacity: isHovered ? 0.8 : 0,
    transition: "all 0.5s",
  };

  const headStyle = {
    fontSize: "30px",
    lineHeight: "40px",
    transform: isHovered ? "translateY(0px)" : "translateY(40px)",
    transition: "all 0.7s",
  };
  return (
    <Grid style={{ overflow: "hidden" }}>
      <Grid>
        <Header />
        <NavBar />
      </Grid>

      <Row
        style={{
          position: "relative",
          backgroundImage:
            'url("https://wallpapercave.com/dwp1x/wp11828145.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // maxWidth: "100%",
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
              Vision Mission
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
                Vision Mission
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <div style={{ backgroundColor: "#3c4b6a" }}>
        <Container fluid>
          <Row style={{ padding: "50px" }}>
            <Col sm={12} md={6}>
              <div style={{ color: "#ffffff" }}>
                <div>
                  <h2 style={{ fontWeight: "bold" }}>VISION</h2>
                </div>
                <strong style={{ fontSize: "18px", fontWeight: "bolder" }}>
                  The Government College for Women stands to:
                </strong>
                <ul style={{ marginTop: "10px" }}>
                  <li style={{ paddingTop: "10px", fontSize: "15px" }}>
                    <ChevronRightIcon />
                    Provide a sound education in basic science and humanities
                  </li>
                  <li style={{ paddingTop: "10px", fontSize: "15px" }}>
                    <ChevronRightIcon />
                    Inculcate high values through liberal education
                  </li>
                  <li style={{ paddingTop: "10px", fontSize: "15px" }}>
                    <ChevronRightIcon /> Promote research and learning at the PG
                    level and beyond
                  </li>
                  <li style={{ paddingTop: "10px", fontSize: "15px" }}>
                    <ChevronRightIcon />
                    Provide a broad range of non-formal educational services
                  </li>
                  <li style={{ paddingTop: "10px", fontSize: "15px" }}>
                    <ChevronRightIcon />
                    Transform society through the empowerment of women
                  </li>
                  <li style={{ paddingTop: "10px", display: "flex" }}>
                    <span>
                      <ChevronRightIcon />
                    </span>
                    <div style={{ fontSize: "15px" }}>
                      Provide inexpensive educational services to the weaker
                      sections of the society and reinvent itself in response to
                      the changing demands of society
                    </div>
                  </li>
                  <li style={{ paddingTop: "10px", fontSize: "15px" }}>
                    <ChevronRightIcon />
                    Develop responsible women leaders for the future
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://images.unsplash.com/photo-1627501691850-db08eb81199a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <div
          style={{
            backgroundColor: "#d5e4ed",
            margin: "40px",
            padding: "30px",
          }}
        >
          <div>
            <h2 style={{ fontWeight: "bold" }}>MISSION</h2>
          </div>
          <strong style={{ fontSize: "18px", fontWeight: "bolder" }}>
            Our mission is
          </strong>
          <ul style={{ marginTop: "10px" }}>
            <li style={{ paddingTop: "10px", display: "flex" }}>
              <span>
                <ChevronRightIcon />
              </span>
              <div style={{ fontSize: "15px" }}>
                To provide quality higher education to girl students to enable
                them to face the challenges of the world with courage and
                confidence and mould them to be socially responsible citizens
              </div>
            </li>
            <li style={{ paddingTop: "10px", fontSize: "15px" }}>
              <ChevronRightIcon />
              To impart knowledge and create intellectual power among the needy
              and deserving community.
            </li>
            <li style={{ paddingTop: "10px", fontSize: "15px" }}>
              <ChevronRightIcon /> To transform the student into a balanced
              personality through a wide variety of curricular, co-curricular,
              and extra-curricular activities.
            </li>
            <li style={{ paddingTop: "10px", fontSize: "15px" }}>
              <ChevronRightIcon />
              To impart ethical values for ensuring the harmonious functioning
              of the society
            </li>
            <li style={{ paddingTop: "10px", fontSize: "15px" }}>
              <ChevronRightIcon />
              To develop courage, confidence, and competitiveness in the
              changing global scenario.
            </li>
            <li style={{ paddingTop: "10px", display: "flex" }}>
              <span>
                <ChevronRightIcon />
              </span>
              <div style={{ fontSize: "15px" }}>
                Provide inexpensive educational services to the weaker sections
                of the society and reinvent itself in response to the changing
                demands of society
              </div>
            </li>
            <li style={{ paddingTop: "10px", display: "flex" }}>
              <span>
                <ChevronRightIcon />
              </span>
              <div style={{ fontSize: "15px" }}>
                To provide quality higher education to girl students to enable
                them to face the challenges of the world with courage and
                confidence and mould them to be socially responsible citizens
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div  style={{
            margin: "30px",
            padding: "30px",}}>
        <h4 style={{textAlign:"center",fontSize:"23px",fontWeight:"bold"}}>Performance of the institution in one area distinctive to its vision, priority and thrust</h4>
        <div style={{marginTop:"20px"}}>
          <p style={{fontSize:"14px"}}>With the motto of “For The Country and for The Home” Govt. College for Women, Thiruvananthapuram has a rich legacy of more than a century in providing quality higher education to girl students of the state. Women empowerment through education is the distinctive vision of the institution, which has been given emphasis in all the teaching, learning and research activities of our college. The college has emerged as a ‘centre of excellence’ in the state of Kerala offering 18 undergraduate programmes and 17 postgraduate programmes in various disciplines. Twelve of the departments have the research centre status. The four-storied central library with a large number of books, journals, periodicals, newspapers and other academic publications is the biggest resource to the academic community in the campus. Students are given the foremost importance and representation in the administrative, co-curricular and extracurricular activities in the college. College administration has taken all measures to facilitate admission, examinations and other student support services. Students of the college secure 30-35 ranks, every year in Kerala university examinations. A good number of students join for higher education and research on completion of the programmes. A reasonably good number of students qualify national level eligibility tests like UGC/CSIR-JRF-NET and GATE, every year.  Many of the faculty members of the college have been actively involved in pursuing research and regularly publishing research articles in reputed national and international research journals. Our students excel in arts, sports and other extracurricular activities.</p>
          <p style={{fontSize:"14px"}}>Students of our college have become members in several national, state and university teams of sports events. Our college has been in the third position among the affiliated colleges in university youth festivals for the last several years. Various co-curricular ‘new initiative’ programmes like scholar support programmes (SSP); for giving special training to needy students, walk with a scholar (WWS); for mentoring a few students with the good academic record, additional skill acquisition programme (ASAP); for giving training on additional job skills etc. are undertaken by the college in its full spirit. NSS, NCC and various clubs like literary, debate, quiz, drama, health etc. fully functional in the campus. A continuing education sub-centre of the University of Kerala Centre for Adult Continuing Education & Extension is here in the campus offering nearly 300 courses to the students of the college as well as to people outside the campus without any age barrier for women. Activities in connection with central government initiatives like Unnat Bharat Abhiyan and Ek Bharath Shrestha Bharath are organized by the college. Under the Unnat Bharat Abhiyan programme, inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an inclusive India</p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </Grid>
  );
};

export default VisionMission;
