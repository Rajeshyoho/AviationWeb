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
              src="https://dirigeants-entreprise.com/content/uploads/jet-airways-600x600.jpg"
              style={{ height: 150, width: "auto" }}
            />
          </div>

          <div>
            <img
              src="https://4.bp.blogspot.com/-T7Hk67wuS_k/TtTRAli90iI/AAAAAAAAA80/APct16Mk1x0/s1600/AirAsia-logo-7751ECFAAE-seeklogo.com.gif"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://p.kindpng.com/picc/s/792-7920745_emirates-hd-png-download.png"
              style={{ height: 150, width: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://s28477.pcdn.co/wp-content/uploads/2020/07/Indigo_logo.png"
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
              src="https://th.bing.com/th/id/R.4492c0639fb0d2fd6cd616512d522c67?rik=40Aq%2fY%2b5C2%2buGg&riu=http%3a%2f%2fwww.logotypes101.com%2flogos%2f762%2f13B808CB3427A3DA07F6970292F522DD%2fMalaysia_Airlines110.png&ehk=UzjD6rxqi4QhX338Qk799PpK3BePfQZ3bVr9j%2fzWov4%3d&risl=&pid=ImgRaw&r=0"
              style={{ height: 150, width: "auto" }}
            />
          </div>
         
          <div>
            <img
              src="https://th.bing.com/th/id/R.5f9be5876eda5d373d7f91a8faf5e659?rik=AMH8TOMKrK2Y6w&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2017%2f03%2fair_india_logo_download.jpg&ehk=zFeqOgOta8nERxJ4botm2uV5IJp4BKKlHJic8HtkLMo%3d&risl=&pid=ImgRaw&r=0"
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
