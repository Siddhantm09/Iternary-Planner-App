import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import subscribe from "../../Assets/subscribe.svg";

const Subscribe = () => {
  return (
    <div>
      <Container sx={{ marginTop: 10 }}>
        <Typography variant="h4" textAlign="center">
          Subscribe To New Plan Updates
        </Typography>

        <Grid container spacing={2} sx={{ marginTop: 5, marginBottom: 40 }}>
          <Grid item lg={6} sm={6} xs={12}>
            <img
              src={subscribe}
              alt="/"
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: 0,
                margin: 0,
              }}
            />
          </Grid>
          <Grid
            item
            sx={{ border: 1, marginTop: 3, marginLeft: 2 }}
            // container
            // justify="flex-end"
            // alignItems="center"
            spacing={2}
            lg={6}
            sm={6}
            xs={12}
            mt="80px"
          >
            <Grid
              sx={{ marginTop: { lg: 9, xs: 2.5 }, marginBottom: { xs: 2.5 } }}
            >
              <Grid
                item
                lg={6}
                sm={6}
                xs={12}
                sx={{ marginLeft: { lg: 14, xs: 0 } }}
              >
                <TextField
                  id="filled-textarea"
                  label="Enter your email"
                  multiline
                  variant="filled"
                  sx={{ m: 1, width: "35ch" }}
                />
              </Grid>
              <Grid item lg={6} sm={6} xs={12} sx={{ marginLeft: { lg: 14 } }}>
                <TextField
                  alignItems="center"
                  id="filled-textarea"
                  label="Enter your email"
                  multiline
                  variant="filled"
                  sx={{ m: 1, width: "35ch" }}
                />
              </Grid>
              <Grid
                item
                lg={12}
                sm={12}
                xs={12}
                sx={{ marginLeft: { lg: 28, xs: 14 }, marginTop: { xs: 2 } }}
              >
                <Button variant="outlined" size="medium">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Subscribe;
