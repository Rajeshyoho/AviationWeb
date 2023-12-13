import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../components/InterviewDate.css"
import { Grid } from "@mui/material";
import Footer from "../../components/Footer";
import { Image } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import WeatherWidget from "../../components/Weather";
const InterviewDate = () => {
  const logo = require("../../Images/logo3.png");
  return (
    <>
        <Grid
        sx={{
          background: " #ddeef7f5",
        }}
      >
          <Grid className='linearHeader' sx={{display:"flex",justifyContent:"space-between",alignItems:"center",}}>
      <Image className='img-fluid' style={{ height: 130,  }} src={logo} />
      <WeatherWidget/>

      </Grid>

        <Grid>
       <NavBar />
        </Grid>
      </Grid>
      <Container>
        <Row style={{marginTop:"30px"}}>
        <Col>
            <h2 style={{fontSize:"48px",color:"#002F87",fontWeight:"bold",fontFamily:"sans-serif"}}>Tips for a Successful Interview</h2>
            </Col>
        </Row>
        <Row style={{marginTop:"15px"}}>
          <Col>
            <div>
              <h5>Be on time.</h5>
              <p>
                This often means 10-15 minutes early. Interviewers often are
                ready before the appointment.
              </p>
            </div>
            <div>
              <h5>
                Know the interviewer’s name, its spelling, and pronunciation.
              </h5>
              <p>
                Use it during the interview. If you don’t know the name, call
                beforehand and ask the secretary. Also, note the secretary’s
                name in case you have to call back. Secretaries can influence
                the hiring decision!
              </p>
            </div>
            <div>
              <h5>Have some questions of your own prepared in advance.</h5>
              <p>
                There is nothing wrong with having a short list of questions and
                thoughts- it shows you have done your research and want to know
                more about the organization and the position.
              </p>
            </div>
            <div>
              <h5>Bring several copies of your resume.</h5>
              <p>
                Also, bring a copy of your transcript. Carry your papers in an
                organized manner.
              </p>
            </div>
            <div>
              <h5>Have a reliable pen and a small note pad with you.</h5>
              <p>
                But do not take notes during the interview. However, immediately
                afterward, write down as much as you can remember, including
                your impression of how well you did.
              </p>
            </div>
            <div>
              <h5>Greet the interviewer with a handshake and a smile.</h5>
              <p>
                Remember to maintain eye contact (which does not mean a stare
                down).
              </p>
            </div>
            <div>
              <h5>Expect to spend some time developing rapport.</h5>
              <p>
                Don’t jump right in and get down to business. Follow the
                interviewer’s lead.
              </p>
            </div>
            <div>
              <h5>Don’t be embarrassed if you are nervous.</h5>
              <p>
                As you gain experience you’ll become more at ease with the
                interviewing process.
              </p>
            </div>
            <div>
              <h5>Focus..</h5>
              <p>
                On your attributes, your transferable skills, and your
                willingness to learn; don’t apologize for a lack of experience;
                describe your strengths in terms of what you can do for the
                organization.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <h5>Tell the truth.</h5>
              <p>Lies and exaggeration will come back to haunt you.</p>
            </div>
            <div>
              <h5>Listen carefully to the interviewer.</h5>
              <p>
                Be sure you understand the question; if not, ask for
                clarification, or restate it in your own words. Answer
                completely and concisely. Stick to the subject at hand.
              </p>
            </div>
            <div>
              <h5>
                Never slight a teacher, friend, employer, or your university.
              </h5>
              <p>Loyalty ranks high on the employer’s list.</p>
            </div>
            <div>
              <h5>Watch your grammar.</h5>
              <p>
                Employers are interested in candidates who can express
                themselves properly. Even if you have to go slowly and correct
                yourself, accuracy is preferred over ungrammatical fluency.
              </p>
            </div>
            <div>
              <h5>Be prepared for personal questions.</h5>
              <p>
                Some interviewers may not know what they can and cannot ask
                legally. Anticipate how you will handle such questions without
                losing your composure.
              </p>
            </div>
            <div>
              <h5>Wait for the interviewer to mention salary and benefits.</h5>
              <p>
                To research pay scales, refer to salary surveys and information
                on the Career Services website on in the career library.
              </p>
            </div>
            <div>
              <h5>Don’t expect a job offer at the first interview.</h5>
              <p>
                Often you will be invited to a second or even third interview
                before an offer is made several weeks later.
              </p>
            </div>
            <div>
              <h5>Close on a positive, enthusiastic note</h5>
              <p>
                Ask what the next step will be. Thank the interviewer for
                his/her time and express your interest in the job. Leave quickly
                and courteously with a handshake and a smile.
              </p>
            </div>
            <div>
              <h5>
                No interview is complete until you follow up with a thank-you
                note.
              </h5>
              <p>
                No interview is complete until you follow up with a thank-you
                note.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container >
      <Row style={{marginTop:"30px"}}>
        <Col>
            <h2 style={{fontSize:"48px",color:"#002F87",fontWeight:"bold",fontFamily:"sans-serif"}}>Interview Schedule</h2>
            </Col>
        </Row>
        <Row style={{marginTop:"20px"}}>
          <Col>
            <Table striped bordered hover responsive="lg" className="text-center table-design">
              <thead>
                <tr>
                  <th>Schedule Date</th>
                  <th>Starting Time</th>
                  <th>Ending Time</th>
                  <th>Applicant Name</th>
                  <th>Applied position</th>
                  <th>Interviewer Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02.01.2023</td>
                  <td>10.35 am</td>
                  <td>11.40 am</td>
                  <td>Candiate</td>
                  <td>Research Associate</td>
                  <td>John Foe</td>
                </tr>
                <tr >
                  <td>02.01.2023</td>
                  <td>10.35 am</td>
                  <td>11.40 am</td>
                  <td>Candiate</td>
                  <td>Research Associate</td>
                  <td>John Foe</td>
                </tr>
                <tr>
                  <td>02.01.2023</td>
                  <td>10.35 am</td>
                  <td>11.40 am</td>
                  <td>Candiate</td>
                  <td>Research Associate</td>
                  <td>John Foe</td>
                </tr>
                <tr>
                  <td>02.01.2023</td>
                  <td>10.35 am</td>
                  <td>11.40 am</td>
                  <td>Candiate</td>
                  <td>Research Associate</td>
                  <td>John Foe</td>
                </tr>
                <tr>
                  <td>02.01.2023</td>
                  <td>10.35 am</td>
                  <td>11.40 am</td>
                  <td>Candiate</td>
                  <td>Research Associate</td>
                  <td>John Foe</td>
                </tr>
                <tr>
                  <td>02.01.2023</td>
                  <td>10.35 am</td>
                  <td>11.40 am</td>
                  <td>Candiate</td>
                  <td>Research Associate</td>
                  <td>John Foe</td>
                </tr>
                <tr>
                  <td>02.01.2023</td>
                  <td>10.35 am</td>
                  <td>11.40 am</td>
                  <td>Candiate</td>
                  <td>Research Associate</td>
                  <td>John Foe</td>
                </tr>
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Grid style={{ paddingTop: 20 }}>
        <Footer/>
      </Grid>
    </>
  );
};

export default InterviewDate;