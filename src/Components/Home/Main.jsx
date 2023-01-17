import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  CardActions,
  Box,
  Tooltip,
  IconButton,
  Toolbar,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Kalpa from "../../Assets/kalpa.jpg";
import maldives from "../../Assets/maldives.jpg";
import newyork from "../../Assets/statue of liberty.jpg";
import uttarakhand from "../../Assets/uttarakhand.jpeg";
import kanyakumari from "../../Assets/kanyakumari.jpg";
import panchgani from "../../Assets/Panchgani.jpg";
import ranthambore from "../../Assets/ranthambore.jpg";
import goa from "../../Assets/goa.jpg";
import kerala from "../../Assets/kerala.jpg";
import { Container } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const cards = [
  {
    title: "NewYork",
    country: "USA",
    id: 1,
    img: newyork,
    about:
      "This city is often thought to be the center of the world. New York, the most populous city in the United States (US), is the capital of culture, finance, media and international diplomacy. Its five counties – Brooklyn, Queens, Manhattan, The Bronx and Staten Island are all famous in their own special ways",
  },
  {
    title: "Maldives",
    country: "India",
    id: 2,
    img: maldives,
    about:
      "The Maldives is famous for a number of reasons, including its vibrant culture, pristine beaches, sprawling greenery, and fascinating landmarks. Apart from the numerous enchanting landmarks, Maldives is also famous for water sports and other adventure activities",
  },
  {
    title: "Kalpa",
    country: "India",
    id: 3,
    img: Kalpa,
    about:
      "Kalpa is a small village in the Sutlej river valley, above Reckong Peo in the Kinnaur district of Himachal Pradesh, Northern India, in the Indian Himalaya. The region is inhabited by the Kinnauri people and is known for its apple orchards, as apples are a major cash-crop for the region",
  },
  {
    title: "Kanyakumari",
    country: "India",
    id: 4,
    img: kanyakumari,
    about:
      "Kanyakumari tourism has benefited from the city's special spiritual importance. It is a renowned pilgrimage site since it is said to be the home of the virgin Goddess Kanya Kumari. The town also provides something for individuals of various faiths, making it an excellent destination for your next trip.",
  },
  {
    title: "Kerala",
    country: "India",
    id: 5,
    img: kerala,
    about:
      "Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world",
  },
  {
    title: "Uttarakhand",
    country: "India",
    id: 6,
    img: uttarakhand,
    about:
      "Your highness Mussoorie is the 'Queen of the Hills' and often revered as one of the best tourist destinations in Uttarakhand. Here one can enjoy boating on Lake Mist, camp at Nag Tibba, stroll at Landour Bazaar or visit the George Everest's House.The temples in Uttarakhand are located at beautiful locations therefore Uttarakhand is also regarded as heaven on earth",
  },
  {
    title: "Panchgani",
    country: "India",
    id: 7,
    img: panchgani,
    about:
      "Panchgani sightseeing is about visiting places like Table Land, Tapola Water Sports Centre, Sydney Point, Rajapuri caves, Kamalgad Fort and much more. This quarter is also an ideal destination for the trekkers as they can not only wander-about the green trails but also admire the rich flora and fauna.",
  },
  {
    title: "Ranthambore National Park",
    country: "India",
    id: 8,
    img: ranthambore,
    about:
      "Ranthambore National Park is mostly famous for its tigers, as it is one of the best places in India to spot those majestic animals. Many tigers living in the park were the focus of documentaries and movies.",
  },
  {
    title: "Goa",
    country: "India",
    id: 9,
    img: goa,
    about:
      "Goa is one of the most favorite destination among Indian tourists due to its pristine beaches. Dotted with hundreds of impressive beaches in Goa, the incredible coastline of more than 100 km offers beautiful views and serenity where tourists enjoy and relax in the Sun.",
  },
];
export default function Main() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "secondary.main",
            fontFamily: "cursive",
            fontSize: "30px",
          }}
          variant="h6"
          mt="60px"
          mb="15px"
        >
          Most visited destinations
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid
              item
              xs={12}
              lg={4}
              md={6}
              sm={6}
              key={card.id}
              sx={{ mt: "10px" }}
            >
              <Card sx={{ borderColor: "#ba68c8" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ mb: 0 }}
                  >
                    {card.title}
                  </Typography>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <LocationOnIcon />
                    <Typography>{card.country}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {card.about}
                  </Typography>
                </CardContent>

                <CardActions sx={{ paddingBottom: 0 }}>
                  <Container disableGutters={true}>
                    <Toolbar disableGutters>
                      <Box
                        sx={{
                          flexGrow: 1,
                          display: { xs: "flex", md: "flex" },
                        }}
                      >
                        <Button sx={{ color: "#6c64fc" }} size="small">
                          Share
                        </Button>
                        <Button sx={{ color: "#6c64fc" }} size="small">
                          Plans
                        </Button>
                      </Box>

                      <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Like">
                          <IconButton>
                            <ThumbUpIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Toolbar>
                  </Container>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
