import { Grid, Typography } from "@mui/material";
import * as formik from "formik";
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
import SignatureCanvas from 'react-signature-canvas';
import * as yup from "yup";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";

const { Formik } = formik;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], "terms must be accepted"),
});

const MembershipRegistration = () => {
  const logo = require("../../Images/logo3.png");

    const signatureRef = useRef();
  
    const handleClear = () => {
      signatureRef.current.clear();
    };
  
    const handleSave = () => {
      const signatureImage = signatureRef.current.toDataURL();
      // Now you can save or use the signatureImage data as needed.
      console.log(signatureImage);
    };


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
    <NavBar />
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

      <Container style={{marginTop:2}}>
        <Row style={{ backgroundColor: "#0e2246" }}>
          <Col>
            <h1
              style={{
                fontFamily: "initial",
                fontSize: "35px",
                color: "white",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Airline Membership Application Form
            </h1>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "40px" }}>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            city: "",
            state: "",
            zip: "",
            file: null,
            terms: false,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Name</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Qualifications</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Designation</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Institute</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Postal Address</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Telephone No. (Res)</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Mobile No.</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Email ID</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Membership Type</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <Form.Label>Create Password</Form.Label>
                  </Col>
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  style={{ display: "flex" }}
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Col>
                    <p style={{ fontWeight: "600" }}>Fee</p>
                  </Col>
                  <Col md={8}>
                    <p>
                      Price (10000/-INR + Handling Charges (300/-)): ₹10,300.00
                    </p>
                  </Col>
                </Form.Group>
              </Row>

              <Form.Group className="position-relative mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  //   isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik106"
                  feedbackTooltip
                />
              </Form.Group>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button type="submit">Submit</Button>

                <Button style={{}} type="Clear">
                  Clear
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>

      <div>
        <Container>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "initial",
              marginTop: 20,
            }}
          >
            Services provided:
          </Typography>
          <p>
            An outline of the officiant's duties and responsibilities, including
            the creation and delivery of the ceremony script. Whether the
            officiant will participate in rehearsals, if applicable.
          </p>
        </Container>
      </div>

      <div>
        <Container>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "initial",
              marginTop: 20,
            }}
          >
            Legal requirements and licenses:
          </Typography>
          <p>
            Information about obtaining the necessary marriage licenses or
            permits. Confirmation of the officiant's legal authority to perform
            the ceremony (if required by local laws).
          </p>
        </Container>
      </div>

      <div>
        <Container>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "initial",
              marginTop: 20,
            }}
          >
            Liability and indemnification:
          </Typography>
          <p>
            Clauses related to indemnifying the officiant from any liabilities.
            Responsibility for damages or injury during the ceremony.
          </p>
        </Container>
      </div>

      <div>
        <Container>
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "initial",
              marginTop: 20,
            }}
          >
            Terms of Agreement 
          </Typography>
        </Container>
      </div>

            <div>
                <Container>
                    <Typography>
                    Client Signature :
                    </Typography>
                </Container>
            </div>

            <div >
                <Container style={{border:"2px solid red",borderRadius:5}}>
      <SignatureCanvas
        ref={signatureRef}
        canvasProps={{ width: 900, height: 200, className: 'sigCanvas'}}style={{border:"2px solid red"}}
      />
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Button style={{marginBottom:5}} onClick={handleClear}>Clear</Button>
      <Button style={{marginBottom:5}} onClick={handleSave}>Save</Button>
      </div>
      </Container>
    </div>


      <div style={{marginTop:10}}>
        <Footer />
      </div>
    </>
  );
};

export default MembershipRegistration;
