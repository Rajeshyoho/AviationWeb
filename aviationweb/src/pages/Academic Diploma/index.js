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

const DiplomaCourse = () => {
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
            <Navbar.Brand href="#home"> Diploma Courses </Navbar.Brand>
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
          <Breadcrumb.Item href="#">Academic</Breadcrumb.Item>
        </Breadcrumb>
      </Grid>

      <Container>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
          }}
        >
          <Grid
            style={{
              backgroundColor: "#cfc6f1",
            }}
          >
            <Typography
              variant="h4"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                fontWeight: "bold",
              }}
            >
              Welcome To Diploma Flight School
            </Typography>
            {/* <br/> */}
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Discover How Your Career Can Take Flight
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              The Airport opened in 1963. It was transferred from Transport
              Canada to the Pitt Meadows Airport Society effective Keep. The
              Society owns and operates the airport and, as a not-for-profit
              organization, reinvests all earnings back in order to improve the
              airport for the community. In as act now spaces fill up quickly!
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <div style={{ marginTop: 20 }}>
        <Container>
          <Typography
            style={{
              color: "#122F90",
              fontWeight: "bold",
              fontFamily: "initial",
            }}
          >
            ACADEMY OF AVIATION'S INTERNATIONAL STUDENT NETWORK
          </Typography>
          <Divider style={{ borderBottom: "2px solid #122F90" }} />

          <Typography sx={{ textAlign: "justify", marginTop: 2 }}>
            Diploma in Aviation is a full time diploma level course for a
            duration of 6 Months- 1 Year that deals with the management of
            airports and aviation. Know More: Aviation Course The minimum
            eligibility for pursuing a diploma in aviation is 10+2 or equivalent
            from a recognized board. They must secure at least 50 percent marks
            in class 12 exam. The admission to the course is done on the basis
            of score in 10+2, followed by a personal interview. The average fee
            for the diploma in Aviation course ranges from INR 60,000 to INR
            85,000 in a year depending on colleges. Some of the top colleges are
            Vasundhara Aviation Academy, VAA, Bhopal, Trade Wings Institution of
            Management- TIM, Mumbai, Trade Wings Institution of Management- TIM,
            Kolkata, Institute of Logistics and Aviation Management, Bangalore,
            etc. Check: Diploma in Aviation Top Colleges Candidates are taught
            16 different subjects through this one year program, such as
            Mathematics, Cognitive Process and Problem Solving, Organizational
            Behavior, Operations Planning, Distribution and Transportation, etc.
            Diploma in Aviation is a popular course for the candidates who want
            their career in the management and operations in the Aviation
            industry. The jobs available to the candidates after a Diploma in
            Aviation are Aircraft dispatcher, air station manager, cabin crew,
            Airline executive/manager, Air Traffic control officer etc. The
            average salary offered to professional ranges between INR 3 to INR 6
            LPA. Some of the top recruiting companies are British Airways, DHL,
            Essar Shipping, GMR, Indigo etc.
          </Typography>
        </Container>
      </div>

      <Grid
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ marginTop: 20, display: "flex" }}
      >
        <Container style={{ display: "flex" }}>
          <Row>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.academyofaviation.com/images/site-images/aoa-alumni-rejaul-eric.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    BEYOND INDIA
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://5.imimg.com/data5/YZ/QX/YP/SELLER-14684481/aviation-management-training-in-hyderabad-500x500.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    THE ROTARY CLUB 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.academyofaviation.com/assets/img/academy-of-aviation-international-student-ugochukwu.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    UNITED AIRLINES
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.academyofaviation.com/images/site-images/aoa-graduate-pilots-2.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    AOA CERTIFIED
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </Grid>

      <div style={{marginTop:20}}>
        <Footer/>
      </div>
    </>
  );
};

export default DiplomaCourse;
