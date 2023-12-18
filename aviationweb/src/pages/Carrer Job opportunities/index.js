import { Grid, Typography } from "@mui/material";
import { React } from "react";
import { Button, Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import NavBar from "../../components/NavBar";
import "../../components/JobOpportunities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AccordionItem = ({ title, content ,index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };

  const handleSelection = () => {
    setIsSelected(!isSelected);
  };

  const isGrayBackground = index === 2 || index === 4 || index === 6;

  const borderColor = isSelected ? "solid 2px white" : "solid 2px #ddd";
  const titleColor = isSelected ? "#ee495c" : "inherit";

  return (
    <Container>
      <div>
        <div
            className="row"
            style={{
              width: "100%",
              cursor: "pointer",

              fontSize: "15px",
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "20px",
              paddingTop: "20px",
              borderBottom: borderColor,
              color: titleColor,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              transition: "background-color 0.3s, color 0.3s",
              backgroundColor: isSelected
                ? "#0e2246"
                : isHovered
                ? "#0e2246"
                : isGrayBackground
                ? "gray"  
                : "initial",
              color: isSelected ? "white" : isHovered ? "white" : "#848494",
            }}
            onClick={handleSelection}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
        >
          <div
            className="col-12 col-md-4"
            style={{ fontWeight: "700" }}
          >
            {title}
          </div>
          <div
            style={{ textAlign: "end" }}
            className="col-12 col-md-3"
          >
            <span style={{ fontWeight: "700" }}>Date of Posting:</span> 3rd
            July,2023
          </div>
          <div
            style={{ textAlign: "end" }}
            className="col-12 col-md-3"
          >
            <span style={{ fontWeight: "700" }}>Location:</span> Bangalore
          </div>
          <div style={{ textAlign: "end" }} className="col-12 col-md-2">
            {isSelected ? (
              <FontAwesomeIcon icon={faMinus} size={"1x"} />
            ) : (
              <FontAwesomeIcon icon={faPlus} size={"1x"} />
            )}
          </div>
        </div>

        {isSelected && (
          <div
            style={{
              paddingBottom: "10px",
              paddingTop: "10px",
            }}
          >
            <div>
              <div>
                <span className="headingTitle">Job Title:</span>
                <span className="content">
                  {" "}
                  Asst Manager – Flight Operations (Crew Rostering)
                </span>
              </div>
              <div>
                <span className="headingTitle">Location:</span>
                <span className="content"> Bengaluru</span>
              </div>
              <div>
                <div className="headingTitle">Education Qualifications:</div>
                <div className="content">
                  <span>
                  <ChevronRightIcon/>
                  </span>
                  Preferably Engineering Graduate
                </div>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <div className="headingTitle">Work Experience:</div>
              <div className="content">
                <span>
                <ChevronRightIcon/>
                </span>
                2-5 years of Finance related experience– preferably from an
                airline.
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <div className="headingTitle">Skills/ Special Requirements:</div>
              <div className="content">
                <span>
                <ChevronRightIcon/>
                </span>
                Well versed with usage of various types of MS software, business
                analysis and financial applications tools.
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <div className="headingTitle">JOB DESCRIPTION</div>
              <div className="content">
                We are seeking a skilled and quick-learning individual who has
                basic knowledge of Marketing and Sales. This position will
                primarily focus on commercial activities, including invoice
                reconciliation, communication management, record keeping, report
                preparation, and expense tracking. Additionally, the Commercial
                Executive will be responsible for maintaining brand integrity,
                managing digital platforms, and supporting marketing and sales
                efforts.
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <div className="headingTitle">RESPONSIBILITIES:</div>
              <div>
                <div className="subTitle">Commercial:</div>
                <div className="content">
                  <li>
                    <span>
                      <ChevronRightIcon/>
                    </span>
                    Periodic invoice reconciliation related to customer
                    invoices.
                  </li>
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Receiving invoices and processing the payments.
                  </li>
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Record all expenses and review those expenses & keep the
                    track of expenses every month..
                  </li>
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Prepare and submit weekly/monthly reports.
                  </li>
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <div className="subTitle">Digital:</div>
                <div className="content">
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Periodic invoice reconciliation related to customer
                    invoices.
                  </li>
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Receiving invoices and processing the payments.
                  </li>
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Record all expenses and review those expenses & keep the
                    track of expenses every month..
                  </li>
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Prepare and submit weekly/monthly reports.
                  </li>
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <div className="subTitle">Qualification:</div>
                <div className="content">
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Periodic invoice reconciliation related to customer
                    invoices.
                  </li>
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Receiving invoices and processing the payments.
                  </li>
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Record all expenses and review those expenses & keep the
                    track of expenses every month..
                  </li>
                  <li>
                    <span>
                    <ChevronRightIcon/>
                    </span>
                    Prepare and submit weekly/monthly reports.
                  </li>
                </div>
              </div>

              <div
                className="content"
                style={{ marginTop: "30px", marginBottom: "30px" }}
              >
                <span style={{ paddingRight: "10px" }}>
                  In order to submit your Job Application please
                </span>
                <Button
                  size="Small"
                  style={{ backgroundColor: "red", borderColor: "red" }}
                >
                  Click Here
                </Button>
              </div>
            </div>
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

const JobOpportunities = () => {
  const logo = require("../../Images/logo3.png");

  return (
    <div className="overall" style={{overflow:"hidden"}}>

       <Grid>
      <Header />
      <NavBar />
      </Grid>


      <Row
  style={{
    position: "relative",
    backgroundImage:
      'url("https://wallpapercave.com/dwp2x/wp12435861.jpg")',
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
       Job Opportunities
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
           Job Opportunities
        </Link>
      </Breadcrumbs>
    </div>
  </Col>
</Row>

      <Container>
        <Row>
          <Col style={{ marginTop: "50px" }}>
            <h4
              style={{ fontSize: "36px", fontWeight: "400", color: "#0e2246" }}
            >
              CAREER OPPORTUNITIES
            </h4>
            <div
              style={{
                width: "18%",
                height: "4px",
                backgroundColor: "#0e2246",
                marginTop: "10px",
                marginBottom: "25px",
              }}
            ></div>

            <div>
              <p
                style={{
                  color: "#6b6b6b",
                  fontWeightL: "600",
                  fontSize: "15px",
                }}
              >
                We take great pride in our team members as we together create a
                great company. We work together to pursue our shared purpose – a
                promise to help us and our clients achieve their goals. Come be
                part of our team–bring your ideas, expertise and determination
                to make a difference. Given below are the current opportunities.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: "30px" }}>
        <CustomAccordion items={items} />
      </div>
      <div style={{ marginTop: 30 }}>
        <Footer />
      </div>
    </div>
  );
};

export default JobOpportunities;
