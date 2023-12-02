import React, { useState, useEffect } from "react";
import { Box, Card, Grid, Typography, Link } from "@mui/material";
import Slider from "react-slick";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import NavBar from "../../components/NavBar";
import SliderCarousel from "../../components/SliderCarousel";
import styled from "@emotion/styled";
import MarqueeContainer from "../../components/Marquee";
import { Image } from "react-bootstrap";
import Footer from "../../components/Footer";
import CallEndIcon from "@mui/icons-material/CallEnd";
import HorizontalMarquee from "../../components/HorizontalMarquee";
import FlishNews from "../../components/FlishNews";
import WeatherWidget from "../../components/Weather";

const StyledButton = styled(Card)(({ theme, color = "primary" }) => ({
  ":hover": {
    color: theme.palette[color].main,
    backgroundColor: "white",
  },
}));



const Home = () => {


  const [parentWidth, setParentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setParentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const settings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const logo = require('../../Images/logo3.png');
  const slides = [
    { url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D", title: "beach" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBW1TbkfDSuicfILo2MGpQ9EL9yRm6Niul8kAoVvCa&s", title: "boat" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_1a_FiD8PTPidf2tOyKiNNKOFUU7M0DxaF0Uu4Sp&s", title: "forest" },
    { url: "https://i.pinimg.com/originals/24/d7/9f/24d79f3329b466ede30d3b0e7d0d9116.jpg", title: "city" },
    { url: "https://wallpapercave.com/uwp/uwp3844886.jpeg", title: "italy" },
  ];
  const containerStyles = {
    width: "100%",
    height: "400px",
    margin: "0 auto",
  };
  // const logo = require("../../Images/logo3.png");
  return (
    <Grid
      sx={{
        // background: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
        //  background: 'linear-gradient(360deg, #f5b2edf0 0%, #ddeef7f5 100%)'
        background: " #ddeef7f5",
        overflowX:"hidden"
      }}
    >
   <Grid className='linearHeader' sx={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
      <Image className='img-fluid' style={{ height: 130,  }} src={logo} />
      <WeatherWidget/>

      </Grid>
      <NavBar />
      <SliderCarousel />

      <Grid>
        <FlishNews />
      </Grid>

      <Grid
        container
        sx={{
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <Grid lg={3} xs={12}>
          <Box sx={{ marginRight: 3, textAlign: "justify" }}>
            <Grid item sx={{ padding: 0.5, marginTop: 0 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  variant="outlined"
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, #f5f2f0 0%, #62d884 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    Associate Portal &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, rgb(245, 242, 240) 0%, rgb(210, 98, 216) 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    Online Payment- Portal &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, rgb(245, 242, 240) 0%, rgb(217 217 70) 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    E- Content &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, rgb(245, 242, 240) 0%, rgb(98 198 216) 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    E- Certification &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, rgb(245, 242, 240) 0%,  rgb(216 98 98) 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    Student Portal &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, rgb(245, 242, 240) 0%, rgb(229 9 139) 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    Online - Registration &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, rgb(245, 242, 240) 0%,  rgb(239 185 88) 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    Certificate Verfication &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, rgb(245, 242, 240) 0%,  rgb(251 44 44) 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    Aviation Career Gudience &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, rgb(245, 242, 240) 0%, rgb(44 52 251) 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    Aviation Accademic Year Counselling &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item sx={{ padding: 0.5 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    padding: "15px 10px",
                    textAlign: "start",
                    background:
                      "linear-gradient(to top, rgb(245, 242, 240) 0%, rgb(240 147 19) 100%)",
                    borderRadius: 2,
                    ":hover": {
                      boxShadow: 3,
                    },
                  }}
                  variant="outlined"
                >
                  <Typography
                    sx={{
                      ":hover": {
                        color: "white",
                      },

                      color: "#03254c",
                      fontWeight: "bold",
                    }}
                  >
                    Aviation job Portal &#8594;
                  </Typography>
                </Card>
              </a>
            </Grid>
          </Box>

          <Grid sx={{ marginRight: 3, textAlign: "justify", padding: 0.5 }}>
            <Box
              variant="outlined"
              sx={{
                padding: "15px 10px",
                textAlign: "start",
                // background: "linear-gradient(to top, #f5f2f0 0%, #62d884 100%)",
                borderRadius: 2,
                border: "1px solid grey",
              }}
            >
              <Typography variant="h6" color={"red"}>
                EXAMINATION HELPDESK
              </Typography>
              <Box sx={{ display: "flex",marginTop: 1, }}>
                <CallEndIcon />

                <a href="" style={{ textDecoration: "none" }}>
                  <Typography sx={{ marginLeft: 1,color: "#03254c", }}>9188526670,</Typography>
                </a>
                <a href="" style={{ textDecoration: "none" }}>
                  <Typography sx={{color: "#03254c",}} >9188526671</Typography>
                </a>
              </Box>

              <Box sx={{ display: "flex" }}>
                <a href="#" style={{ textDecoration: "none" }}>
                  <Typography sx={{ marginLeft: 4,color: "#03254c", }}>9188526674,</Typography>
                </a>
                <a href="" style={{ textDecoration: "none" }}>
                  <Typography sx={{color: "#03254c",}} > 9188526675</Typography>
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid lg={3} xs={12} sx={{ marginTop: { xs: 3, lg: 0.5 } }}>
          <Card
            sx={{ marginRight: 3, backgroundColor: "#FFFFFF", boxShadow: 3 }}
          >
            <Box
              sx={{
                backgroundColor: "#03254c",
                borderBottomRightRadius: 50,
                width: { xs: "100%", lg: "100%" },
                borderTop: "3px solid #09f",
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
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Annual Accounts
                </Typography>
              </Box>
            </Link>
          </Card>

          <Card
            sx={{
              marginRight: 3,
              marginTop: 3,
              backgroundColor: "#FFFFFF",
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#03254c",
                borderBottomRightRadius: 50,
                width: { xs: "100%", lg: "100%" },
                borderTop: "3px solid #F90",
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
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Election Notification
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                Annual Reports
                </Typography>
              </Box>
            </Link>
          </Card>
        </Grid>

        <Grid lg={3} xs={12} sx={{ marginTop: { xs: 3, lg: 0.5 } }}>
          <Card
            sx={{ marginRight: 3, backgroundColor: "#FFFFFF", boxShadow: 3 }}
          >
            <Box
              sx={{
                backgroundColor: "#03254c",
                borderBottomRightRadius: 50,
                width: { xs: "100%", lg: "100%" },
                borderTop: "3px solid #C09",
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
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  Results
                </Typography>
              </Box>
            </Link>
          </Card>

          <Card
            sx={{
              marginRight: 3,
              marginTop: 3,
              backgroundColor: "#FFFFFF",
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                border: "0.5 px",
                backgroundColor: "#03254c",
                borderBottomRightRadius: 50,
                width: { xs: "100%", lg: "100%" },
                borderTop: "3px solid #FF0000",
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
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  RTI
                </Typography>
              </Box>
            </Link>

            {/* {/* <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                <ArrowRightIcon />
                <Typography sx={{ fontSize: 13 }} href="">
                  CMO Portal
                </Typography>
              </Box>
            </Link> */}

            <Link to="" sx={{ textDecoration: "none", color: "black" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: 0.5,
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  ":hover": {
                    color: "blue",
                  },
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

        <Grid lg={3} xs={12} sx={{ marginTop: { xs: 3, lg: 0.3 } }}>
          <MarqueeContainer />
        </Grid>
      </Grid>

      <Grid sx={{ marginTop: 3, marginBottom: 3 }}>
      
        <HorizontalMarquee /> 
      
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Home;
