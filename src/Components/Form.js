import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Chip1 from "@mui/material/Chip";
import { signUpSchema } from "./schemas/schema";
import "./Form.css";
import { CountryDropdown } from "react-country-region-selector";
import { useFormik } from "formik";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Swimming",
  "Blogging",
  "Collaborating on open source projects",
  "Photography",
  "Cooking",
  "Yoga",
  "Solving puzzles",
  "Softball",
  "Jogging",
  "Handball",
  "Strength training",
  "Martial arts",
  "Kickboxing",
  "Dancing",
  "Working out at a gym",
  "Rock climbing",
  "Golf",
  "Hiking",
  "Listening to music",
  "Writing and journaling",
];

export default function Form() {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const initialValues = {
    name: "",
    address: "",
    hobby: [],
    country: "",
    gender: "",
  };

  const { values, errors,touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values,action) => {
      console.log("Form Values ",values);
  
      action.resetForm()
    },
  });


  return (
    <div className="container">
      <Card className="form-cont" sx={{ borderRadius: "2rem" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Form
          </Typography>

          <Typography variant="body2"  component={'div'} color="text.secondary">
            <TextField
            className="textfield"
            margin="dense"
            
              name="name"
              variant="outlined"
              fullWidth
              placeholder="username"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
           {errors.name && touched.name ?<Alert severity="error">
              {errors.name}
            </Alert> :null}   
          </Typography>
          <Typography variant="body2"  component={'div'} margin="dense" color="text.secondary">
            <textarea
              placeholder="address"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              spellCheck="false"
              
              style={{
                width: "100%",
                height: "4rem",
                marginTop: "2rem",
                padding: "1rem",
                resize:"none",
              
             
              }}
            />
             {errors.address && touched.address ?<Alert severity="error">
              {errors.address}
            </Alert> :null}   
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            component={'div'}
            style={{ marginTop: "2rem" }}
          >
            <FormControl sx={{ width: 400, mb: 4 }}>
              <InputLabel id="demo-multiple-chip-label">
                Choose your hobbies
              </InputLabel>
              <Select
              className="hobby"
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                name="hobby"
                multiple
                value={values.hobby}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{marginBottom:"4px"}}
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Choose your hobbies"
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip1 key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              {errors.hobby && touched.hobby ?<Alert severity="error">
              {errors.hobby}
            </Alert> :null}   
            </FormControl>
          </Typography>
          <Typography variant="body2"  component={'div'} color="text.secondary">
            <CountryDropdown
              className="country-dropdown"
              style={{ height: "3rem", width: "88%",marginBottom:"4px" }}
              name="country"
              value={values.country}
              onChange={(_, e) => handleChange(e)}
              onBlur={handleBlur}
            
            />

{errors.country && touched.country ?<Alert severity="error">
              {errors.country}
            </Alert> :null} 
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            component={'div'}
            style={{ marginTop: "2rem" }}
          >
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              {errors.gender && touched.gender ?<Alert severity="error">
              {errors.gender}
            </Alert> :null} 
            </FormControl>
          </Typography>
        </CardContent>
        <CardActions>
          <form onSubmit={handleSubmit} >
            <Button
              type="button"
              variant="contained"
              sx={{ margin: "1rem 12rem",marginBottom:"2rem" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </CardActions>
      </Card>
    </div>
  );
}
