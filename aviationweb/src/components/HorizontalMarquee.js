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
      <Grid
        sx={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 2,
          marginRight: 2,
        }}
      >
        <Slider {...settings}>
          <div>
            <img
              src="https://flyairaviationacademy.in/images/z/3.png"
              style={{ height: 150, width: "auto" }}
            />
          </div>

          <div>
            <img
              src="https://flyairaviationacademy.in/images/z/4.png"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://1000logos.net/wp-content/uploads/2020/03/Emirates-Logo.png"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://download.logo.wine/logo/IndiGo/IndiGo-Logo.wine.png"
              style={{ height: 150, width: "auto" }}
            />
          </div>

          <div>
            <img
              src="https://i.pinimg.com/originals/a6/a3/e2/a6a3e2e8d6f7d18d227f3ce86722ecc4.png"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://logowik.com/content/uploads/images/delta-airlines3986.logowik.com.webp"
              style={{ height: 150, width: "auto" }}
            />
          </div>
         
          <div>
            <img
              src="https://assets.stickpng.com/images/587b511a44060909aa603a81.png"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://1000logos.net/wp-content/uploads/2017/03/Lufthansa-symbol.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>
        </Slider>
      </Grid>
    </>
  );
};

export default HorizontalMarquee;
