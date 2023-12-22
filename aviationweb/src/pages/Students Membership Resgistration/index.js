import HomeIcon from "@mui/icons-material/Home";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { React, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AddressDetailsForm from "../../components/AddressDetailsForm";
import Courses from "../../components/Courses";
import DocumentsForm from "../../components/DocumentsForm";
import EducationalQualification from "../../components/EducationalQualification";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import PersonalDetailsForm from "../../components/PersonalDetailsForm";

const steps = [
  "Courses",
  "Personal Details",
  "Address",
  "Education Details",
  "Documents",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fathersName: "",
    mothersName: "",
    fathersOccupation: "",
    heightCms: "",
    weightKgs: "",
    bloodGroup: "",
    dob: "",
    age: "",
    gender: "",
    category: "",
    maritalStatus: "",
    language1: { name: "", read: false, write: false, study: false },
    language2: { name: "", read: false, write: false, study: false },
    language3: { name: "", read: false, write: false, study: false },
    educationalQualifications: [
      { degree: "", "school/college": "", percentage: "", yearOfPassing: "" },
      { degree: "", "school/college": "", percentage: "", yearOfPassing: "" },
      { degree: "", "school/college": "", percentage: "", yearOfPassing: "" },
    ],
    passport: false,
    passportNumber: "",
    passportValidity: "",
  });

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Courses />;
      case 1:
        return (
          <PersonalDetailsForm
            formData={formData}
            onChange={handleFormChange}
          />
        );
      case 2:
        return (
          <AddressDetailsForm formData={formData} onChange={handleFormChange} />
        );
      case 3:
        return (
          <EducationalQualification
            formData={formData}
            onChange={handleFormChange}
          />
        );
      case 4:
        return (
          <DocumentsForm formData={formData} onChange={handleFormChange} />
        );
      default:
        return (
          <Typography  sx={{
            mt: 2,
            mb: 1,
            fontSize: {
              xs: '16px',
              sm: '18px',
              md: '20px',
            },
          }}>
            All steps completed - you&apos;re finished
          </Typography>
        );
    }
  };

  return (
    <div>
      <Grid>
        <Header />
        <NavBar />
      </Grid>

      <Row
        style={{
          position: "relative",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1573068057232-fa17a193d54d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh", // Set the height to 100% of the viewport height
          paddingLeft: "40px",
          paddingRight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // width: "100%",
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
              Student Registration
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
                Students
              </Link>
              <Link
                underline="none"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                style={{ color: "rgba(161,225,229,1)" }}
              >
                Student Registration
              </Link>
            </Breadcrumbs>
          </div>
        </Col>
      </Row>

      <Container style={{padding:"30px",backgroundColor:"#EEF5FF",marginTop:"20px",borderRadius:"15px"}}>
        <Box sx={{ width: "100%" }} xs={12} sm={10} md={8} lg={6}>
          <Stepper activeStep={activeStep}  style={{ width: '100%', overflowX: 'auto' }}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                // labelProps.optional = (
                // <Typography variant="caption">Optional</Typography>
                // );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Box>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
