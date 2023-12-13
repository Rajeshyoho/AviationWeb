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

const AccordionItem = ({ title, content, expanded, onToggle }) => {
  const borderColor = expanded ? "solid 2px #ee495c" : "solid 2px #ddd";
  const titleColor = expanded ? "#ee495c" : "inherit";

  return (
    <Container>
      <div>
        <div
          style={{
            cursor: "pointer",
            fontFamily: "cursive",
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
              fontFamily: "sans-serif",
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

      {/* <Grid style={{ marginLeft:5}}>
        <Breadcrumb
          style={{ backgroundColor: "#FFFFFF", textDecoration: "none" }}
        >
          <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">ASDHEC Logo</Breadcrumb.Item>
        </Breadcrumb>
      </Grid> */}

      <div style={{ padding: 12 }}>
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
      </div>
      <Container>
        <Row style={{ padding: "50px 0px" }}>
          <Col>
            <p
              style={{
                marginBottom: "1rem",
                color: "#5d5d5d",
                fontSize: "15px",
              }}
            >
              We are delighted that you have chosen to join our community of the
              best and brightest students from India and around the world.
            </p>
            <p
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
            </p>
            <p
              style={{
                marginBottom: "1rem",
                color: "#5d5d5d",
                fontSize: "15px",
              }}
            >
              The following are the minimum eligibility requirements for
              applying to Woxsen University's academic programs commencing in
              August 2023:
            </p>
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
                fontFamily: "revert-layer",
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
                fontFamily: "revert-layer",
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
