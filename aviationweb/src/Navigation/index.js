import { Home ,
AboutUs,
Accademic,
ActsStatus,
AboutLogo,
VisionMission,
TrainingProgram,
Associate,
DiplomaCourse,
AcademicsCouncil,
} from "../pages";


import {Routes,Route} from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";

const Navigation =()=>{
    // const {dbUser}= useAuthContext();
    return(
        <>
            <Routes>
            <Route path="/Home" element={<Home/>}/> 
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/Accademic" element={<Accademic/>}/>
            <Route path="/ActsStatus" element={<ActsStatus/>}/>
            <Route path="/AboutLogo" element={<AboutLogo/>}/>
            <Route path="/VisionMission" element={<VisionMission/>}/>
            <Route path="/TrainingProgram" element={<TrainingProgram/>}/>
            <Route path="/Associate" element={<Associate/>}/>
            <Route path="/DiplomaCourse" element={<DiplomaCourse/>}/>
            <Route path="/AcademicsCouncil" element={<AcademicsCouncil/>}/>
            </Routes>
        </>
    )
}

export default Navigation;