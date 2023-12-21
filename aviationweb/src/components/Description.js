// CardList.js
import { Card, Grid, Typography, Chip } from "@mui/material";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { WiDirectionRight } from "react-icons/wi";
import { styled } from "@mui/material/styles";
// import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FaceIcon from "@mui/icons-material/Face";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoInfiniteSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineFace } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import "../components/DesignationPosition.css"

const Description = ({ cards }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      {cards.map((card) => (
        <div>
          <Container>
            <Card
              sx={{
                border: "2px solid gray",
                marginTop: 3,
                width: "100%",
                padding: "10px",
              }}
            >
              <Row>
                <Col md={4}>
                  <div style={{ position: "relative", overflow: "hidden",touchAction: "manipulation"}}>
                    <Image
                      src={card.image}
                      style={{
                        height: "230px",
                        width: "100%",
                        transition: "transform 0.5s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      onTouchStart={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                      onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                </Col>

                <Col>
                  <Typography
                    variant="h2"
                    style={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      textDecoration: "underline",
                      fontFamily: "initial",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    {card.title}
                  </Typography>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Chip
                      icon={
                        <FaRegCalendarAlt
                          style={{
                            backgroundColor: "#edf2fa",
                            color: "#132683",
                          }}
                        />
                      }
                      label="EveryDay or Weekend"
                      sx={{
                        marginTop: 2,
                        marginLeft: 1,
                        backgroundColor: "#edf2fa",
                        color: "#132683",
                      }}
                    />
                    <Chip
                      icon={
                        <MdOutlineFace
                          style={{
                            backgroundColor: "#edf2fa",
                            color: "#132683",
                          }}
                        />
                      }
                      label="Open to beginners"
                      sx={{
                        marginTop: 2,
                        marginLeft: 1,
                        backgroundColor: "#edf2fa",
                        color: "#132683",
                      }}
                    />
                    <Chip
                      icon={
                        <IoInfiniteSharp
                          style={{
                            backgroundColor: "#edf2fa",
                            color: "#132683",
                          }}
                        />
                      }
                      label="Financing available"
                      sx={{
                        marginTop: 2,
                        marginLeft: 1,
                        backgroundColor: "#edf2fa",
                        color: "#132683",
                      }}
                    />
                    <Chip
                      icon={
                        <GrUserManager
                          style={{
                            backgroundColor: "#edf2fa",
                            color: "#132683",
                          }}
                        />
                      }
                      label="1:1 Mentoring"
                      sx={{
                        marginTop: 2,
                        marginLeft: 1,
                        backgroundColor: "#edf2fa",
                        color: "#132683",
                      }}
                    />
                  </div>

                  <p style={{ marginTop: "10px" }}>{card.description}</p>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button class="custom-btn btn-11"><span>Read More</span></button>
                    <Chip
                      icon={<MdTimer />}
                      label="Full Time-Duration"
                      sx={{}}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default Description;
