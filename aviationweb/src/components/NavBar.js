import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "./NavBar.css";
import SvgIcon from "@mui/material/SvgIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const logo = require("../Images/logo3.png");
  const [megaMenuOpen, setMegaMenuOpen] = React.useState(false);

  const handleToggleMegaMenu = () => {
    setMegaMenuOpen(!megaMenuOpen);
  };
  return (
    <nav className="navpage">
      <div class="wrapper">
        {/* <div class="logo">
        <a href="#">Logo</a>
      </div> */}
        <input
          type="checkbox"
          id="menu_btn"
          checked={megaMenuOpen}
          onChange={handleToggleMegaMenu}
        />
        <input
          type="checkbox"
          id="cancel_btn"
          checked={megaMenuOpen}
          onChange={handleToggleMegaMenu}
        />
        <ul class="nav_links">
          <label for="cancel_btn" class="btn cancel_btn">
            <FontAwesomeIcon icon={faTimes} />
          </label>
          {/* <Button htmlFor="cancel_btn" className="btn cancel_btn" style={{ backgroundColor: "white", color: "black" }}>Close</Button> */}
          <li>
            <a href="#AboutUs" class="desktop_item">
              About Us
            </a>
            <input type="checkbox" id="showMegaAboutUs" />
            <label
              htmlFor="showMegaAboutUs"
              class="mobile_item"
              onClick={() =>
                (document.getElementById("menu_btn").checked = true)
              }
            >
              About Us
            </label>
            <div class="mega_box1">
              <div class="content">
                <div class="row img_row">
                  {/* <header>Our Services</header>  */}
                  <div></div>
                </div>

                <div class="row">
                  <ul class="mega_links first_links">
                    <li>
                      <a href="#AboutUs">About ASDHEC</a>
                    </li>
                    <li>
                      <a href="#VisionMission">Vision & Mission</a>
                    </li>
                    <li>
                      <a href="#ActsStatus">Acts & Statues</a>
                    </li>
                    <li>
                      <a href="#AboutLogo">ASHEC logo</a>
                    </li>
                  </ul>
                </div>

                <div class="row">
                  <ul class="mega_links">
                    <li>
                      <a href="#Associate">Associate Institute / Colleges</a>
                    </li>
                    <li>
                      <a href="#TrainingProgram">Training programmes</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#Accademic" class="desktop_item">
              Accademic
            </a>
            <input type="checkbox" id="showMegaAcademic" />
            <label for="showMegaAcademic" class="mobile_item">
              Academic
            </label>
            <div class="mega_box2">
              <div class="content">
                <div class="row img_row">
                  {/* <header>Our Services</header>  */}
                  <div></div>
                </div>

                <div class="row">
                  <ul class="mega_links first_links">
                    <li>
                      <a href="#AcademicsCouncil">Academic Council</a>
                    </li>
                    <li>
                      <a href="#Department">Department</a>
                    </li>
                    <li>
                      <a href="#AssociateRegulations">
                        Associate & Regulations
                      </a>
                    </li>
                    <li>
                      <a href="#Certificate">Certification Courses</a>
                    </li>
                  </ul>
                </div>

                <div class="row">
                  <ul class="mega_links">
                    <li>
                      <a href="#DiplomaCourse">Diploma Courses</a>
                    </li>
                    <li>
                      <a href="#UGDegrees">UG Degrees</a>
                    </li>
                    <li>
                      <a href="#PGDegrees">PG Degrees</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" class="desktop_item">
            Carrier Guidance
            </a>
            <input type="checkbox" id="showMegaCarrerGuidance" />
            <label for="showMegaCarrerGuidance" class="mobile_item">
            carrier Guidance
            </label>
            <div class="mega_box3">
              <div class="content">
                <div class="row img_row">
                  {/* <header>Our Services</header>  */}
                  <div class="services_img"></div>
                </div>

                <div class="row">
                  <ul class="mega_links first_links">
                    <li>
                      <a href="#Eligibility">Eligiblity</a>
                    </li>
                    <li>
                      <a href="#Colleges">Colleges</a>
                    </li>
                    <li>
                      <a href="#JobOpportunities">Job Oppurtunity</a>
                    </li>
                    <li>
                      <a href="#HowToJoinCourse">How To Join This Courses?</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" class="desktop_item">
              Students
            </a>
            <input type="checkbox" id="showMegaStudents" />
            <label for="showMegaStudents" class="mobile_item">
              Students
            </label>
            <div class="mega_box4">
              <div class="content">
                <div class="row img_row">
                  {/* <header>Our Services</header>  */}
                  <div class="services_img"></div>
                </div>

                <div class="row">
                  <ul class="mega_links first_links">
                    <li>
                      <a href="#MembershipRegistration">
                        Membership Registration
                      </a>
                    </li>
                    <li>
                      <a href="#CarrerGuidanceRegistration">
                      carrier Guidance Registration
                      </a>
                    </li>
                    <li>
                      <a href="#AcademicCounsellingRegistration">
                        Academic Counselling Registration
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="#" class="desktop_item">
              Job Vaccancies
            </a>
            <input type="checkbox" id="showMegaJobVaccancies" />
            <label for="showMegaJobVaccancies" class="mobile_item">
              Job Vaccancies
            </label>
            <div class="mega_box5">
              <div class="content">
                <div class="row img_row">
                  {/* <header>Our Services</header>  */}
                  <div class="services_img"></div>
                </div>

                <div class="row">
                  <ul class="mega_links first_links">
                    <li>
                      <a href="#ExperienceFeatures">Experience / Features</a>
                    </li>
                    <li>
                      <a href="#CompanyName">Company Name</a>
                    </li>
                    <li>
                      <a href="#InterviewDate">Interview Date</a>
                    </li>

                    <li>
                      <a href="#JobDescription">Job Description</a>
                    </li>
                  </ul>
                </div>

                <div class="row">
                  <ul class="mega_links first_links">
                    <li>
                      <a href="#Location">Location</a>
                    </li>
                    <li>
                      <a href="#DesignationPosition">Designation / Position</a>
                    </li>

                    <li>
                      <a href="#RolesResponsibilites">Role & Responsiblites</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <label
          for="menu_btn"
          class="btn menu_btn"
          style={{
            padding: 1,
            justifyContent: "center",
            alignItems: "center",
            Right: "10px",
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </label>
        {/* <Button htmlFor="menu_btn" className="btn menu_btn" style={{ backgroundColor: "white", color: "black" }}>Open</Button> */}
      </div>
    </nav>
  );
};

export default NavBar;
