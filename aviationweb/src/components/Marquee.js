// VerticalMarquee.js

import React from "react";
import "./VerticalMarquee.css";
import { Grid, Card, Box, Typography, Divider } from "@mui/material";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
const VerticalMarquee = () => {
  const updates = require("../Images/gif.gif");

  return (
    <Grid>
      <Card sx={{ backgroundColor: "#FFFFFF" }}>
        <Box
          sx={{
           
            backgroundColor: "#03254c",
            borderBottomRightRadius: 50,
            width: { xs: "100%", lg: "100%" },
            borderTop:"3px solid #9C0"
          }}
        >
          <Typography color="white" padding={1}>
            LATEST UPDATES
          </Typography>
        </Box>

        <div className="marquee-container">
          <div className="marquee">
            <img src={updates} />
            <a href="#">
              &#10147; Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a pieceooked up one of the more
              obscure Latin words, consectetur,
            </a>
            <hr />
            <img src={updates} />
            <a href="#">
              &#10147; Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words, consectetur,(The Extremes of Good and Evil)
            </a>
            <hr />
            <img src={updates} />
            <a href="#">
              &#10147; Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
              "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC.
            </a>
            <hr />
            <img src={updates} />
            <a href="#">
              &#10147; The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum"
            </a>
            <hr />
            <img src={updates} />
            <a href="#">
              &#10147; Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
              Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions
            </a>
            <hr />
            <a href="#">
              &#10147; It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. words, consectetur,
              from a Lorem Ipsum passage
            </a>
            <hr />
            <a href="#">
              &#10147; Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
              "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC.
            </a>
            <hr />
            
            <a href="#">
              &#10147; The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum"
            </a>
            <hr />
            <a href="#">
              &#10147; Rackham.Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old.
            </a>
            <hr />
            <a href="#">
              &#10147; Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words, consectetur, from a Lorem Ipsum passage
            </a>
            <hr />
           
            <a href="#">
              &#10147; Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
              "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC.
            </a>
            <hr />
            <a href="#">
              &#10147; The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum"
            </a>
            <hr />
            <a href="#">
              &#10147; It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia
            </a>
            <hr />
           
            <a href="#">
              &#10147; Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
              "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
              Cicero, written in 45 BC.
            </a>
            <hr />
            <a href="#">
              &#10147; The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia
            </a>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default VerticalMarquee;
