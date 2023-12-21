import {
  Home,
  AboutUs,
  Accademic,
  ActsStatus,
  AboutLogo,
  VisionMission,
  TrainingProgram,
  Associate,
  DiplomaCourse,
  AcademicsCouncil,
  Certificate,
  Department,
  AssociateRegulations,
  PGDegrees,
  UGDegrees,
  JobOpportunities,
  Colleges,
  HowToJoinCourse,
  Eligibility,
  MembershipRegistration,
  CarrerGuidanceRegistration,
  AcademicCounsellingRegistration,
  JobDescription,
  CompanyName,
  InterviewDate,
  ExperienceFeatures,
  DesignationPosition,
  RolesResponsibilites,
  Location,
} from "../pages";

import { Routes, Route } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";

const Navigation = () => {
  // const {dbUser}= useAuthContext();
  return (
    <>
      <Routes>
      <Route path="/" element={<VisionMission />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/JobOpportunities" element={<JobOpportunities />} />
      <Route path="/InterviewDate" element={<InterviewDate/>} />
      <Route path="/CompanyName" element={<CompanyName/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Accademic" element={<Accademic />} />
        <Route path="/ActsStatus" element={<ActsStatus />} />
        <Route path="/AboutLogo" element={<AboutLogo />} />
        <Route path="/TrainingProgram" element={<TrainingProgram />} />
        <Route path="/Associate" element={<Associate />} />
        <Route path="/DiplomaCourse" element={<DiplomaCourse />} />
        <Route path="/AcademicsCouncil" element={<AcademicsCouncil />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/Department" element={<Department />} />
        <Route path="/AssociateRegulations" element={<AssociateRegulations />}/>
        <Route path="/PGDegrees" element={<PGDegrees />} />
        <Route path="/UGDegrees" element={<UGDegrees />} />
        <Route path="/Colleges" element={<Colleges />} />
        <Route path="/HowToJoinCourse" element={<HowToJoinCourse />} />
        <Route path="/Eligibility" element={<Eligibility />} />
        <Route path="/MembershipRegistration" element={<MembershipRegistration />} />
        <Route path="/CarrerGuidanceRegistration" element={<CarrerGuidanceRegistration />} />
        <Route path="/AcademicCounsellingRegistration" element={<AcademicCounsellingRegistration />} />
        <Route path="/JobDescription" element={<JobDescription />} />
        <Route path="/ExperienceFeatures" element={<ExperienceFeatures />} />
        <Route path="/DesignationPosition" element={<DesignationPosition />} />
        <Route path="/RolesResponsibilites" element={<RolesResponsibilites />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </>
  );
};

export default Navigation;

