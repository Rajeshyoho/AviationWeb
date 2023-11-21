import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import { Grid } from '@mui/material';
function NavBar() {
  const logo = require('../Images/asdhec-final-01.jpg');
  return (
//     <Navbar expand="lg" className="bg-dark">
//     <Container fluid>
//       <Navbar.Brand href="#" style={{ color: 'black' }}>
//         <Image className='img-fluid' style={{ height: 75, width: 150 }} src={logo} />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Navbar.Collapse id="navbarScroll">
//         <Nav
//           className="me-auto my-2 my-lg-0"
//           // style={{ maxHeight: '100px' }}
//           navbarScroll
//         >
//            <NavDropdown
//             title="About Us"
//             id="nav-dropdown"
             
//           >
//             <Grid style={{width:500,height:350}}>
//             <NavDropdown.Item
//               href="#action3"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               About ASDHEC
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action4"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Vission & Mission
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Acts & Status
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               ASDHEC Logo
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Associate Institute Colleges
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Training Placement
//             </NavDropdown.Item>
// </Grid>
//           </NavDropdown>
//           <NavDropdown
//             title="Academic"
//             id="nav-dropdown"
//           >
//             <NavDropdown.Item
//               href="#action3"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Academic Council
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action4"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Department
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Associate Regulations
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Certification Courses
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Diplom Courses
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               UG Degrees
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               PG Degrees
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Training Programs
//             </NavDropdown.Item>
//           </NavDropdown>
//           <NavDropdown
//             title="Carrear Guidance"
//             id="nav-dropdown"
//           >
//             <NavDropdown.Item
//               href="#action3"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Eligiblity
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action4"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Colleges
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               Job Oppurtunity
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               href="#action5"
//               style={{ color: 'black', backgroundColor: 'white' }}
//             >
//               How To Join The Course ?
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="#action2" style={{ color: 'white' }}>
//             Students
//           </Nav.Link>
//           <Nav.Link href="#action2" style={{ color: 'white' }}>
//             Job Vacancies
//           </Nav.Link>
//         </Nav>
//         {/* <Form className="d-flex">
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//           />
//           <Button variant="outline-success">Search</Button>
//         </Form> */}
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>

<header>
	<nav>
		<ul class="navigation-menu">
			<li><a href="#"><i ></i> About Us</a>
      <ul>
					<li><a href="#">About ASDHEC</a>
						{/* <ul>
							<li><a href="#">Food & Treats</a></li>
							<li><a href="#">Toys</a></li>
							<li><a href="#">Beds & Furniture</a></li>
							<li><a href="#">Outdoor Supplies</a></li>
							<li><a href="#">Clothing</a></li>
						</ul> */}
					</li>
					<li><a href="#">Vision & Mission</a>
						
					</li>
					<li><a href="#">Acts & Status</a>
						
					</li>
					<li><a href="#">ASDHEC Logo</a>
						
					</li> 

          <li><a href="#">Associate Institute / Colleges</a>
						
					</li>

          <li><a href="#">Training Partners</a>
						
					</li>


          
				</ul>
      
      </li>
			<li><a href="#"><i ></i>Academic </a>
				<ul>
					<li><a href="#">Academic Council</a>
						{/* <ul>
							<li><a href="#">Food & Treats</a></li>
							<li><a href="#">Toys</a></li>
							<li><a href="#">Beds & Furniture</a></li>
							<li><a href="#">Outdoor Supplies</a></li>
							<li><a href="#">Clothing</a></li>
						</ul> */}
					</li>
					<li><a href="#">Department</a>
						
					</li>
					<li><a href="#">Associate Regulations</a>
						
					</li>
					<li><a href="#">Certification Courses</a>
						
					</li> 

          <li><a href="#">Diploma Courses</a>
						
					</li>

          <li><a href="#">UG Degrees</a>
						
					</li>

          <li><a href="#">PG Degrees</a>
						
					</li>

          <li><a href="#">Training Programs</a>
						
					</li>

          
				</ul>
			</li>
			<li><a href="#"><i ></i> career Guidance</a>
				<ul>
					<li><a href="#">Eligiblity</a>
					
					</li>
					<li><a href="#">Colleges</a>
						
					</li>

          <li><a href="#">Job Oppurtunity</a>
						
					</li>

          <li><a href="#">How to Join the Course</a>
						
					</li>
				</ul>
			</li>
			<li><a href="#"><i ></i> Students</a>
				<ul>
					<li><a href="#">Membership Registration</a></li>
					<li><a href="#">career Guidance</a></li>
					<li><a href="#">Academic Counselling Registration</a></li>
				</ul>
			</li>
			<li>
				<a href="#"><i ></i> Job Vacancies</a>
				<ul>
					<li><a href="#">Our Team</a></li>
					<li><a href="#">Contact Us</a></li>
				</ul>
			</li>
		</ul>
	</nav>
</header>
  );
}

export default NavBar;
