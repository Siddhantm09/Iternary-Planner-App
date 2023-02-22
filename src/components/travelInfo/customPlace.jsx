import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Container,
  CardContent,
  CardMedia,
  MenuItem,
  Card,
  Grid,
} from "@mui/material";
import { types } from "../../UniversalData/UniversalData";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { CardActionArea } from "@mui/material";
import { ForkLeft } from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import image from "../../assets/otherImages/search.svg";
import { textAlign } from "@mui/system";

const CustomPlace = () => {
  const [val, setVal] = useState("");
  const [valtwo, setValTwo] = useState("");
  const [radius, setRadius] = useState("");
  const [result, setResult] = useState([]);
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");

  const placebytext = {
    method: "GET",
    url: "https://trueway-places.p.rapidapi.com/FindPlaceByText",
    params: { text: val, language: "en" },
    headers: {
      "X-RapidAPI-Key": "4fcea2589fmsh1582a596188114cp1913a0jsndd859420a766",
      "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
    },
  };

  const handleSubmit = () => {
    axios
      .request(placebytext)
      .then(function (response) {
        console.log(response.data);

        const latitude = response.data.results[0].location.lat;

        const longitude = response.data.results[0].location.lng;

        console.log(latitude, longitude);

        const searchbyLatLong = {
          method: "GET",
          url: "https://trueway-places.p.rapidapi.com/FindPlacesNearby",
          params: {
            location: `${latitude},${longitude}`,

            type: valtwo,
            radius: radius,
            language: "en",
          },
          headers: {
            "X-RapidAPI-Key":
              "4fcea2589fmsh1582a596188114cp1913a0jsndd859420a766",
            "X-RapidAPI-Host": "trueway-places.p.rapidapi.com",
          },
        };

        axios
          .request(searchbyLatLong)
          .then(function (response) {
            console.log(response.data.results);
            setResult(response.data.results);
          })
          .catch(function (error) {
            console.error(error.response.data.message);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  if (result) {
    return (
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Grid
          container
          spacing={7}
          sx={{ marginBottom: { xs: 2, lg: 10, md: 5, sm: 8 } }}
        >
          <Grid item lg={6} sm={6} xs={12}>
            <Typography
              variant="h2"
              textAlign="center"
              sx={{
                marginTop: { xs: 0, lg: 20, sm: 5, md: 12 },
                fontSize: {
                  lg: 65,
                  sm: 54,
                  xs: 34,
                },
                marginLeft: { lg: 5, xs: 0, sm: 2 },
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Search Anything !").start();
                }}
              />
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <img
              src={image}
              alt="/"
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: 0,
                margin: 0,
              }}
            />
          </Grid>
        </Grid>
        <Box
          textAlign={"center"}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
          }}
        >
          <TextField
            id="outlined-textarea"
            label="Search your place"
            placeholder="Enter Your Location"
            multiline
            variant="filled"
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          <TextField
            id="filled-select-currency"
            select
            label="Select"
            helperText="Please select type"
            variant="filled"
            onChange={(e) => {
              setValTwo(e.target.value);
            }}
            sx={{ textAlign: "left" }}
          >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-textarea"
            label="Search in Radius"
            // placeholder="Search in Radius"
            multiline
            variant="filled"
            onChange={(e) => {
              setRadius(e.target.value);
            }}
          />
          <Box>
            <Button
              variant="outlined"
              sx={{ mt: "19px", mx: "19px" }}
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Typography
          sx={{
            color: "secondary.main",
            fontFamily: "",
            fontSize: "30px",
          }}
          variant="h6"
          mt="60px"
          mb="15px"
        >
          Your Search Results will appear below!
        </Typography>

        {result.map((value) => (
          <Card
            sx={{
              mx: "20px",
              my: "20px",
              border: "1px solid black",
            }}
            key={value.id}
          >
            <CardActionArea>
              {/* <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.name}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  Address:{value.address}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  Contact: {value.phone_number}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  Type:{value.types[0]},{value.types[1]}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  Distance in meters: {value.distance}
                </Typography>
                {/* {value.types.map((key, idx) => (
                <Typography gutterBottom variant="h7" component="div" key={idx}>
                  {key[0]}
                </Typography>
              ))} */}

                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    );
  }

  return (
    <div>
      <Container maxWidth="xl" sx={{ my: 10 }}>
        <Grid
          container
          spacing={7}
          sx={{ marginBottom: { xs: 2, lg: 10, md: 5, sm: 8 } }}
        >
          <Grid item lg={6} sm={6} xs={12}>
            <Typography
              variant="h2"
              textAlign="center"
              fontFamily={"cursive"}
              sx={{
                marginTop: { xs: 0, lg: 20, sm: 5, md: 12 },
                fontSize: {
                  lg: 65,
                  sm: 54,
                  xs: 34,
                },
                marginLeft: { lg: 5, xs: 0, sm: 2 },
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Search Anything !").start();
                }}
              />
            </Typography>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <img
              src={image}
              alt="/"
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: 0,
                margin: 0,
              }}
            />
          </Grid>
        </Grid>
        <Box
          textAlign={"center"}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-textarea"
            label="Search your place"
            placeholder="Enter Your Location"
            multiline
            variant="filled"
            onChange={(e) => {
              setVal(e.target.value);
            }}
          />
          <TextField
            id="filled-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select type"
            variant="filled"
          >
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-textarea"
            label="Search in Radius"
            // placeholder="Search in Radius"
            multiline
            variant="filled"
            onChange={(e) => {
              setRadius(e.target.value);
            }}
          />
          <Box>
            <Button
              variant="outlined"
              sx={{ mt: "19px", mx: "19px" }}
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Box>
        </Box>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            marginTop: { xs: 10, lg: 20, sm: 15, md: 10 },
            fontSize: {
              lg: 50,
              sm: 54,
              xs: 34,
            },
            marginLeft: { lg: 5, xs: 0, sm: 2 },
          }}
        >
          No Result found, check the data entered or try something else
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100 }} />
        </Typography>
      </Container>
    </div>
  );
};

export default CustomPlace;
