import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeIcon from "@mui/icons-material/Home";
import { Grid, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
// import Link from '@mui/material/Link';
// import HomeIcon from '@mui/icons-material/Home';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AccordionItem = ({ title, content, index }) => {
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
    <Container style={{}}>
      <div>
        <div
          className="row"
          style={{
            // width: "100%",
            borderTop: "2px solid #0e2246",
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
          <div className="col-12 col-md-4" style={{ fontWeight: "700" }}>
            {title}
          </div>
          <div style={{ textAlign: "end" }} className="col-12 col-md-3">
            <span style={{ fontWeight: "700" }}>Date of Posting:</span> 3rd
            July,2023
          </div>
          <div style={{ textAlign: "end" }} className="col-12 col-md-3">
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
                    <ChevronRightIcon />
                  </span>
                  Preferably Engineering Graduate
                </div>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <div className="headingTitle">Work Experience:</div>
              <div className="content">
                <span>
                  <ChevronRightIcon />
                </span>
                2-5 years of Finance related experience– preferably from an
                airline.
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <div className="headingTitle">Skills/ Special Requirements:</div>
              <div className="content">
                <span>
                  <ChevronRightIcon />
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
                      <ChevronRightIcon />
                    </span>
                    Periodic invoice reconciliation related to customer
                    invoices.
                  </li>
                  <li>
                    <span>
                      <ChevronRightIcon />
                    </span>
                    Receiving invoices and processing the payments.
                  </li>
                  <li>
                    <span>
                      <ChevronRightIcon />
                    </span>
                    Record all expenses and review those expenses & keep the
                    track of expenses every month..
                  </li>
                  <li>
                    <span>
                      <ChevronRightIcon />
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
                      <ChevronRightIcon />
                    </span>
                    Periodic invoice reconciliation related to customer
                    invoices.
                  </li>
                  <li>
                    <span>
                      <ChevronRightIcon />
                    </span>
                    Receiving invoices and processing the payments.
                  </li>
                  <li>
                    <span>
                      <ChevronRightIcon />
                    </span>
                    Record all expenses and review those expenses & keep the
                    track of expenses every month..
                  </li>
                  <li>
                    <span>
                      <ChevronRightIcon />
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
                      <ChevronRightIcon />
                    </span>
                    Periodic invoice reconciliation related to customer
                    invoices.
                  </li>
                  <li>
                    <span>
                      <ChevronRightIcon />
                    </span>
                    Receiving invoices and processing the payments.
                  </li>
                  <li>
                    <span>
                      <ChevronRightIcon />
                    </span>
                    Record all expenses and review those expenses & keep the
                    track of expenses every month..
                  </li>
                  <li>
                    <span>
                      <ChevronRightIcon />
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

const Eligibility = () => {
  const logo = require("../../Images/logo3.png");
  return (
    <div style={{ overflow: "hidden" }}>
      <Grid>
        <Header />
        <NavBar />
      </Grid>

      <Row
        style={{
          position: "relative",
          backgroundImage:
            'url("https://www.pilotcareernews.com/wp-content/uploads/2020/02/new-classes-one-air.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh", // Set the height to 100% of the viewport height
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
              Eligibility
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
                Carrier Guidance
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                style={{ color: "rgba(161,225,229,1)" }}
              >
                Eligibility
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

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
        <div style={{ border: "2px solid #0e2246" }}>
          <CustomAccordion items={items} />
        </div>
      </Container>

      <div style={{ marginTop: 30, textAlign: "justify" }}>
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
    </div>
  );
};

export default Eligibility;
