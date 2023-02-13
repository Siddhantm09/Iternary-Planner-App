import { Box, Container, Paper, Toolbar, Typography } from "@mui/material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import React from "react";
import { useLocation } from "react-router-dom";
import footervideo from "../../assets/videos/footer.mp4";
//import "../../footer.css";

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/login" || pathname === "/signup") return null;

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
