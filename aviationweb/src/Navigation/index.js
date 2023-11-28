import { Home ,
AboutUs,
Accademic
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
            <Route path="/" element={<Accademic/>}/>
            
            </Routes>
        </>
    )
}

export default Navigation;