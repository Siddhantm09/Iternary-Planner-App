import { Box, Container, Paper, Toolbar, Typography } from "@mui/material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import React from "react";
import footervideo from "../../assets/videos/footer.mp4";
//import "../../footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <section>
          <Paper sx={{ bgcolor: "secondary.main" }}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <ConnectingAirportsIcon></ConnectingAirportsIcon>
                <Typography>Travel</Typography>
              </Toolbar>
            </Container>
          </Paper>
        </section>
        {/* <video
          className="video"
          src={footervideo}
          muted
          autoPlay
          loop
          type="video/mp4"
        /> */}
      </div>
    </>
  );
};

export default Footer;
