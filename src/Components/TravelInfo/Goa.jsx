import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { HotelsData } from "../../placesData/goaData";
import { GoaImages } from "../../placesData/goaData";
import { Box, Container, Grid } from "@mui/material";
import mmtLogo from "../../assets/icons/Make-My-Trip-Logo-PNG.png";
import bdcLogo from "../../assets/icons/589a4c2b5aa6293a4aac48c9.png";

const Goa = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {GoaImages.map((data, index) => (
            <div
              key={index}
              class="carousel-item active"
              data-bs-interval="8000"
            >
              <img key={index} src={data} class="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Typography>Hotels</Typography>
      <Container maxWidth="xl" sx={{ my: 10 }}>
        {HotelsData.map((key, index) => (
          <Card
            sx={{
              mx: "20px",
              my: "20px",
            }}
            key={key.id}
          >
            <Grid
              container
              spacing={5}
              sx={{ marginBottom: { xs: 2, md: 5, sm: 3 } }}
            >
              <Grid item lg={3} sm={6} xs={12}>
                <CardMedia
                  sx={{
                    marginTop: { xs: 0, lg: 4, sm: 5, md: 5 },
                    fontSize: {
                      lg: 45,
                      sm: 54,
                      xs: 34,
                    },
                    marginLeft: { lg: 5, xs: 0, sm: 2 },
                  }}
                  component="img"
                  alt="green iguana"
                  height="300"
                  //width="300"
                  image={key.image}
                />
              </Grid>
              <Grid
                item
                lg={9}
                sm={6}
                xs={12}
                sx={{ marginTop: { xs: 0, lg: 8, sm: 5, md: 5 } }}
                // style={{
                //   maxWidth: "100%",
                //   height: "auto",
                //   margin: 0,
                // }}
              >
                <CardContent
                  sx={{
                    marginTop: { xs: 0, lg: 0, sm: 0, md: 0 },
                  }}
                >
                  <Box>
                    <Typography sx={{ color: "info.main", borderRadius: 1 }}>
                      {key.ratings}
                    </Typography>
                    <Typography>{key.totalReviews}</Typography>
                  </Box>

                  <Typography gutterBottom variant="h5" component="div">
                    {key.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {key.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {key.coupleInfo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {key.pricePerNight}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {key.keyInfo}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>

            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <img
                src={mmtLogo}
                sx={{ mr: "20px" }}
                style={{
                  height: "19px",
                  marginRight: "7px",
                }}
              />
              {/* <Button size="small">Share</Button> */}
              <img
                src={bdcLogo}
                style={{ height: "17px", marginRight: "10px" }}
              />
              {/* <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Goa;
