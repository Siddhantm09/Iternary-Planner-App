import * as React from "react";
import { useState, useEffect } from "react";
import { TextField, Typography, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";

const YouPlanMain = ({ count }) => {
  const mainCount = count - 1;

  const [value, setValue] = useState(null); //date and time picker

  const [formData, updateFormData] = useState({
    DateAndTime: "",
    EndDate: "",
    Vehicle: "",
    Distance: "",
    PlacestoVisit: "",
    Costing: "",
    ImportantNotes: "",
    Days: "",
    Hours: "",
    Mins: "",
  });

  const [formInfo, updateFormInfo] = useState([
    {
      DateAndTime: "",
      EndDate: "",
      Vehicle: "",
      Distance: "",
      PlacestoVisit: "",
      Costing: "",
      ImportantNotes: "",
      Days: "",
      Hours: "",
      Mins: "",
    },
  ]);

  const addFormData = (formData) => {
    const newData = [...formInfo, formData];
    updateFormInfo(newData);
  };

  const [valueEnd, setValueEnd] = useState(null); //end date picker

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFormData(formData);
  };

  useEffect(() => {
    console.log(formInfo);
  }, [formInfo]);

  // const changeDateVal = (e) => {
  //   setValue({
  //     ...value,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div>
      <Container maxWidth="xl">
        {Array.from(Array(mainCount)).map((c, index) => {
          return (
            <div>
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
                align="center"
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "35ch", ml: "1px" },
                  mx: "20px",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    name="DateAndTime"
                    label=" Enter Date & Time "
                    value={value}
                    onChange={(newValue) => {
                      updateFormData(newValue);

                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <DatePicker
                    name="EndDate"
                    label="EndDate"
                    value={valueEnd}
                    onChange={(newValue) => {
                      updateFormData(newValue);
                      setValueEnd(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <TextField
                  name="Vehicle"
                  id="outlined-textarea"
                  label="Vehicle"
                  multiline
                  variant="filled"
                  //value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Distance"
                  id="outlined-textarea"
                  label="Distance"
                  multiline
                  variant="filled"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="PlacestoVisit"
                  id="outlined-textarea"
                  label="Places to visit"
                  multiline
                  variant="filled"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Costing"
                  id="outlined-textarea"
                  label="Costing"
                  multiline
                  variant="filled"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="ImportantNotes"
                  id="outlined-textarea"
                  label="Important Notes"
                  multiline
                  variant="filled"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Days"
                  label="Days"
                  variant="filled"
                  id="outlined-start-adornment"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Hours"
                  label="Hours"
                  variant="filled"
                  id="outlined-start-adornment"
                  value={formData.name}
                  onChange={handleChange}
                />

                <TextField
                  name="Mins"
                  label="Mins"
                  variant="filled"
                  id="outlined-start-adornment"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Box>
            </div>
          );
        })}
      </Container>
      <Box align="center">
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="success"
          sx={{ my: "20px" }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default YouPlanMain;
