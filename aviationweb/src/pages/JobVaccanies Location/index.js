import React from "react";
import {Grid} from "@mui/material"
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "@mui/material";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Footer from "../../components/Footer";
import "../../components/Location.css"

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

const jobCards = [
  {
    title: "Network Engineer",
    company: "ALB POWERTRANSMISSION",
    salary: "$32000-4400000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "chennai",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Developer",
    company: "Yoho Technologies",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Bangalore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Trainee",
    company: "Zoho pvt Ltd",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Coimbatore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Trainee",
    company: "Zoho pvt Ltd",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Coimbatore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Trainee",
    company: "Zoho pvt Ltd",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Coimbatore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Trainee",
    company: "Zoho pvt Ltd",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Coimbatore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Trainee",
    company: "Zoho pvt Ltd",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Coimbatore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Trainee",
    company: "Zoho pvt Ltd",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Coimbatore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Trainee",
    company: "Zoho pvt Ltd",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Coimbatore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Trainee",
    company: "Zoho pvt Ltd",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Coimbatore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
  {
    title: "Software Trainee",
    company: "Zoho pvt Ltd",
    salary: "$15000-20000",
    employmentType: "Full-time",
    shift: "Day Shift",
    description:
      "Experience parts programming and work experience preferable. Experience in handling night shift incharge to manage the team size of at least 10 people.",
    locationCurrent: "Coimbatore",
    descriptionDetail:
      "ZF is a global technology company supplying systems for passenger cars, commercial vehicles and industrial technology, enabling the next generation of mobility. ZF allows vehicles to see, think and act. In the four technology domains of Vehicle Motion Control, Integrated Safety, Automated Driving, and Electric Mobility, ZF offers comprehensive product and software solutions for established vehicle manufacturers and newly emerging transport and mobility service providers. ZF electrifies a wide range of vehicle types. With its products, the company contributes to reducing emissions, protecting the climate and enhancing safe mobility.",
    tasks: [
      "Platform SW Integration for various AUTOSAR crypto modules such as CSM/Cryif/Crypto based on Customer milestones.",
      "Integration of vHSM modules, vHSM updater, and Escrypt crypto driver.",
      "Analyze Security Sys Requirement and derive PSW requirements.",
      "Develop requirements, design, coding complying with coding guidelines.",
      "Take accountability and interact with different stakeholders on demand.",
      "Adherence to all SW processes including QAC, Polyspace, Code inspections, unit testing, and developer testing.",
    ],
  },
];

const JobCard = ({
  title,
  company,
  salary,
  employmentType,
  shift,
  description,
  locationCurrent,
  onClick,
}) => (
  <div onClick={onClick}>
    <Card
      style={{
        padding: "10px",
        marginTop: "10px",
        cursor: "pointer",
        borderRadius: "10px",
      }}
    >
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{title}</div>
          <div>
            <FmdGoodIcon />
            {locationCurrent}
          </div>
        </div>
        <Card.Subtitle style={{ marginTop: "5px", fontSize: "15px" }}>
          {company}
        </Card.Subtitle>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8px  ",
          }}
        >
          <div>{salary}</div>
          <div>{employmentType}</div>
          <div>{shift}</div>
        </div>
        <div>
          <Card.Text style={{ marginTop: "5px" }}>{employmentType}</Card.Text>
          <div>
            <ul>
              {description.split("\n").map((item, index) => (
                <li key={index} style={{ fontSize: "15px" }}>
                  &#8226; {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
);

const Location = () => {

    const logo = require("../../Images/logo3.png");


  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCardClick = (index) => {
    setSelectedJob(jobCards[index]);
  };

  const filteredJobs = jobCards.filter((job) =>
    job.locationCurrent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isLargeScreen = useMediaQuery("(min-width:900px)");

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
          'url("https://images.unsplash.com/photo-1573068057232-fa17a193d54d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh", // Set the height to 100% of the viewport height
        paddingLeft: "40px",
        paddingRight: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // width: "100%",
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
            Location
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
              Job Vaccanies
            </Link>
            <Link
              underline="none"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              style={{ color: "rgba(161,225,229,1)" }}
            >
              Location
            </Link>
          </Breadcrumbs>
        </div>
      </Col>
    </Row>

      <Container>
        <Row style={{ marginTop: "40px" }}>
          <Col>
            <InputGroup className="mb-3">
              <Form.Control
                style={{ border: "2px solid #697078" }}
                placeholder="Enter the location"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                style={{
                  border: "2px solid #697078",
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "14px",
                  padding: "10px",
                  fontWeight: "bold",
                  borderRightRadius: "10px",
                }}
              >
                Search Location
              </button>
            </InputGroup>
          </Col>
        </Row>
      </Container>

{/* large screen */}
      <Container fluid>
      {isLargeScreen ? (
        <div style={{  }}>
        <Row className="scrolling" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <Col xs={6}>
            <div>
              {filteredJobs.map((job, index) => (
                <JobCard
                  key={index}
                  {...job}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
          </Col>
          <Col
            xs={6}
            style={{ position: "sticky", top: 0, maxHeight: "100vh" }}
          >
            {selectedJob && (
              <div style={{ padding: "20px" }}>
                <Card style={{ borderRadius: "10px" }}>
                  <div style={{ padding: "20px" }}>
                    <h3>{selectedJob.title}</h3>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                      />
                    </Stack>
                    <div>{selectedJob.locationCurrent}</div>
                    <div>
                      <div>
                        <p>
                          You must create an Indeed account before continuing to
                          the company website to apply
                        </p>
                      </div>
                      <div>
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </div>
                  {/* inner scroll */}
                  <div
                    style={{
                      overflowY: "auto",
                      padding: "20px",
                      maxHeight: "330px",
                    }}
                  >
                    <div>
                      <h5>What's Next? Join {selectedJob.company}!</h5>
                      <p>{selectedJob.descriptionDetail}</p>
                    </div>
                    <div>
                      <h5>Job Details:</h5>
                      <div>
                        <div>
                          <div>Salary: {selectedJob.salary}</div>
                          <div>
                            Employment Type: {selectedJob.employmentType}
                          </div>
                          <div>Shift: {selectedJob.shift}</div>
                        </div>
                      </div>
                    </div>
                    {selectedJob.tasks && (
                      <div style={{ marginTop: "10px" }}>
                        <h5>Your Task:</h5>
                        <ul>
                          {selectedJob.tasks.map((task, index) => (
                            <li key={index} style={{ fontSize: "14px" }}>
                              <ChevronRightIcon />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedJob.profile && (
                      <div>
                        <h5>Your Profile:</h5>
                        <ul>
                          {selectedJob.profile.map((profileItem, index) => (
                            <li key={index}>{profileItem}</li>
                          ))}
                          <li>
                            Be part of our {selectedJob.company} team as{" "}
                            {selectedJob.position} and apply now!
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            )}
          </Col>
        </Row>
        </div>
        ) : (
        // Small Screen
        <div style={{ border: "2px solid #0e2246" }}>
          <CustomAccordion items={items} />
        </div>
      )}
      </Container>

      <div style={{marginTop:"50px"}}>
        <Footer/>
      </div>
    </div>
  );
};

export default Location;

