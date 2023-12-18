import { Grid } from "@mui/material";
import { React ,useState} from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../components/Accademic.css";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const AcademicsCouncil = () => {
  const logo = require("../../Images/logo3.png");

  const Imgs=[
    {
      id:1,
      img:"https://krea.edu.in/wp-content/uploads/2022/08/35J7435-BW-500x500.jpg.webp",
      name:"Professor Nirmala Rao"
    },
    {
      id:2,
      img:"https://krea.edu.in/wp-content/uploads/2023/10/Anannya-e1596555030677.webp",
      name:"Dr Anannaya Dasgupta"
    },
    {
      id:3,
      img:"https://krea.edu.in/wp-content/uploads/2022/03/500x500-2.png.webp",
      name:"Professor Satyanarayana"
    },
    {
      id:4,
      img:"https://krea.edu.in/wp-content/uploads/2023/10/Untitled-design-11-682x1024-1-500x500.jpg",
      name:"kumaravel S"
    },
    {
      id:5,
      img:"https://krea.edu.in/wp-content/uploads/2020/06/Kalyan-1.jpg",
      name:"kalyan S Chakrabarti"
    },
    {
      id:6,
      img:"https://krea.edu.in/wp-content/uploads/2020/08/Lakshmi-Kumar-3-01.jpg.webp",
      name:"Prof Lakshmi Kumar"
    },
    {
      id:7,
      img:"https://krea.edu.in/wp-content/uploads/2022/01/500x500-500-x-500-px-5-500x500.png.webp",
      name:"Dr Panchali R"
    },
  ]

      const[data,setData]=useState(Imgs)

  return (
    <div style={{overflow:"hidden"}}>
      <Grid>
      <Header />
      <NavBar />
      </Grid>


      <Row
  style={{
    position: "relative",
    backgroundImage:
      'url("https://i0.wp.com/thebarnaclenews.com/wp-content/uploads/2021/05/image003.png?resize=624%2C254&ssl=1")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "60vh", // Set the height to 100% of the viewport height
    paddingLeft: "40px",
    paddingRight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 1,
    }}
  ></div>
  <Col
    md={6}
    xs={12}
    style={{
      position: "relative",
      zIndex: 2,
      // textAlign: "center", 
    }}
  >
    <div>
      <h3
        style={{
          color: "white",
          fontSize: "36px",
          fontWeight: "bold",
        }}
      >
        Academic Council
      </h3>
    </div>
  </Col>

  <Col
    className="banner"
    md={6}
    xs={12}
    style={{
      position: "relative",
      zIndex: 2,
      textAlign: "center", 
    }}
  >
    <div role="presentation" >
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          zIndex: 900,
          display: "flex",
          alignItems: "center",
          margin: "10px",
          fontSize: "20px",
          color: "#ffffff",
          justifyContent: "flex-end",
          alignItems:"center"
        }}
      >
         <Link underline="hover" color="inherit" href="Home" style={{display:"flex",alignItems:"center"}}>
          <HomeIcon fontSize="medium" style={{marginRight:"5px",marginBottom:"2px"}}/>
         Home
        </Link>
        <Link underline="none"  color="inherit" href="/">
          About Us
        </Link>
        <Link
          underline="none"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          style={{color:"rgba(161,225,229,1)"}}
        >
          Academic Council
        </Link>
      </Breadcrumbs>
    </div>
  </Col>
</Row>

      {/* <div>
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
              paddingLeft: "20px",
              paddingBottom: "10px",
            }}
          >
            Academic Council
          </h2>
          <p
            style={{
              color: "#ffffff",
              paddingLeft: "20px",
              fontSize: "20px",
              paddingTop: "10px",
              marginBottom: "20px",
              textAlign:"justify",
              padding:5,
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
      </div> */}

<div>
      <div style={{backgroundColor:"#083a59",minHeight:"187px",justifyContent:"center",display:"flex",flexDirection:"column",padding:"10px"}}>
        <h2 style={{fontSize:"54px",color:"#ffffff",paddingLeft:"50px",paddingBottom:"10px"}}>
        Academic Council
        </h2>
        <p style={{color:"#ffffff",paddingLeft:"50px",fontSize:"20px",paddingTop:"10px",marginBottom:"20px"}}>The Academic Council of Krea University, chaired by the Vice-Chancellor reviews plans, policies and budgets of the University from an academic perspective, including research, curriculum, pedagogy and regulatory matters</p>
      </div>
    <div className="container-fluid">
      <div className="row my-1">
        {data.map((item,index) => (
          <div key={index} className="col-md-3">
            <div className="card my-2" style={{ padding: 0 }}>
              <div className="rot-card text-center">
                <div className="rot-card-inner">
                  {/* Front of card */}
                  <div className="rot-card-front">
                    <div
                      className="d-flex flex-column justify-content-center align-items-center"
                      style={{height:"100%" }}
                    >
                      <img
                        src={item.img}
                        className="opac"
                        alt="Front"
                      />
                      <h3 className="card-title py-4">{item.name}</h3>
                    </div>
                  </div>
                  {/* Back of card */}
                  <div
                    className="rot-card-back"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <div className="mt-4">
                      <h3 className="text-center">Professor Nirmala Rao</h3>
                      <p style={{ letterSpacing: 1.5 }}>CHAIR</p>
                      <a
                        className="btn btn-proj mt-n3"
                        href="https://getbootstrap.com/docs/4.0/utilities/spacing/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/455/455691.png"
                          style={{ height: '40px', width: '40px' }}
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
    </div>
  );
};

export default AcademicsCouncil;
