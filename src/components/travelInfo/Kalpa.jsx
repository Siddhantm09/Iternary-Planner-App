import { Container, Box, TextField, MenuItem, Button } from "@mui/material";
import React, { useState } from "react";
import { KalpaImages } from "../../placesData/kalpaData";
import { types } from "../../UniversalData/UniversalData";
const Kalpa = () => {
  const [data, setData] = useState(false);
  const ShowData = () => {
    setData(true);
  };

  if (data === true) {
    return (
      <>
        <div>
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              {KalpaImages.map((data, index) => (
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
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/* ======================================================================================================= */}
          <Container maxWidth="xl" sx={{ my: 10 }}>
            <Box
              // textAlign="center"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
                // mx: "20px",
              }}
            >
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please select your currency"
                variant="filled"
              >
                {types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                onClick={ShowData}
                variant="contained"
                color="success"
                sx={{ my: "20px" }}
              >
                Submit
              </Button>
            </Box>
          </Container>
          <Button
            onClick={ShowData}
            variant="contained"
            color="success"
            sx={{ my: "20px" }}
          >
            Submit
          </Button>
        </div>
        <div></div>
      </>
    );
  }

  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          {KalpaImages.map((data, index) => (
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
      {/* ======================================================================================================= */}
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Box
          // textAlign="center"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
            // mx: "20px",
          }}
        >
          <TextField
            id="filled-select-choice"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your choice"
            variant="filled"
          >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <Button
            onClick={ShowData}
            variant="contained"
            color="success"
            sx={{ my: "20px" }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Kalpa;
