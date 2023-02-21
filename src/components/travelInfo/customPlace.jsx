import React, { useState } from "react";
import axios from "axios";

const CustomPlace = () => {
  const [val, setVal] = useState("");
  const [valtwo, setValTwo] = useState("");
  const [radius, setRadius] = useState("");

  const options = {
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
      .request(options)
      .then(function (response) {
        console.log(response.data);

        const latitude = response.data.results[0].location.lat;

        const longitude = response.data.results[0].location.lng;

        console.log(latitude, longitude);

        const options1 = {
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
          .request(options1)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setValTwo(e.target.value);
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setRadius(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CustomPlace;
