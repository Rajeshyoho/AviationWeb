import { Home ,
AboutUs,
Accademic,
ActsStatus,
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
            <Route path="/" element={<ActsStatus/>}/>
            </Routes>
        </>
    )
}

export default Navigation;