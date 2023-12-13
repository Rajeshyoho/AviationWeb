import React from "react";
import "../../components/CompanyName.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGift,faGraduationCap,faPeopleGroup,faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import NavBar from "../../components/NavBar";
import { Grid } from "@mui/material";
import Footer from "../../components/Footer";
import { Image } from "react-bootstrap";
import WeatherWidget from "../../components/Weather";

const CompanyName = () => {
  const imageUrls = [
    {
      id:1,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/1.jpg.pagespeed.ce.0j0yc_i72h.jpg"
    },
    {
      id:2,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/2.jpg.pagespeed.ce.hgyfxbo6tS.jpg"
    },
    {
      id:3,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/3.jpg.pagespeed.ce.cOvvYhxr3s.jpg"
    },
    {
      id:4,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/5.jpg.pagespeed.ce.vfZWe7TNYm.jpg"
    },
    {
      id:5,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/6.jpg.pagespeed.ce.UkNKQ5EpgZ.jpg"
    },
    {
      id:6,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/7.jpg.pagespeed.ce.HK6Jt1trOt.jpg"
    },
    {
      id:7,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/8.jpg.pagespeed.ce.T3csMC3bz6.jpg"
    },
    {
      id:8,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/9.jpg.pagespeed.ce.5KV6kP41va.jpg"
    },
    {
      id:9,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/10.jpg.pagespeed.ce.FG2wRzY0m-.jpg"
    },
    {
      id:10,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/11.jpg.pagespeed.ce.-1E3PVs1Xi.jpg"
    },
    {
      id:11,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/12.jpg.pagespeed.ce.ZyoOFyQoR_.jpg"
    },
    {
      id:12,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/20.jpg.pagespeed.ce.8-VWx9-jEp.jpg"
    },
    {
      id:13,
      img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/20.jpg.pagespeed.ce.8-VWx9-jEp.jpg"
    },
    {
        id:1,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/1.jpg.pagespeed.ce.0j0yc_i72h.jpg"
      },
      {
        id:2,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/2.jpg.pagespeed.ce.hgyfxbo6tS.jpg"
      },
      {
        id:3,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/3.jpg.pagespeed.ce.cOvvYhxr3s.jpg"
      },
      {
        id:4,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/5.jpg.pagespeed.ce.vfZWe7TNYm.jpg"
      },
      {
        id:5,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/6.jpg.pagespeed.ce.UkNKQ5EpgZ.jpg"
      },
      {
        id:6,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/7.jpg.pagespeed.ce.HK6Jt1trOt.jpg"
      },
      {
        id:7,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/8.jpg.pagespeed.ce.T3csMC3bz6.jpg"
      },
      {
        id:8,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/9.jpg.pagespeed.ce.5KV6kP41va.jpg"
      },
      {
        id:9,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/10.jpg.pagespeed.ce.FG2wRzY0m-.jpg"
      },
      {
        id:10,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/11.jpg.pagespeed.ce.-1E3PVs1Xi.jpg"
      },
      {
        id:11,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/12.jpg.pagespeed.ce.ZyoOFyQoR_.jpg"
      },
      {
        id:12,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/20.jpg.pagespeed.ce.8-VWx9-jEp.jpg"
      },
      {
        id:13,
        img:"https://www.karunya.edu/sites/default/files/img/Placements/Resized/20.jpg.pagespeed.ce.8-VWx9-jEp.jpg"
      },
  ];
  const logo = require("../../Images/logo3.png");

  return (
    <>
        <Grid
        sx={{
          background: " #ddeef7f5",
        }}
      >
          <Grid className='linearHeader' sx={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
      <Image className='img-fluid' style={{ height: 130,  }} src={logo} />
      <WeatherWidget/>

      </Grid>

        <Grid>
       <NavBar />
        </Grid>
      </Grid>
    <div>
      <img src="https://www.vsbcetc.com/wp-content/uploads/2023/09/placement-banner.png" style={{height:"80vh",width:"100%",objectFit:"cover"}}/>
    </div>
    <Container style={{marginTop:"30px"}}>
        <Row>
            <Col>
            <h1 style={{textAlign:"center"}}>Placements</h1>
            <p style={{fontFamily:"sans-serif",fontWeight:"500",opacity:0.8,marginTop:"20px"}}>
            Karunya has a creditable record of placement of its final year students and graduates. A good number of final year students plan to go for higher studies in India or abroad or turn entrepreneurs. As per recent trends about 80% of eligible final year students, who seek a placement, are placed with reputed organizations at the initiative of the institution prior to their leaving the campus.
            </p>
            </Col>
        </Row>
    </Container>

    <div style={{marginTop:"30px"}}>
      <div id="header" className="header container-fluid">
        <div className="headerText">
          <div className="responsiveBox">
            <h3 style={{ margin: '0px' }}> <FontAwesomeIcon icon={faGift} /></h3>
            <h1 style={{ margin: '0px', fontWeight: 'bolder' }}>1644</h1>
            <p style={{ margin: '0px', fontWeight: 'bold' }}>Offers</p>
          </div>

          <div className="responsiveBox">
            <h3 style={{ margin: '0px' }}><FontAwesomeIcon icon={faGraduationCap} /></h3>
            <h1 style={{ margin: '0px', fontWeight: 'bolder' }}>1156</h1>
            <p style={{ margin: '0px', fontWeight: 'bold' }}>Placement</p>
          </div>

          <div className="responsiveBox">
            <h3 style={{ margin: '0px' }}><FontAwesomeIcon icon={faPeopleGroup} /></h3>
            <h1 style={{ margin: '0px', fontWeight: 'bolder' }}>488</h1>
            <p style={{ margin: '0px', fontWeight: 'bold' }}>Multiple Offer Holders</p>
          </div>

          <div className="responsiveBox">
            <h3 style={{ margin: '0px' }}><FontAwesomeIcon icon={faBuildingColumns} /></h3>
            <h1 style={{ margin: '0px', fontWeight: 'bolder' }}>593</h1>
            <p style={{ margin: '0px', fontWeight: 'bold' }}>Companies</p>
          </div>
        </div>
      </div>

    </div>

    <Container>
        <Row>
            <Col>
           <p style={{fontWeight:"600",fontSize:"25px",fontFamily:"sans-serif",color:"#034da2 ",textAlign:"center",marginTop:"30px",marginBottom:"30px"}}>OUR RECRUITERS</p>
            </Col>
        </Row>
    </Container>

    <Container>
        <Row>
          <CardGroup>
            {imageUrls.map((imageUrl, index) => (
              <Col key={index} md={1} style={{ marginBottom: "20px" }}>
                <Card style={{ margin: "10px", padding: "10px", borderRadius: "10px" }}>
                  <Card.Img variant="top" className="img-fluid" src={imageUrl.img} />
                </Card>
              </Col>
            ))}
          </CardGroup>
        </Row>
      </Container>
      <Grid style={{ paddingTop: 20 }}>
        <Footer/>
      </Grid>
    </>
  );
};

export default CompanyName;