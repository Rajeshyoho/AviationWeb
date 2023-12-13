import React from "react";
import { Grid, Typography } from "@mui/material";
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

const ActsStatus = () => {
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

      {/* <Grid style={{ padding: 5}}>
        <Breadcrumb style={{backgroundColor: "#FFFFFF",textDecoration:"none"}}>
          <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Acts & Status</Breadcrumb.Item>
        </Breadcrumb>
      </Grid> */}
 
 
      <Grid>
        <Container
          fluid
          style={{
            background: "linear-gradient(90deg, #9464aa 0%, #f7f6fb 100%)",
            padding: 10,
          }}
        >
          <Row xs={1} md={2}>
            <Col>
              <Image
                src="https://icp.gov.ae/wp-content/uploads/2020/10/%D8%A5%D9%82%D8%A7%D9%85%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D8%B1%D9%82%D8%A9-3-1-scaled.jpg"
                alt="Aviation"
                fluid
              />
            </Col>
            <Col>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 30,
                  fontFamily: "initial",
                  marginTop: 4,
                  textAlign:"justify"
                }}
              >
                Acts & Status
              </Typography>
              <p style={{textAlign:"justify",padding:2}}>
              A firm believer in the power of people, Mr. Vithalani fosters a
              familial environment within the company, cultivating a dynamic
              team where relationships flourish and excellence is a way of life.
              His enduring belief in the profound impact of human capital has
              catalyzed enduring international alliances, solidifying The Global
              Group’s global recognition and unassailable goodwill. Today, the
              Global Group, under Mr. Vithalani’s exemplary leadership, stands
              as a testament to ethical business practices, unyielding
              commitment to service excellence, and unwavering values. His
              influence has permeated every facet of the organization,
              establishing it as a revered force in the aviation landscape. We
              are dedicated to fostering an integrated vision that prioritizes
              the symbiotic relationship between our esteemed clients and our
              array of services. Our mission is to continually elevate business
              efficiency through collaborative partnerships and tailored
              solutions. With an unwavering commitment to integrity and
              personalized attention, we nurture a culture of enterprise that
              thrives on strategic growth and transparent dealings. Our
              dedication is directed towards providing a seamless customer
              experience, ensuring that each client’s requirements are not just
              met, but exceeded.
              </p>
            </Col>
          </Row>
        </Container>
      </Grid>

      <Grid>
        <Container>
          <Row>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "25px",
                fontFamily: "initial",
                textAlign: "center",
                marginTop: 2,
              }}
            >
              Regulatory Framework
            </Typography>
            <Col xs={12} md={6} style={{ marginTop: 15 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 20,
                  fontFamily: "initial",
                }}
              >
                Domestic Law
              </Typography>
              <Typography>
                The primary domestic legislations governing the aviation
                industry:
                <br />
                (1) The Aircraft Act, 1934 empowers the federal government to
                make rules for regulating the manufacture, sale, use, operation,
                export, import and safety of all civil aircraft.
                <br />
                (2) The Aircraft Rules, 1937 deals with flying conditions,
                registration, airworthiness and licences, among other things.
                <br />
                (3) The Civil Aviation Requirements set out detailed
                requirements and compliance procedures in order to
                <br />
                (a) fulfil the duties and obligations of India under the Chicago
                Convention relating to international civil aviation;
                <br />
                (b) standardize and harmonies requirements, taking into account
                the rules and regulations of other regulatory authorities;
                <br />
                (c) implement the recommendations of the courts of inquiry or
                any other committee constituted by the federal government; and
                <br />
                (d) address issues relating to the import, registration, safety
                and certification of aircraft operations.
                {/* <br />
                (e) Other legislation relevant to Indian civil aviation
                includes. */}
              </Typography>
            </Col>
            <Col xs={12} md={6} style={{ marginTop: 25 }}>
              <Image
                src="https://static.vecteezy.com/system/resources/previews/027/747/050/non_2x/airplane-taking-off-at-dusk-flying-towards-a-beautiful-sunset-generated-by-ai-free-photo.jpg"
                alt="Aviation"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </Grid>

      <Grid style={{ paddingTop: 20 }}>
        <Footer/>
      </Grid>
    </>
  );
};

export default ActsStatus;
