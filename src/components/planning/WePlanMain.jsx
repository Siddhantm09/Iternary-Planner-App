import React from "react";
import { useState } from "react";
import { TextField, Typography, Button, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";

import { Container } from "@mui/system";

const WePlanMain = ({ val }) => {
  const mainValue = val - 1;
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [value, setValue] = useState(null); //date and time picker
  const [valueEnd, setValueEnd] = useState(null); //end date picker
  return (
    <>
      <Container maxWidth="xl">
        {Array.from(Array(mainValue)).map((c, index) => {
          return (
            <>
              <Typography
                align="center"
                variant="h4"
                component="h2"
                key={c}
                sx={{ mt: "20px", mb: "20px" }}
              >
                Enter Trip {index + 1} Details
              </Typography>
              <Box
                textAlign="center"
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "35ch", ml: "1px" },
                  mx: "20px",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Enter Date & Time"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DatePicker
                    label="End Date"
                    value={valueEnd}
                    onChange={(newValue) => {
                      setValueEnd(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <TextField
                  id="outlined-textarea"
                  label="Start Time"
                  multiline
                  variant="filled"
                  align="center"
                />

                <TextField
                  id="outlined-textarea"
                  label="Vehicle"
                  multiline
                  variant="filled"
                />
                <TextField
                  id="outlined-textarea"
                  label="Budget"
                  multiline
                  variant="filled"
                />
                <TextField
                  id="outlined-textarea"
                  label="Important Notes for us"
                  multiline
                  variant="filled"
                />
              </Box>
            </>
          );
        })}
      </Container>
      <Box align="center">
        <Button variant="contained" color="success" sx={{ my: "20px" }}>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default WePlanMain;
