import React, { useState, useEffect } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { Image } from "react-bootstrap";
const Footer = () => {
  const logo = require("../Images/logo3.png");
    const payment = require("../Images/payment.png");

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid>
      <Grid
        container
        sx={{
          background:
            "radial-gradient(circle, rgba(161,225,229,1) 43%, rgba(237,220,238,1) 95%)",
          color: " #0e2246",
          alignItems: "center",
          // border: "3px solid  #0e2246",
          // borderRadius: 3,
        }}
      >
        <Grid
          lg={6}
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Image
            className="img-fluid"
            style={{ height: 130, width: "auto" }}
            src={logo}
          />
        </Grid>
        <Grid
          lg={6}
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box style={{marginRight:20}}>
            <Typography variant="h5">“Educate to Elevate”</Typography>
            <Typography variant="h5">
              Best Aviation Academy In Council
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
      <Grid
        container
        sx={{
          background: "#0e2246",
          color: "white",
          // padding:2,
          // marginTop:5,
          // display:"flex",
          textAlign: { xs: "center", lg: "center" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid sx={{ marginTop: { xs: 3, md: 0 },textAlign:{xs:"center",lg:"start"},marginTop:3,marginBottom:3}} item lg={2} xs={6}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              UNIVERSITY
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                About University
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Schools/Departments
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Acts / Statues
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Rankings
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Affiliated Colleges
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Research Institutes
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Distance Education
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                UGC-HRDC
              </Typography>
            </a>
          </Box>
        </Grid>

        {/* <Divider
          orientation="vertical"
          flexItem
          sx={{ width: 3, marginRight: 5 }}
          color="#ffffff"
        /> */}

        <Grid sx={{ marginTop: { xs: 3, md: 0 },textAlign:{xs:"center",lg:"start"},marginTop:3,marginBottom:3}} item lg={2} xs={6}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              CENTERS
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                DRDO-BU CLS
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                CRTD
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                International Affairs
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                CRE
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                CIC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                CUIC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                ASDHEC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Incubation
              </Typography>
            </a>
          </Box>
        </Grid>

        {/* <Divider
          orientation="vertical"
          flexItem
          sx={{ width: 3, marginRight: 5 }}
          color="#ffffff"
        /> */}

        <Grid  sx={{ marginTop: { xs: 3, md: 0 },textAlign:{xs:"center",lg:"start"},marginTop:3,marginBottom:3}} item lg={2} xs={6}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              CELLS
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                IQAC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                IPR
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                SC/ST Cell
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Anti-Ragging
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Women Cell
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Grievance
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                ICC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                CM Cell
              </Typography>
            </a>
          </Box>
        </Grid>

        {/* <Divider
          orientation="vertical"
          flexItem
          sx={{ width: 3, marginRight: 5 }}
          color="#ffffff"
        /> */}

        <Grid sx={{ marginTop: { xs: 3, md: 0 },textAlign:{xs:"center",lg:"start"},marginTop:3,marginBottom:3}} item lg={2} xs={6}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              STUDENTS
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Programmes
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Admission
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Scholarships
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Examinations
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Results
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Alumni
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                IAS Academy
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Swayam
              </Typography>
            </a>
          </Box>
        </Grid>

        {/* <Divider
          orientation="vertical"
          flexItem
          sx={{ width: 3, marginRight: 5 }}
          color="#ffffff"
        /> */}

        <Grid sx={{ marginTop: { xs: 3, md: 0 },textAlign:{xs:"center",lg:"start"},marginTop:3,marginBottom:3}} item lg={2} xs={12}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              OTHER LINKS
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Tenders
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Recruitment
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                News
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Events
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Library
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                RTI
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Download Forms
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#ffffff" }}>
              <Typography
                sx={{ padding: 0.5, ":hover": { color: "#05ccd9" }, fontSize: 13 }}
              >
                Archives
              </Typography>
            </a>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ color: "black" }} />

      <Grid lg={4} xs={12}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 5,
              backgroundColor:"#0e2246",
              width:"100%",
              padding:1
            }}
          >
            <img  className="img-fluid col-sm-12" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" style={{height:"30px",maxWidth:"100%",display:"flex",justifyContent:"center",marginTop:4}}/>
            {/* <img className="img-fluid col-sm-12" src={payment} style={{height:"30px",maxWidth:"100%",display:"flex",justifyContent:"center"}}/> */}
          </Box>
        </Grid>

      <Grid
        container
        sx={{
          backgroundColor: "#0e2246",
          color: "#ffffff",
          padding: 3,
          alignItems: "center",
          textAlign: "center",
          justifyContent:"space-between"
        }}
      >
        <Grid lg={4} xs={12}>
          <Typography sx={{ fontSize: 14 }}>
            © Copy Rights All Reserved {currentYear}, ASDHEC
          </Typography>
        </Grid>

        

        <Grid lg={4} xs={12}>
          <Box
            sx={{ display: "flex",justifyContent:"space-between" }}
          >
            <Typography sx={{ fontSize: 14 }}>
              Designed & Developed by
            </Typography>
            <a
              href="https://yohotechnologies.com/#"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  marginLeft: 0.5,
                  ":hover": { color: " #02d871" },
                }}
              >
                {" "}
                YOHO TECHNOLOGIES PVT LTD.{" "}
              </Typography>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;