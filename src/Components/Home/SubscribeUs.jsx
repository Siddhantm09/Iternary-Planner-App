import React from "react";
import { Container } from "@mui/system";
import { Button, TextField, Typography, Box, Grid } from "@mui/material";
import subscribe from "../../Assets/subscribe.svg";
import Typewriter from "typewriter-effect";

const SubscribeUs = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Typography
          //textAlign="center"
          sx={{
            color: "secondary.main",
            fontFamily: "cursive",
            fontSize: "30px",
          }}
        >
          Subscribe for plan updates
        </Typography>
        <Container maxWidth="md" sx={{ my: 5, mb: 10 }}>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              display="flex"
              justifyContent="center"
            >
              <img
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  padding: 0,
                  margin: 0,
                }}
                src={subscribe}
                alt="/"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              display="flex"
              justifyContent="center"
            >
              <Box
                width={700}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                //margin="auto"
                //marginTop={5}
                //padding={3}
                //borderRadius={5}
              >
                <TextField
                  id="filled-textarea"
                  label="Enter your email"
                  margin="normal"
                  multiline
                  variant="filled"
                  sx={{ m: 1, width: "32ch" }}
                ></TextField>

                <TextField
                  id="filled-textarea"
                  label="Enter your Contact"
                  margin="normal"
                  multiline
                  variant="filled"
                  sx={{ m: 1, width: "32ch" }}
                ></TextField>

                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    marginTop: 3,
                    borderRadius: 10,
                    borderColor: "#000",
                    backgroundColor: "#7064fc",
                    color: "#ffffff",
                    ":hover": {
                      borderColor: "#7064fc",
                      backgroundColor: "#ffffff",
                      color: "#7064fc",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default SubscribeUs;
