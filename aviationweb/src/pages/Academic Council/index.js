import { Grid } from "@mui/material";
import { React } from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../components/Accademic.css";
import Footer from "../../components/Footer";

const AcademicsCouncil = () => {
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
            <Navbar.Brand href="#home">
              Associate Institute /Colleges{" "}
            </Navbar.Brand>
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

      <div>
        <div
          style={{
            backgroundColor: "#083a59",
            minHeight: "187px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "54px",
              color: "#ffffff",
              paddingLeft: "50px",
              paddingBottom: "10px",
              fontFamily: "revert",
            }}
          >
            Academic Council
          </h2>
          <p
            style={{
              color: "#ffffff",
              paddingLeft: "50px",
              fontSize: "20px",
              paddingTop: "10px",
              marginBottom: "20px",
              fontFamily: "revert",
            }}
          >
            The Academic Council of Krea University, chaired by the
            Vice-Chancellor reviews plans, policies and budgets of the
            University from an academic perspective, including research,
            curriculum, pedagogy and regulatory matters
          </p>
        </div>
        <div className="container-fluid">
          <div className="row my-1">
            {[1, 2, 3, 4, 5, 6, ].map((index) => (
              <div key={index} className="col-md-3">
                <div className="card my-2" style={{ padding: 0 }}>
                  <div className="rot-card text-center">
                    <div className="rot-card-inner">
                      {/* Front of card */}
                      <div className="rot-card-front">
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          style={{ height: "100%" }}
                        >
                          <img
                            src="https://krea.edu.in/wp-content/uploads/2022/08/35J7435-BW-500x500.jpg.webp"
                            className="opac"
                            alt="Front"
                          />
                          <h3 className="card-title py-4">Lakshmi Devi</h3>
                          <h6>Research Associate</h6>
                        </div>
                      </div>
                      {/* Back of card */}
                      <div
                        className="rot-card-back"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <div className="mt-4">
                          <h3 className="text-center">Professor Nirmala Rao</h3>
                          <p style={{ letterSpacing: 1.5 }}>CHAIR</p>
                          <a
                            className="btn btn-proj mt-n3"
                            href="#Home"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="https://cdn-icons-png.flaticon.com/128/455/455691.png"
                              style={{ height: "40px", width: "40px" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default AcademicsCouncil;
