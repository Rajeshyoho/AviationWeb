import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Grid } from "@mui/material";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";

const Colleges = () => {
  const logo = require("../../Images/logo3.png");

  const [showFullText, setShowFullText] = useState(false);

  const cardData = [
    {
      title: "A.K. Chanda Law College",
      type: "Private",
      image:
        "https://heis-rusa.assam.gov.in/uploads/college/photo/institution_photo_GCPRNN195901_1641898312.png",
      description:
        "A.K.Chanda Law College is one of the oldest Law College in Assam, established in 1960 in the memories of Freedom Fighter and Social Worker Arun Kumar Chanda. It is located in Tarapur, Silchar, Cachar, Assam. It is a non-religious and public institution and students hail from different parts of North-East. Through its persuit, the College endeavours to make itself an institute of excellence. The College has produced many Lawyers and Judges. Besides teaching and learning, it is actively involved in rendering free legal service to the needy and poor. Moot Court and Legal Aid Clinic is also formed .",
    },
    {
      title: "Abhyapuri College",
      type: "Provincialized",
      image:
        "https://heis-rusa.assam.gov.in/uploads/college/photo/institution_photo_GCPRKM195801_1627887420.png",
      description:
        "bhayapuri College, situated at Abhayapuri town, is one of the oldest institutions of higher education in lower Assam. The College was established on 13 August 1955. Currently the college has two streams, Science and Arts, and is affiliated to the Gauhati University.",
    },
    {
      title: "Abhyapuri College",
      type: "Provincialized",
      image:
        "https://heis-rusa.assam.gov.in/uploads/college/photo/institution_photo_GCPRGP199606_1664435029.png",
      description:
        "bhayapuri College, situated at Abhayapuri town, is one of the oldest institutions of higher education in lower Assam. The College was established on 13 August 1955. Currently the college has two streams, Science and Arts, and is affiliated to the Gauhati University.",
    },
    {
      title: "Abhyapuri College",
      type: "Provincialized",
      image:
        "https://heis-rusa.assam.gov.in/uploads/college/photo/institution_photo_GCPRHA199602_1640680305.png",
      description:
        "bhayapuri College, situated at Abhayapuri town, is one of the oldest institutions of higher education in lower Assam. The College was established on 13 August 1955. Currently the college has two streams, Science and Arts, and is affiliated to the Gauhati University.",
    },
    {
      title: "Abhyapuri College",
      type: "Provincialized",
      image:
        "https://heis-rusa.assam.gov.in/uploads/college/photo/institution_photo_GCPRSV196705_1645089886.png",
      description:
        "bhayapuri College, situated at Abhayapuri town, is one of the oldest institutions of higher education in lower Assam. The College was established on 13 August 1955. Currently the college has two streams, Science and Arts, and is affiliated to the Gauhati University.",
    },
    {
      title: "Abhyapuri College",
      type: "Provincialized",
      image:
        "https://heis-rusa.assam.gov.in/uploads/college/photo/institution_photo_GCPVBJ200403_1640673077.png",
      description:
        "bhayapuri College, situated at Abhayapuri town, is one of the oldest institutions of higher education in lower Assam. The College was established on 13 August 1955. Currently the college has two streams, Science and Arts, and is affiliated to the Gauhati University.",
    },
    {
      title: "Abhyapuri College",
      type: "Provincialized",
      image:
        "https://heis-rusa.assam.gov.in/uploads/college/photo/institution_photo_GCPVKJ201306_1657777190.png",
      description:
        "bhayapuri College, situated at Abhayapuri town, is one of the oldest institutions of higher education in lower Assam. The College was established on 13 August 1955. Currently the college has two streams, Science and Arts, and is affiliated to the Gauhati University.",
    },
    {
      title: "Abhyapuri College",
      type: "Provincialized",
      image: "https://wallpapercave.com/dwp1x/wp12957236.jpg",
      description:
        "bhayapuri College, situated at Abhayapuri town, is one of the oldest institutions of higher education in lower Assam. The College was established on 13 August 1955. Currently the college has two streams, Science and Arts, and is affiliated to the Gauhati University.",
    },
    {
      title: "Abhyapuri College",
      type: "Provincialized",
      image: "https://wallpapercave.com/dwp1x/wp12957247.jpg",
      description:
        "bhayapuri College, situated at Abhayapuri town, is one of the oldest institutions of higher education in lower Assam. The College was established on 13 August 1955. Currently the college has two streams, Science and Arts, and is affiliated to the Gauhati University.",
    },
  ];

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const getOpacity = (lineNumber) => {
    const maxOpacity = 0.8;
    const minOpacity = 0.3;
    const opacityStep = (maxOpacity - minOpacity) / 7;
    return maxOpacity - Math.min(lineNumber + 1, 7) * opacityStep; // Adjusted here
  };

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

      {/* <Grid style={{ padding: 10 }}>
        <Breadcrumb
          style={{ backgroundColor: "#FFFFFF", textDecoration: "none" }}
        >
          <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">ASDHEC Logo</Breadcrumb.Item>
        </Breadcrumb>
      </Grid> */}

      <div>
        <Row
          style={{
            position: "relative",
            backgroundImage:
              'url("https://heis-rusa.assam.gov.in/website/img/banner/bradcam.png")',
            backgroundSize: "cover",
            minHeight: "300px",
          }}
        >
          <Col
            className="overlay-text"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h1
              style={{
                color: "white",
                fontFamily: "cursive",
                fontSize: "50px",
                fontWeight: "bold",
                paddingLeft: "50px",
              }}
            >
              Colleges
            </h1>
          </Col>
        </Row>
      </div>

      <Container>
        <Row style={{ marginTop: "40px" }}>
          <Col>
            <p
              style={{
                color: "#ff1b51",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "17px",
              }}
            >
              At present data of 605 colleges are uploaded in the system which
              includes NAAC A, B++, B+ grade colleges, NIRF ranking/applied
              colleges, colleges under Bodoland University & New MDCs under RUSA
              Assam
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row style={{ marginTop: "40px" }}>
          <Col>
            <h2
              style={{
                borderBottom: "3px solid #7c8487",
                paddingBottom: "10px",
                color: "#234262",
                textTransform: "uppercase",
                fontWeight: "bolder",
                fontSize: "30px",
              }}
            >
              LIST OF ALL COLLEGES
            </h2>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row style={{ marginTop: "40px" }}>
          <Col>
            <InputGroup className="mb-3">
              <Form.Control
                style={{ border: "2px solid #697078" }}
                placeholder="Enter the name of the College"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
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
                Search College
              </button>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "40px" }}>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} md={6} lg={3} style={{ marginBottom: "40px" }}>
              <Card
                sx={{
                  maxWidth: 250,
                  border: "2px solid #b0b0b0",
                  borderRadius: "10px",
                  "&:hover": {
                    border: "2px solid #234262",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={card.image}
                  title={card.title}
                />
                <CardContent>
                  <Typography
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#234262",
                      padding: "0px",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontWeight: "bold", fontSize: "14px" }}
                  >
                    {card.type}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: showFullText ? 7 : 5,
                      WebkitBoxOrient: "vertical",
                      cursor: "pointer",
                      marginTop: "15px",
                    }}
                    onClick={toggleText}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    style={{
                      color: "#0e2246",
                      border: "2px solid #0e2246",
                      fontWeight: "800",
                      fontSize: "12px",
                      opacity: "0.7",
                    }}
                  >
                    VIEW DETAILS
                  </Button>
                </CardActions>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Colleges;
