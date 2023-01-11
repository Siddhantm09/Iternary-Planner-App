import { Box, Container, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

const Footer = () => {
  return (
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
  );
};

export default Footer;
