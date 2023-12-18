import {
  Grid,
  Typography,
  Box,
  Divider,
  Card,
  Button,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { React } from "react";
import { Image } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "../../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
import Header from "../../components/Header";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { TbCertificate } from "react-icons/tb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faGraduationCap,
  faPeopleGroup,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

const AssociateRegulations = () => {
  const logo = require("../../Images/logo3.png");

  return (
    <>
      <Grid>
        <Header />
        <NavBar />
      </Grid>

      <Row
        style={{
          position: "relative",
          backgroundImage:
            'url("https://viracresearch.com/wp-content/uploads/2022/03/NEC-Biometric_Aviation.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh", // Set the height to 100% of the viewport height
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
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
              Associate & Regulations
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
          <div role="presentation">
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
                alignItems: "center",
              }}
            >
              <Link
                underline="hover"
                color="inherit"
                href="Home"
                style={{ display: "flex", alignItems: "center" }}
              >
                <HomeIcon
                  fontSize="medium"
                  style={{ marginRight: "5px", marginBottom: "2px" }}
                />
                Home
              </Link>
              <Link underline="none" color="inherit" href="/">
                Accademic
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                style={{ color: "rgba(161,225,229,1)" }}
              >
                Associate & Regulations
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <div style={{ backgroundColor: "#cfc6f1" }}>
        <Typography
          variant="h4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            fontWeight: "bold",
          }}
        >
          Aviation Law and Regulations Training Schedule
        </Typography>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Discover How Your Career Can Take Flight
        </Typography>
        <Typography
          sx={{
            textAlign: "justify",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          ​International air transportation is governed by a complex and
          fragmented system of global regulatory agencies. Aviation law has
          always been a challenging field involving international borders,
          multiple jurisdictions, and conflicting requirements. provided by the
          website. It is also helpful if the user search for a specific website
          then the search engine result page will display snippets in search
          results that will provide information related to that websiteairport
          for the community. In as act now spaces fill up quickly!
        </Typography>
      </div>

      <div style={{ marginTop: 20 }}>
        <Container>
          <Typography
            style={{
              fontWeight: "bold",
            }}
          >
            ACADEMY OF AVIATION'S INTERNATIONAL STUDENT NETWORK
          </Typography>
          <Divider style={{ borderBottom: "2px solid gray" }} />

          <Typography sx={{ textAlign: "justify", marginTop: 2 }}>
            Diploma in Aviation is a full time diploma level course for a
            duration of 6 Months- 1 Year that deals with the management of
            airports and aviation. Know More: Aviation Course The minimum
            eligibility for pursuing a diploma in aviation is 10+2 or equivalent
            from a recognized board. They must secure at least 50 percent marks
            in class 12 exam. The admission to the course is done on the basis
            of score in 10+2, followed by a personal interview. The average fee
            for the diploma in Aviation course ranges from INR 60,000 to INR
            85,000 in a year depending on colleges.
          </Typography>
          <Typography style={{ marginTop: 20, textAlign: "justify" }}>
            <ul>
              <li>
                (1) Walking away from Paris Orly would be a lost opportunity
              </li>
              <li>(2) Air France-KLM chief on Transavia plan</li>
              <li>
                (3) Lufthansa Group carriers plan Tel Aviv return in January
              </li>
              <li>
                (4) Heathrow airport braced for revenue hit in 2024 despite new
                passenger high
              </li>
              <li>
                (5) Air France-KLM chief sees flexibility to limit impact of any
                Schiphol slot losses
              </li>
              <li>(6) WestJet plans to launch Calgary-Seoul flights in 2024</li>
              <li>
                (7) Cityflyer to re-open British Airways services from London
                Stansted
              </li>
            </ul>
          </Typography>
        </Container>
      </div>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="responsiveBox">
          <h3 style={{ margin: "0px" }}>
            {" "}
            <FontAwesomeIcon icon={faGift} />
          </h3>
          <h1 style={{ margin: "0px", fontWeight: "bolder" }}>1644</h1>
          <p style={{ margin: "0px", fontWeight: "bold" }}>Offers</p>
        </div>

        <div className="responsiveBox">
          <h3 style={{ margin: "0px" }}>
            <FontAwesomeIcon icon={faGraduationCap} />
          </h3>
          <h1 style={{ margin: "0px", fontWeight: "bolder" }}>1156</h1>
          <p style={{ margin: "0px", fontWeight: "bold" }}>Placement</p>
        </div>

        <div className="responsiveBox">
          <h3 style={{ margin: "0px" }}>
            <FontAwesomeIcon icon={faPeopleGroup} />
          </h3>
          <h1 style={{ margin: "0px", fontWeight: "bolder" }}>488</h1>
          <p style={{ margin: "0px", fontWeight: "bold" }}>
            Multiple Offer Holders
          </p>
        </div>

        <div className="responsiveBox">
          <h3 style={{ margin: "0px" }}>
            <FontAwesomeIcon icon={faBuildingColumns} />
          </h3>
          <h1 style={{ margin: "0px", fontWeight: "bolder" }}>593</h1>
          <p style={{ margin: "0px", fontWeight: "bold" }}>Companies</p>
        </div>

        <div className="responsiveBox">
          <h3 style={{ margin: "0px", fontWeight: "bold" }}>
            <TbCertificate />
          </h3>
          <h1 style={{ margin: "0px", fontWeight: "bolder" }}>8501</h1>
          <p style={{ margin: "0px", fontWeight: "bold" }}>Students</p>
        </div>
      </div>
      <Grid
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ marginTop: 25, display: "flex" }}
      >
        <Container style={{ display: "flex" }}>
          <Row>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.academyofaviation.com/images/site-images/aoa-alumni-rejaul-eric.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    BEYOND INDIA
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "justify" }}>
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://5.imimg.com/data5/YZ/QX/YP/SELLER-14684481/aviation-management-training-in-hyderabad-500x500.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    THE ROTARY CLUB
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "justify" }}>
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.academyofaviation.com/assets/img/academy-of-aviation-international-student-ugochukwu.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    UNITED AIRLINES
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "justify" }}>
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://kaimah.co.nz/imgs/study-in-new-zealand-or-australia/pilot-training.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    AOA CERTIFIED
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "justify" }}>
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </Grid>

      <Grid style={{ marginTop: 10 }}>
        <Container>
          <Row>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.flyperkasa.com/wp-content/uploads/2023/06/Sabry-Libyan-student.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    BEYOND INDIA
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "justify" }}>
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.flyperkasa.com/wp-content/uploads/2022/12/106-Perkasa04PortraitGroups_196-scaled.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    THE ROTARY CLUB
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "justify" }}>
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.flyperkasa.com/wp-content/uploads/2020/01/cancut.jpeg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    BEYOND INDIA
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "justify" }}>
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.flyperkasa.com/wp-content/uploads/2020/01/batch-12.jpg.webp"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    THE ROTARY CLUB
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "justify" }}>
                    Former AOA trainees and CFIs, Capt. Rejaul Rajib and First
                    Officer Eric Riker, share the cockpit of a Republic Airways
                    flight out of LaGuardia on Jan. 14, 2022.
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </Grid>

      <div style={{ marginTop: 20 }}>
        <Footer />
      </div>
    </>
  );
};

export default AssociateRegulations;
