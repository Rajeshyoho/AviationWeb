import { Grid, Typography } from "@mui/material";
import { React } from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

const JobOpportunities = () => {
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
            <Navbar.Brand href="#home">Job Opportunities</Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#academic">Academic</Nav.Link>
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

      <Container fluid>
        <img
          style={{
            height: "400px",
            width: "100%",
            margin: "-40px",
            marginLeft: "auto",
          }}
          src="https://www.slideteam.net/wp/wp-content/uploads/2020/05/Integrated-Structure-Of-Aviation-Business--1001x563.png"
        />
      </Container>

      <div>
        <Container style={{ marginTop: 20 }}>
          <Row xs={1} md={2}>
            <Col>
              <Typography
                style={{
                  fontFamily: "initial",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                AIRCRAFT MAINTENANCE & COST CONTROL
              </Typography>
              <br />
              <p>
                Aviation is one of the crucial factors behind globalization.
                Connecting people, and trade across the world, the aviation
                industry has continued to develop and has become a much-needed
                means of transport. The aviation industry enables millions of
                people to travel globally and hence helps them to engage in
                cultural exchange. Aviation provides a quick global
                transportation network, which facilitates international business
                with ease. It encourages economic growth, generates jobs,
                facilitates international trade, and boosts the tourism industry
                to a great extent.
              </p>
              <p>
                The development of the aviation industry in recent times and its
                achievements make it one of the biggest factors in the
                advancement of today’s society. Here we have curated 25+ Best
                Aviation PowerPoint Templates designed by SlideTeam
                professionals. Download these pre-designed aviation templates to
                showcase the major contribution of the aviation industry in
                global economic prosperity.
              </p>
            </Col>

            <Col>
              <div style={{ position: "relative" }}>
                <video width="100%" autoPlay muted loop poster="">
                  <source
                    src="https://www.iata.org/globalassets/iata/training/subject-area/Hero_sa-law-regulation/"
                    type="video/mp4"
                  />
                </video>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                  }}
                >
                  <h3> Welcome To Associate & Regulations Flight School</h3>
                  <p>Discover How Your Career Can Take Flight.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ marginTop: 10 }}>
        <Container>
          <Typography
            variant="h2"
            style={{
              fontFamily: "initial",
              fontWeight: "bold",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            Job Opportunities
          </Typography>
          <Typography style={{ marginTop: 10 }}>
            Aviation is one of the fastest-growing industries of the
            contemporary world. It is only the fastest worldwide transportation
            network available facilitates the movement of global business.Here
            are the average salary figures of top Aviation careers in India:
          </Typography>
        </Container>
      </div>

      <div style={{ marginTop: 10 }}>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th>Aviation Career</th>
                <th>Average Salary </th>
                <th>[Entry-level to Experienced]</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Commercial Pilot</td>
                <td>₹1.5 Lakhs to ₹6 Lakhs per month</td>
                <td>1 to 3 Years </td>
              </tr>
              <tr>
                <td>Aviation Maintenance Engineer</td>
                <td>₹1.5 Lakhs to ₹24 Lakhs</td>
                <td>1 to 3 Years</td>
              </tr>
              <tr>
                <td>Flight Engineer</td>
                <td>₹2 Lakhs to ₹11 Lakhs</td>
                <td>1.5 to 3.5 Years</td>
              </tr>

              <tr>
                <td>Air Traffic Controller</td>
                <td>₹4 Lakhs to ₹9 Lakhs</td>
                <td>2 to 4.5 Years</td>
              </tr>
              <tr>
                <td>Aviation Manager</td>
                <td>₹2 Lakhs to ₹30 Lakhs</td>
                <td>4 to 7.5 Years</td>
              </tr>
              <tr>
                <td>Aerospace Engineer</td>
                <td>₹7 Lakhs to ₹9 Lakhs</td>
                <td>4 to 9 Years</td>
              </tr>
              <tr>
                <td>Quality Control Officer</td>
                <td>₹3 Lakhs to ₹7 Lakhs</td>
                <td>1 to 3.5 Years</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>

      <div style={{marginTop:10}}>
        <Container>
          <Typography>
            As one of the most popular fields, there are an array of courses and
            training programs that one can choose from in order to build a
            career in Aviation after 12th. Here are the most popular bachelor’s
            courses to begin a career in Aviation...!
          </Typography>
        </Container>
      </div>

      <div style={{marginTop:10}}>
        <Footer/>
      </div>
    </>
  );
};

export default JobOpportunities;
