// import React from "react";
// import "./HorizontalMarquee.css";
// const HorizontalMarquee = () => {
//   return (
//     <div>
//       <div class="container">
//         <h2>Our Partners</h2>
//         <section class="customer-logos slider">
//           <div class="slide">
//             <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" />
//           </div>
//           <div class="slide">
//             <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" />
//           </div>
//           <div class="slide">
//             <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" />
//           </div>
//           <div class="slide">
//             <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" />
//           </div>
//           <div class="slide">
//             <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" />
//           </div>
//           <div class="slide">
//             <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" />
//           </div>
//           <div class="slide">
//             <img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HorizontalMarquee;

// import { Box } from "@mui/material";
// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       vertical: false,
//     };

//     return (
//       <div>
//         <Slider {...settings}>
//           <div style={{ display: "flex" }}>
//             <div>
//               <h3>1</h3>
//             </div>
//             <div>
//               <h3>2</h3>
//             </div>
//             <div>
//               <h3>3</h3>
//             </div>
//             <div>
//               <h3>4</h3>
//             </div>
//             <div>
//               <h3>5</h3>
//             </div>
//             <div>
//               <h3>6</h3>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

import React, { useRef } from "react";
import { Button, Box, Typography, Grid, Card } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
const HorizontalMarquee = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    speed: 500,
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <>
      <Grid sx={{alignItems: "center", justifyContent: "center",marginLeft: 2,marginRight: 2, }}>
        <Slider {...settings}>
          <div>
            <img
              src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>

          <div>
            <img
              src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>
        </Slider>
      </Grid>
    </>
  );
};

export default HorizontalMarquee;
