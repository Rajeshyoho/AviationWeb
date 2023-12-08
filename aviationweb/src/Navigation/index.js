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
} from "../pages";

import { Routes, Route } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";

const Navigation = () => {
  // const {dbUser}= useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Accademic" element={<Accademic />} />
        <Route path="/ActsStatus" element={<ActsStatus />} />
        <Route path="/AboutLogo" element={<AboutLogo />} />
        <Route path="/VisionMission" element={<VisionMission />} />
        <Route path="/TrainingProgram" element={<TrainingProgram />} />
        <Route path="/Associate" element={<Associate />} />
        <Route path="/DiplomaCourse" element={<DiplomaCourse />} />
        <Route path="/AcademicsCouncil" element={<AcademicsCouncil />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/Department" element={<Department />} />
        <Route
          path="/AssociateRegulations"
          element={<AssociateRegulations />}
        />
        <Route path="/PGDegrees" element={<PGDegrees />} />
        <Route path="/UGDegrees" element={<UGDegrees />} />
        <Route path="/JobOpportunities" element={<JobOpportunities />} />
        <Route path="/Colleges" element={<Colleges />} />
      </Routes>
    </>
  );
};

export default Navigation;
