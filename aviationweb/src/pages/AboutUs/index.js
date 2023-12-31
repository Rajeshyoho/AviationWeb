import { Box, Divider, Grid, Typography, CardMedia, Card } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Marquee from "react-fast-marquee";
import Footer from "../../components/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../../components/Header";
import "../../components/About.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { MDBAnimation } from "mdbreact";
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';


const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedCol = styled(Col)`
  &.slide-in-left {
    animation: ${slideInLeft} 1s ease-in-out;
  }

  &.slide-in-right {
    animation: ${slideInRight} 1s ease-in-out;
  }
`;


const AboutUs = () => {
  const logo = require("../../Images/logo3.png");

  // const [animationClassLeft, setAnimationClassLeft] = useState('');
  // const [animationClassRight, setAnimationClassRight] = useState('');

  // useEffect(() => {
  //   // Trigger animation after component mounts
  //   setAnimationClassLeft('slide-in-left');
  //   setAnimationClassRight('slide-in-right');
  // }, []);


  const [animationClassLeft, setAnimationClassLeft] = useState('');
  const [animationClassRight, setAnimationClassRight] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      // Adjust this value based on your desired trigger point
      const triggerPoint = 500;

      if (scrollPosition > triggerPoint) {
        setAnimationClassLeft('slide-in-left');
        setAnimationClassRight('slide-in-right');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const animationClassLeft = scrollPosition > 50 ? "slide-in-left" : "";
  // const animationClassRight = scrollPosition > 50 ? "slide-in-right" : "";

  const testimonials = [
    {
      name: "John Doe",
      role: "Pilot",
      comment:
        "Montair’s experienced instructors and advanced aircraft were an integral part in preparing me for a career as a professional pilot. Their drive for perfection equipped me with the fundamental skills and attitude required to take on just about any job in the aviation industry. The meticulous standards to which they maintain their aircraft always gave me peace-of-mind knowing that I was safe, while the well-equipped classroom and training facilities created an excellent environment in which to learn. The camaraderie created by this welcoming environment led to relationships and memories that will last a lifetime. I take the skills and experience that I gained during my time at Montair with me every day I go to work, making me a better and safer pilot.",
      image:
        "https://www.shutterstock.com/image-vector/pilot-icon-illustration-vector-avatar-2129570531",
    },
    {
      name: "John Doe",
      role: "Pilot",
      comment:
        "There are two types of aircraft in India: civil and military. The Directorate General of Civil Aviation (DGCA) oversees the regulation of civil aviation. Along with the Indian Air Force, the Indian Army, Navy, and Coast Guard all have aviation branches that educate officers at their respective military bases. These branches are known as the Army Aviation Corps, Indian Naval Air Arm, and Indian Coast Guard, respectively,A good pilot must have the knowledge, intelligence, capacity to think fast and respondFees for flying to schools in India are comparatively high. An applicant must get a CPL in order to become a commercial pilot It is a statutory body established by the 2020 Aircraft Bill, this department looks into aircraft mishaps and accidents.",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fpilot-avatar&psig=AOvVaw3EC9MQ0tl22Q_qGDwd9-lC&ust=1702640683953000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj3io-ikIMDFQAAAAAdAAAAABAD",
    },
    {
      name: "John Doe",
      role: "Pilot",
      comment:
        "Montair’s experienced instructors and advanced aircraft were an integral part in preparing me for a career as a professional pilot. Their drive for perfection equipped me with the fundamental skills and attitude required to take on just about any job in the aviation industry. The meticulous standards to which they maintain their aircraft always gave me peace-of-mind knowing that I was safe, while the well-equipped classroom and training facilities created an excellent environment in which to learn. The camaraderie created by this welcoming environment led to relationships and memories that will last a lifetime. I take the skills and experience that I gained during my time at Montair with me every day I go to work, making me a better and safer pilot.",
      image:
        "https://www.shutterstock.com/image-vector/male-police-avatar-uniform-hat-2173275249",
    },
    {
      name: "John Doe",
      role: "Pilot",
      comment:
        "Montair’s experienced instructors and advanced aircraft were an integral part in preparing me for a career as a professional pilot. Their drive for perfection equipped me with the fundamental skills and attitude required to take on just about any job in the aviation industry. The meticulous standards to which they maintain their aircraft always gave me peace-of-mind knowing that I was safe, while the well-equipped classroom and training facilities created an excellent environment in which to learn. The camaraderie created by this welcoming environment led to relationships and memories that will last a lifetime. I take the skills and experience that I gained during my time at Montair with me every day I go to work, making me a better and safer pilot.",
      image: "",
    },
    {
      name: "John Doe",
      role: "Pilot",
      comment:
        "Montair’s experienced instructors and advanced aircraft were an integral part in preparing me for a career as a professional pilot. Their drive for perfection equipped me with the fundamental skills and attitude required to take on just about any job in the aviation industry. The meticulous standards to which they maintain their aircraft always gave me peace-of-mind knowing that I was safe, while the well-equipped classroom and training facilities created an excellent environment in which to learn. The camaraderie created by this welcoming environment led to relationships and memories that will last a lifetime. I take the skills and experience that I gained during my time at Montair with me every day I go to work, making me a better and safer pilot.",
      image: "",
    },

    // Add more testimonials as needed
  ];

  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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
              About ASDHEC
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
                About ASDHEC
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <Container fluid>
        <Row xs={1} md={2} style={{ marginTop: 30 }}>
          <Grid item xs={4} md={6}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Aviation Skill Development And Higher Educational Council
            </Typography>

            <Divider
              style={{
                marginTop: 20,
                backgroundColor: "#0e2246",
              }}
            />
             <AnimatedCol className={` ${animationClassLeft}`} >
            <div
              style={{
                display: "flex",
                paddingTop: 20,
                textAlign: "center",
                backgroundPosition: "center",
              }}
            >
              <Image
                src="https://www.lcc.edu/academics/areas-of-study/computers-engineering-technology/images/aviation-gallery/full-8.jpg"
                // style={{ objectFit: "cover" }}
                alt="Aviation"
                fluid
              />
            </div>
            </AnimatedCol>
          </Grid>

            <AnimatedCol className={` ${animationClassRight}`}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ textAlign: "justify", marginTop: { xs: 1, lg: 7.5 } }}
            >
              <Typography>
                Aviation includes the activities surrounding mechanical flight
                and the aircraft industry. Aircraft includes fixed-wing and
                rotary-wing types, morphable wings, wing-less lifting bodies, as
                well as lighter-than-air craft such as hot air balloons and
                airships. Aviation began in the 18th century with the
                development of the hot air balloon, an apparatus capable of
                atmospheric displacement through buoyancy. Some of the most
                significant advancements in aviation technology came with the
                controlled gliding flying of Otto Lilienthal in 1896; then a
                large step in significance came with the construction of the
                first powered airplane by the Wright brothers in the early
                1900s. Since that time, aviation has been technologically
                revolutionized by the introduction of the jet which permitted a
                major form of transport throughout the world.
              </Typography>
              {/* <br /> */}
              <Typography style={{ marginTop: 10 ,textAlign: "justify"}}>
                For Native Americans, music is more than just sound, and each
                dance move has meaning. Art in every form whether totem poles,
                pottery, or literature—is a fact of life, ingrained into the
                culture.Air Traffic Controller applicants need to complete an
                approved training course offered by the National Air Traffic
                Services in order to obtain the air traffic control.
              </Typography>
            </Typography>
     </AnimatedCol>
        </Row>
      </Container>

      <Container fluid style={{ backgroundColor: "#e6e6e6", marginTop: 25,padding:"10px 25px" }}>
        <Row style={{ marginBottom: 10 }}>
          {/* <Col style={{  }}> */}
          <Box sx={{ padding: 1, textAlign: "justify" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 30,
                textAlign: "justify",
              }}
            >
              Awards & Recognition
            </Typography>

            <Typography style={{ marginTop: 10, textAlign: "justify" }}>
              » Lifetime Achievement Award by Air Cargo Club of Bombay for
              overall contribution to Industry, Feb 2020.
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              » Rashtriya Udyog Ratan Award in Delhi for contribution to
              Aviation Industry, Feb 2021.
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              » General Sales Agent of the Year International for excellence in
              Air Cargo, 5 times consecutively from 2012-2020, by Stat Trade
              Times Leadership.
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              » Chairman of Plastics Export Promotion Council of India
              (PLEXCONCIL).
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              » Nati Ratna Puraskar by Shree Ghoghari Lohana Mahajan – Mumbai,
              Nov 2022.
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              » Recognized for distinguished services & contribution to ACAAI
              Convention in Istanbul.
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              » Numerous awards from customer Airlines for outstanding
              commitment & contribution.
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              » His enduring belief in the profound impact of human capital has
              catalyzed enduring international alliances.
            </Typography>
          </Box>
        </Row>
      </Container>

      <Container style={{ marginTop: 30 }}>
        <Row>
           <AnimatedCol className={` ${animationClassLeft}`} style={{ marginLeft: 10 }}>
            <Image
              src="https://cdn-fdkig.nitrocdn.com/AywaxOjUfFsIziAItTGgLIIuUTWWuYxf/assets/images/optimized/rev-298d1aa/riainstitute.co.in/wp-content/uploads/2021/10/illustration-2.png"
              style={{ height: "500px", width: "auto" }}
            />
          </AnimatedCol>

         <AnimatedCol className={` ${animationClassRight}`}>
            <Typography style={{ marginTop: 20, fontWeight: "bold" }}>
              Take A Step Towards Reaching Your Goals
            </Typography>

            <Typography style={{ marginTop: 10,textAlign: "justify" }}>
              RIA Institute of Technology is a leader in providing Job oriented
              IT, non IT, Academic and Language training courses in Bangalore.
              Our Institute has helped 1000s of aspirants to get the right job
              based on their career requirements.
            </Typography>

            <Typography style={{ marginTop: 10,textAlign: "justify" }}>
              Our course curriculum is robustly designed to make students ready
              for their dream job. All modules within each course are carefully
              chosen and shortlisted to match respective industry standards to
              ensure our students have higher chances of getting access to
              online & offline courses, learn any skill and gain knowledge the
              job.
            </Typography>

            <Typography style={{ marginTop: 10, textAlign: "justify"}}>
              Whether it is gain knowledge or to enhance existing skill to
              increase your credibility with a view to grow in your career,
              choosing the right training institute is essential. You need a
              Training Institute that will be a good investment for your money,
              time, and reputation. In short, you need a Best IT & Non IT
              Training Institute in Bangalore that will make you time spent a
              safe proposition and RIA Institute of Technology is that name.
            </Typography>
       </AnimatedCol>
        </Row>
      </Container>

      <Grid style={{ paddingTop: 20 }}>
        <Footer />
      </Grid>
    </div>
  );
};

export default AboutUs;
