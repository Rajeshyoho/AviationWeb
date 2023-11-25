import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { Image } from "react-bootstrap";
const Footer = () => {
  const logo = require("../Images/logo3.png");
  return (
    <Grid >
      <Grid
        container
        sx={{
          background: "radial-gradient(circle, rgba(161,225,229,1) 43%, rgba(237,220,238,1) 95%)",
          color: " #0e2246",
          alignItems: "center",
          border:"3px solid  #0e2246",
          borderRadius:3
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
            style={{ height:130 , width: "auto" }}
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
          <Box>
            <Typography variant="h5">“Educate to Elevate”</Typography>
            <Typography variant="h6">
              “பலகல்வி தந்து இந்தப்பாரை உயர்த்திட வேண்டும்”
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ background: "#333", color: "#B1BEC5", padding: 5,textAlign: {xs:"center",lg:"start"}, }}>
        <Grid lg={2} xs={12}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              UNIVERSITY
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding:0.5, ":hover": { color: "blue" }, fontSize: 13}}>
                About University
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5  , ":hover": { color: "blue" }, fontSize: 13 }}>
                Schools/Departments
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" }, fontSize: 13 }}>
                Acts / Statues
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" }, fontSize: 13 }}>
                Rankings
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" }, fontSize: 13 }}>
                Affiliated Colleges
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" }, fontSize: 13 }}>
                Research Institutes
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" }, fontSize: 13 }}>
                Distance Education
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" }, fontSize: 13 }}>
                UGC-HRDC
              </Typography>
            </a>
          </Box>
        </Grid>

        <Grid lg={2} xs={12}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              CENTERS
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                DRDO-BU CLS
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                CRTD
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                International Affairs
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                CRE
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                CIC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                CUIC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                ASDHEC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Incubation
              </Typography>
            </a>
          </Box>
        </Grid>

        <Grid lg={2} xs={12}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              CELLS
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                IQAC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                IPR
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                SC/ST Cell
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Anti-Ragging
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Women Cell
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Grievance
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                ICC
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                CM Cell
              </Typography>
            </a>
          </Box>
        </Grid>

        <Grid lg={2} xs={12}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              STUDENTS
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Programmes
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" } ,fontSize: 13}}>
                Admission
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Scholarships
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Examinations
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Results
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Alumni
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                IAS Academy
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Swayam
              </Typography>
            </a>
          </Box>
        </Grid>

        <Grid lg={2} xs={12}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              OTHER LINKS
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Tenders
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Recruitment
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                News
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Events
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Library
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                RTI
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Download Forms
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" } ,fontSize: 13}}>
                Archives
              </Typography>
            </a>
          </Box>
        </Grid>

        <Grid lg={2} xs={12}>
          <Box>
            <Typography sx={{ color: " #ded283", fontSize: 15 }}>
              RESEARCH
            </Typography>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Ph. D. Thesis Status
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Plagiarism Check
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                Ph. D. Enrolment
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                RUSA
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                PURSE
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" } ,fontSize: 13}}>
                Research News
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                University Journals
              </Typography>
            </a>
            <a href="" style={{ textDecoration: "none", color: "#B1BEC5" }}>
              <Typography sx={{ padding: 0.5, ":hover": { color: "blue" },fontSize: 13 }}>
                UGC Projects
              </Typography>
            </a>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ color: "black" }} />

      <Grid
        container
        sx={{
          backgroundColor: "#333",
          color: "#B1BEC5",
          padding: 3,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid lg={4} xs={12}>
          <Typography>© All Rights Reserved, ASDHEC</Typography>
        </Grid>

        <Grid lg={4} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>Total Visitors:</Typography>
            <img
              src="	https://hitwebcounter.com/counter/counter.php?page…9&style=0006&nbdigits=5&type=page&initCount=40000"
              style={{
                border: 0,
                verticalAlign: "top",
                maxWidth: " 100%",
                height: 30,
                marginLeft: 5,
              }}
            />
          </Box>
        </Grid>

        <Grid lg={4} xs={12}>
            <a href="" style={{textDecoration:"none",color: "#B1BEC5", }} >
          <Typography>Developed & Maintained by YOHO TECHNOLOGIES.</Typography>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
