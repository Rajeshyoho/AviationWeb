import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Footer from "../../components/Footer";
import {Grid} from "@mui/material";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";

const TrainingProgram = () => {

    const logo = require("../../Images/logo3.png");


  const clampStyle = {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    opacity:0.6,
    fontSize:"15px",
    fontWeight:"Bold"
  };

  const dummyData = [
    {
      id: 1,
      title: "Angular Training",
      imageUrl: "https://cdn-icons-png.flaticon.com/128/11021/11021901.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      totalLearners: 30,
      duration: "30 Hours",
    },
    {
        id: 2,
        title: "Angular Training",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/11021/11021901.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        totalLearners: 30,
        duration: "30 Hours",
      },
      {
        id: 3,
        title: "Angular Training",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/11021/11021901.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        totalLearners: 30,
        duration: "30 Hours",
      },
      {
        id: 4,
        title: "Angular Training",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/11021/11021901.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        totalLearners: 30,
        duration: "30 Hours",
      },
      {
        id: 5,
        title: "Angular Training",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/11021/11021901.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        totalLearners: 30,
        duration: "30 Hours",
      },
      {
        id: 6,
        title: "Angular Training",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/11021/11021901.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        totalLearners: 30,
        duration: "30 Hours",
      },
      {
        id: 7,
        title: "Angular Training",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/11021/11021901.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        totalLearners: 30,
        duration: "30 Hours",
      },
      {
        id: 8,
        title: "Angular Training",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/11021/11021901.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        totalLearners: 30,
        duration: "30 Hours",
      },
      {
        id: 9,
        title: "Angular Training",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/11021/11021901.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        totalLearners: 30,
        duration: "30 Hours",
      },
  ];

  const [cardHoverStates, setCardHoverStates] = useState(
    Array(dummyData.length).fill(false)
  );

  const handleCardHover = (index) => {
    const newHoverStates = [...cardHoverStates];
    newHoverStates[index] = true;
    setCardHoverStates(newHoverStates);
  };

  const handleCardLeave = (index) => {
    const newHoverStates = [...cardHoverStates];
    newHoverStates[index] = false;
    setCardHoverStates(newHoverStates);
  };

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
            <Navbar.Brand href="#home">Traning programmes</Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Grid>

      <Grid style={{ padding: 5 }}>
        <Breadcrumb
          style={{ backgroundColor: "#FFFFFF", textDecoration: "none" }}
        >
          <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">ASDHEC Logo</Breadcrumb.Item>
        </Breadcrumb>
      </Grid>

      <Container>
        <Row>
          <Col>
            <h2
              style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                opacity: 0.8,
                marginTop:"20px",

              }}
            >
              Aviation Training Institute
            </h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <p
              style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                opacity: 0.8,
                marginTop:"20px",

              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p
              style={{
                marginTop:"20px",
                textAlign: "center",
                fontFamily: "sans-serif",
                opacity: 0.8,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p
              style={{
                marginTop:"20px",
                textAlign: "center",
                fontFamily: "sans-serif",
                opacity: 0.8,
              }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage{" "}
            </p>
          </Col>
        </Row>
      </Container>

      <div style={{ backgroundColor: "#25183e",marginTop:"40px" }}>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {dummyData.map((item, idx) => (
              <Col key={item.id}>
                <Card
                  style={{
                    marginTop: "40px",
                    marginBottom: "10px",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)", // You can adjust the scale factor
                    },
                    // transition: "transform 0.3s",
                    // transform: cardHoverStates[idx] ? "scale(1.05)" : "scale(1)",
                    // cursor: "pointer", 
                  }}
                  onMouseEnter={() => handleCardHover(idx)}
                  onMouseLeave={() => handleCardLeave(idx)}
                >
                  <Card.Body style={{ padding: "30px" }} >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        marginTop: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        style={{ height: 40, width: 40 }}
                        src={item.imageUrl}
                      />
                      <Card.Title
                        style={{
                          paddingLeft: "20px",
                          opacity: 0.8,
                          fontWeight: "Bold",
                        }}
                      >
                        {item.title}
                      </Card.Title>
                    </div>
                    <Card.Text style={clampStyle}>{item.description}</Card.Text>
                    <div style={{ marginTop: "40px", marginBottom: "30px" }}>
                      <div style={{ display: "flex" }}>
                        <Card.Text style={{opacity:0.8}}>Total Learner :</Card.Text>
                        <Card.Text style={{ paddingLeft: "20px",opacity:0.8 }}>
                          {item.totalLearners} Learners
                        </Card.Text>
                      </div>
                      <div style={{ display: "flex" }}>
                        <Card.Text style={{opacity:0.8}}> Duration :</Card.Text>
                        <Card.Text style={{ paddingLeft: "20px" ,opacity:0.8}}>
                          {item.duration}
                        </Card.Text>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button>VIEW COURSE</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div style={{marginTop:20}}>
      <Footer/>
      </div>  
    </>
  );
};

export default TrainingProgram;