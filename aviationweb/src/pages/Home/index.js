import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  Link, 
} from "@mui/material";
import Slider from "react-slick";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NavBar from "../../components/NavBar";
import SliderCarousel from "../../components/SliderCarousel";
import styled from "@emotion/styled";
import MarqueeContainer from "../../components/Marquee";
import { Image } from 'react-bootstrap';


const StyledButton = styled(Card)(({ theme, color = 'primary' }) => ({
  ':hover': {
    color: theme.palette[color].main,
    backgroundColor: 'white',
  },
}));

const Home = () => {
  const settings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const logo = require('../../Images/asdhec1.png');
  return (
    <Grid sx={{mx:1}}>
      <Grid sx={{justifyContent:"center",alignItems:"center",display:"flex",my:1}}>
      <Image className='img-fluid' style={{ height: 180, width: 320 }} src={logo} />
      </Grid>
      <NavBar/>
      <SliderCarousel/>
      <Grid container spacing={4} sx={{ marginTop: 0, padding: 5 }}>
        <Grid lg={3} xs={12}>
          <Box sx={{ marginRight: 3 }}>
            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                 sx={{
                  ':hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                }}
                  variant="outlined"
                  style={{
                    padding: "15px 10px",
                    fontsize: "16px",
                    textAlign: "start",
                  }}
                >
                  Associate Portal
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    ':hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    minWidth: 200,
                    // margintop: "10px"
                    padding: "15px 10px",
                    fontsize: "16px",
                    textAlign: "start",
                  }}
                  variant="outlined"
                >
                  Online Payment- Portal
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    ':hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    minWidth: 200,
                    // margintop: "10px"
                    padding: "15px 10px",
                    fontsize: "16px",
                    textAlign: "start",
                  }}
                  variant="outlined"
                >
                  E- Content
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                 sx={{
                  ':hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                  minWidth: 200,
                  // margintop: "10px"
                  padding: "15px 10px",
                  fontsize: "16px",
                  textAlign: "start",
                }}
                  variant="outlined"
                >
                  E- Certification
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    ':hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    minWidth: 200,
                    // margintop: "10px"
                    padding: "15px 10px",
                    fontsize: "16px",
                    textAlign: "start",
                  }}
                  variant="outlined"
                >
                  Student Portal
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                 sx={{
                  ':hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  },
                  minWidth: 200,
                  // margintop: "10px"
                  padding: "15px 10px",
                  fontsize: "16px",
                  textAlign: "start",
                }}
                  variant="outlined"
                >
                  Online - Registration
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                   sx={{
                    ':hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    minWidth: 200,
                    // margintop: "10px"
                    padding: "15px 10px",
                    fontsize: "16px",
                    textAlign: "start",
                  }}
                  variant="outlined"
                >
                  Certificate Verfication
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    ':hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    minWidth: 200,
                    // margintop: "10px"
                    padding: "15px 10px",
                    fontsize: "16px",
                    textAlign: "start",
                  }}
                  variant="outlined"
                >
                  Aviation Career Gudience
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                   sx={{
                    ':hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    minWidth: 200,
                    // margintop: "10px"
                    padding: "15px 10px",
                    fontsize: "16px",
                    textAlign: "start",
                  }}
                  variant="outlined"
                >
                  Aviation Accademic Year Counselling
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                   sx={{
                    ':hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    minWidth: 200,
                    // margintop: "10px"
                    padding: "15px 10px",
                    fontsize: "16px",
                    textAlign: "start",
                  }}
                  variant="outlined"
                >
                  Aviation job Portal
                </Card>
              </a>
            </Grid>
          </Box>
        </Grid>

        <Grid lg={3} sx={12}>
          <Card sx={{ marginRight: 3 }}>
            <Box
              sx={{
                border: "0.5 px",
                backgroundColor: "grey",
                borderBottomRightRadius: 30,
                width: { xs: "100%", lg: "90%" },
                borderTopWidth: "3 px",
                borderTopColor: "blue",
              }}
            >
              <Typography color="white" padding={1}>
                RESOURCES
              </Typography>
            </Box>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  marginTop: 2,
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }}>
                  University Act and Statutes
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Application Forms
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Orders / Circulars
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Old Question Papers
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Downloads
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Guidelines
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Academic Calendar
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Annual Reports
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Minutes
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Institutional Data (NIRF)
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  ARIIA Report
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Annual Accounts
                </Typography>
              </Box>
            </Link>
          </Card>

          <Card sx={{ marginRight: 3, marginTop: 3 }}>
            <Box
              sx={{
                border: "0.5 px",
                backgroundColor: "grey",
                borderBottomRightRadius: 30,
                width: { xs: "100%", lg: "90%" },
                borderTopWidth: "3 px",
                borderTopColor: "blue",
              }}
            >
              <Typography color="white" padding={1}>
                ANNOUNCEMENTS
              </Typography>
            </Box>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  marginTop: 2,
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }}>
                  Covid-19 Period and After -
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Report
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Press Release
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Job Notifications
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Tenders
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  News
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Election Notification
                </Typography>
              </Box>
            </Link>
          </Card>
        </Grid>

        <Grid lg={3} xs={12}>
          <Card sx={{ marginRight: 3 }}>
            <Box
              sx={{
                border: "0.5 px",
                backgroundColor: "grey",
                borderBottomRightRadius: 30,
                width: { xs: "100%", lg: "90%" },
                borderTopWidth: "3 px",
                borderTopColor: "blue",
              }}
            >
              <Typography color="white" padding={1}>
                EXAMINATION
              </Typography>
            </Box>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  marginTop: 2,
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }}>Registration</Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Notifications
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Time Table
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Fee Structure
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Results
                </Typography>
              </Box>
            </Link>
          </Card>

          <Card sx={{ marginRight: 3, marginTop: 3 }}>
            <Box
              sx={{
                border: "0.5 px",
                backgroundColor: "grey",
                borderBottomRightRadius: 30,
                width: { xs: "100%", lg: "90%" },
                borderTopWidth: "3 px",
                borderTopColor: "blue",
              }}
            >
              <Typography color="white" padding={1}>
                GENERAL
              </Typography>
            </Box>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  marginTop: 2,
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }}>Departments</Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  School of Distance Education
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  KU Padasala
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  CSS
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  IQAC
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Internal Complaints Committee
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Grievance Redressal
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Image Gallery
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  A-Z index
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Instrumentation Facility (CLIF)
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Important Links
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Site map
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Fee Details
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  RTI
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  CMO Portal
                </Typography>
              </Box>
            </Link>

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  FAQs
                </Typography>
              </Box>
            </Link>
          </Card>
        </Grid>

        <Grid item lg={3} xs={12}>
   <MarqueeContainer/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;