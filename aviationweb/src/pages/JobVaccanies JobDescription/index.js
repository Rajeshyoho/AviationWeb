import { Box, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Footer from "../../components/Footer";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";

const JobDescription = () => {
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

      {/* <Grid style={{ marginLeft: 5 }}>
        <Breadcrumb
          style={{ backgroundColor: "#FFFFFF", textDecoration: "none" }}
        >
          <Breadcrumb.Item href="Home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">AboutUs</Breadcrumb.Item>
          <Breadcrumb.Item href="#">ASDHEC Logo</Breadcrumb.Item>
        </Breadcrumb>
      </Grid> */}

      <div>
        <img
          src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t1.6435-9/130299541_135298905052544_8308866746948375884_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=300f58&_nc_ohc=IVTMye_l6FcAX_1xLa7&_nc_ht=scontent.fmaa2-3.fna&oh=00_AfDyyJkCwdWFTyd3Pdmd7wk-TSrL2GpPnxEtFRHiq1qgHA&oe=659BD9C5"
          style={{ width: "100%" }}
        />
      </div>

      <Grid
        sx={{
          backgroundColor: "#f0f0fb",
          marginTop: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              marginTop: 10,
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "initial",
            }}
          >
            HR TOOLKIT | HR TEMPLATES | JOB DESCRIPTIONS | TRAVEL & TOURISM JOB
            DESCRIPTIONS
          </Typography>
        </Box>

        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <br />
          <Typography variant="h5">Flight Attendant job description</Typography>
          <Container>
            <Typography style={{ marginTop: 15 }}>
              A Flight Attendant is a professional who is responsible for
              ensuring the safety, security, and comfort of passengers on board
              an airline. They provide customer service before, during, or at
              the end of each trip while creating a welcoming environment in
              between flights.
            </Typography>
          </Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <RemoveRedEyeOutlinedIcon />
              <Typography sx={{ marginLeft: 1, fontSize: 13 }}>
                45836
              </Typography>
            </Box>
            <Typography sx={{ marginLeft: 2 }}>
              <FavoriteBorderOutlinedIcon />
            </Typography>
            <Typography sx={{ marginLeft: 2 }}>
              <ShareOutlinedIcon />
            </Typography>
          </Box>

          <Stack
            spacing={2}
            direction="row"
            sx={{ justifyContent: "center", textAlign: "center", marginTop: 3 }}
          >
            <Box
              sx={{
                border: "0.2px solid gery",
                backgroundColor: "#FFFFFF",
                boxShadow: 3,
                padding: 3,
              }}
            >
              <Typography>Hiring for this role?</Typography>
              <Typography>
                POST THIS JOB FOR FREE <ArrowRightIcon />{" "}
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              sx={{ borderColor: "2px soild gray" }}
            >
              or
            </Divider>
            <Box
              sx={{
                border: "0.2px solid gery",
                backgroundColor: "#FFFFFF",
                boxShadow: 3,
                padding: 3,
              }}
            >
              <Typography>Hiring for this role?</Typography>
              <Typography>
                POST THIS JOB FOR FREE <ArrowRightIcon />
              </Typography>
            </Box>
          </Stack>
          <div></div>
        </Box>
      </Grid>

      <div>
        <Container>
          <Typography
            variant="h4"
            style={{
              fontFamily: "initial",
              fontWeight: "bold",
              marginTop: 25,
            }}
          >
            Flight Attendant responsibilities Job brief:
          </Typography>
          <p>
            An airline pilot, or aviator, transports passengers and cargo by
            airplane. Some commercial aviators perform other duties, such as
            dusting crops or monitoring traffic. These professionals may also be
            aviation engineers who are highly skilled in handling the electronic
            equipment found in aircraft.
          </p>
          <ul>
            <li>
              A small Montana-based airport was looking for a part-time
              commercial pilot with an instrument rating and minimum of 2000
              hours total flight time, including 250 hours of turbine time.
            </li>
            <li>
              Individuals looking for entry-level employment in the aviation
              field as technicians, mechanics or pilots
            </li>
            <li>
              Aviation maintenance technician ($55,000)* - Airline pilot
              ($118,000)* - Commercial pilot ($76,000)*
            </li>
            <li>
              A career in aviation may seem like an excellent idea. Aside from
              the romantic notion of being in the clouds, flying is a main
              transportation form for travel and cargo shipping.
            </li>
          </ul>
        </Container>
      </div>

      <div>
        <Container style={{display:"flex",justifyContent:"center",alignItems:"center",justifyContent:"space-between"}}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Requirements and skills
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Our Recruitors
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Responsibilities
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Container>
      </div>

      <Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default JobDescription;
