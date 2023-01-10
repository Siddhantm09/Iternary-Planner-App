import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

const Footer = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ bgcolor: "secondary.main" }}>
        <Box>
          <ConnectingAirportsIcon></ConnectingAirportsIcon>
          <Typography>Travel</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
