import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Grid, Typography } from "@mui/material";
import { Image } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';


const AccordionItem = ({ title, content, expanded, onToggle }) => {
  const borderColor = expanded ? "solid 2px #ee495c" : "solid 2px #ddd";
  const titleColor = expanded ? "#ee495c" : "inherit";

  return (
    <Container>
      <div>
        <div
          style={{
            cursor: "pointer",

            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            marginTop: "17px",
            borderBottom: borderColor,
            color: titleColor,
            opacity: 0.8,
          }}
          onClick={onToggle}
        >
          {title}{" "}
          {expanded ? (
            <FontAwesomeIcon icon={faMinus} size={"1x"} />
          ) : (
            <FontAwesomeIcon icon={faPlus} size={"1x"} />
          )}
        </div>
        {expanded && (
          <div
            style={{
              fontSize: "15px",
              fontWeight: "400",
              opacity: 0.8,

            }}
          >
            {content}
          </div>
        )}
      </div>
    </Container>
  );
};

const CustomAccordion = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggle = (index) => {
    setExpandedItems((prevExpanded) => {
      const isItemExpanded = prevExpanded.includes(index);
      if (isItemExpanded) {
        return prevExpanded.filter((item) => item !== index);
      } else {
        return [...prevExpanded, index];
      }
    });
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          expanded={expandedItems.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const items = [
  {
    title: "Bachelor of Technology - B.Tech",
    content:
      "Applicants to BA (Hons.) program at Woxsen University must have completed 12th Grade or 10+2 in any discipline from CBSE, ISC, State Boards, IB, Cambridge, other Government Recognized Boards or Equivalent with a minimum 60% aggregate For all specializations, must have English Language as a compulsory subject in 12th Grade",
  },
  {
    title: "Bachelor of Business Administration - BBA (Hons.)",
    content: "Content for Item 2",
  },
  { title: "Bachelor of Architecture (B.Arch)", content: "Content for Item 3" },
  {
    title: "Bachelor of Arts - BA (Hons.)",
    content:
      "Applicants to BA (Hons.) program at Woxsen University must have completed 12th Grade or 10+2 in any discipline from CBSE, ISC, State Boards, IB, Cambridge, other Government Recognized Boards or Equivalent with a minimum 60% aggregate For all specializations, must have English Language as a compulsory subject in 12th Grade",
  },
  {
    title: "Bachelor of Arts & Bachelor of Legislative Law - BA-LLB (Hons.)",
    content:
      "Applicants to BA (Hons.) program at Woxsen University must have completed 12th Grade or 10+2 in any discipline from CBSE, ISC, State Boards, IB, Cambridge, other Government Recognized Boards or Equivalent with a minimum 60% aggregate For all specializations, must have English Language as a compulsory subject in 12th Grade",
  },
  {
    title:
      "Bachelor of Business Administration & Bachelor of Legislative Law - BBA-LLB (Hons.)",
    content:
      "Applicants to BA (Hons.) program at Woxsen University must have completed 12th Grade or 10+2 in any discipline from CBSE, ISC, State Boards, IB, Cambridge, other Government Recognized Boards or Equivalent with a minimum 60% aggregate For all specializations, must have English Language as a compulsory subject in 12th Grade",
  },
  {
    title: "Bachelor of Science - B.Sc (Hons.)",
    content:
      "Applicants to BA (Hons.) program at Woxsen University must have completed 12th Grade or 10+2 in any discipline from CBSE, ISC, State Boards, IB, Cambridge, other Government Recognized Boards or Equivalent with a minimum 60% aggregate For all specializations, must have English Language as a compulsory subject in 12th Grade",
  },
];

const Eligibility = () => {
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
      'url("https://th.bing.com/th/id/R.8c4e67b17c0705ec3cb77dcc64798f70?rik=63zv%2fLAxwhssLQ&riu=http%3a%2f%2fwww.wallpapers4u.org%2fwp-content%2fuploads%2fboeing_777_aircraft_runway_sky_64287_1920x1080.jpg&ehk=yjWnVnS6dpDi66kXq9wI5WX9mMtDqkWBYAR%2bm388t2I%3d&risl=&pid=ImgRaw&r=0")',
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
       Eligiblity
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
          Carrer
        </Link>
        <Link
          underline="none"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          style={{color:"rgba(161,225,229,1)"}}
        >
          Eligiblity
        </Link>
      </Breadcrumbs>
    </div>
  </Col>
</Row>

      {/* <div style={{ padding: 12 }}>
        <Row style={{ backgroundColor: "black" }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                paddingLeft: "10px",
                borderLeft: "4px solid red",
                borderRadius: "5px",
              }}
            >
              ELIGIBILITY
            </h1>
          </Col>
          <Col>
            {" "}
            <img
              src="https://woxsen.edu.in/uploads/a20230613063837.webp"
              style={{
                width: "100%",
                objectFit: "fill",
                backgroundSize: "contain",
              }}
              alt="Woxsen University"
            />
          </Col>
        </Row>
      </div> */}


      <Container>
        <Row style={{ padding: "50px 0px" }}>
          <Col>
            <Typography
              style={{
                marginBottom: "1rem",
                color: "#5d5d5d",
                fontSize: "15px",
              }}
            >
              We are delighted that you have chosen to join our community of the
              best and brightest students from India and around the world.
            </Typography>
            <Typography
              style={{
                marginBottom: "1rem",
                color: "#5d5d5d",
                fontSize: "15px",
              }}
            >
              Each program at Woxsen University has its own set of eligibility
              requirements. Please use this table to determine your eligibility
              for admission to any of Woxsen's undergraduate, postgraduate, or
              doctoral programs. If you have any questions about your
              eligibility, please contact us at admissions@woxsen.edu.in or get
              in touch with one of our admission counsellors.
            </Typography>
            <Typography
              style={{
                marginBottom: "1rem",
                color: "#5d5d5d",
                fontSize: "15px",
              }}
            >
              The following are the minimum eligibility requirements for
              applying to Woxsen University's academic programs commencing in
              August 2023:
            </Typography>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h3
              style={{
                fontSize: "23px",
                fontWeight: "bold",
                margin: "0 0 10px",
                color: "#ee495c",

              }}
            >
              UNDERGRADUATE
            </h3>
          </Col>
        </Row>
        <CustomAccordion items={items} />
      </Container>

      <Container>
        <Row style={{ paddingTop: "3rem" }}>
          <Col>
            <h3
              style={{
                fontSize: "23px",
                fontWeight: "bold",
                margin: "0 0 10px",
                color: "#ee495c",
              }}
            >
              POSTGRADUATE
            </h3>
          </Col>
        </Row>
        <CustomAccordion items={items} />
      </Container>

      <div style={{ marginTop: 30 ,textAlign:"justify"}}>
        <Container>
          <Typography>
            The Aircraft Registration Application must include the typed or
            printed name of each signer with their signature in the signature
            block. international cargo airline industry, offering its customers
            an extensive selection of services as a General Sales and Service
            Agent. With a commitment to excellence and a visionary approach,
            this company is well-positioned to maintain its success and
            prosperous into the future.
          </Typography>
        </Container>
      </div>
      <div style={{ marginTop: 30 }}>
        <Footer />
      </div>
    </>
  );
};

export default Eligibility;
