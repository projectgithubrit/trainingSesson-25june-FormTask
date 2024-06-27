import React, { useState } from 'react';
import Img from "./formtask-img.jpg"
import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    hobbies: [],
    profilePic: null,
    country: '',
    bio: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'agreeTerms') {
        setFormData({ ...formData, [name]: checked });
      } else {
        const newHobbies = checked
          ? [...formData.hobbies, value]
          : formData.hobbies.filter((hobby) => hobby !== value);
        setFormData({ ...formData, hobbies: newHobbies });
      }
    } else if (type === 'file') {
      setFormData({ ...formData, profilePic: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      fullname: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      hobbies: [],
      profilePic: null,
      country: '',
      bio: '',
      agreeTerms: false,
    });
  };

  return (
    <Box p={2} style={{backgroundColor:"#E8E9E8"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Img}
            alt="Registration"
            width="100%"
            height="780px"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit} onReset={handleReset}>
            <Typography variant="h4" mb={2}>
              Registration Form
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="tel"
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date of Birth"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid container item xs={12}>
                <FormControl component="fieldset">
                  <Typography component="legend" className="fldrow">Gender:</Typography>
                  <RadioGroup className="genderRadio"
                    row
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid container item xs={12}>
                <FormControl component="fieldset">
                  <Typography component="legend" className='fldrow'>Hobbies:</Typography>
                  <FormGroup row className="genderRadio">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hobbies.includes('reading')}
                          onChange={handleChange}
                          name="hobbies"
                          value="reading"
                        />
                      }
                      label="Reading"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hobbies.includes('traveling')}
                          onChange={handleChange}
                          name="hobbies"
                          value="traveling"
                        />
                      }
                      label="Traveling"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hobbies.includes('cooking')}
                          onChange={handleChange}
                          name="hobbies"
                          value="cooking"
                        />
                      }
                      label="Cooking"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hobbies.includes('talking')}
                          onChange={handleChange}
                          name="hobbies"
                          value="talking"
                        />
                      }
                      label="Talking"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="file"
                  label="Profile picture"
                  InputLabelProps={{ shrink: true }}
                  onChange={handleChange}
                  name="profilePic"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="country">Country</InputLabel>
                  <Select
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">Select your country</MenuItem>
                    <MenuItem value="us">India</MenuItem>
                    <MenuItem value="ca">Canada</MenuItem>
                    <MenuItem value="uk">United Kingdom</MenuItem>
                    <MenuItem value="au">Australia</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  placeholder='Write something'
                />
              </Grid>
              <Grid container item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      name="agreeTerms"
                      required
                    />
                  }
                  label="I agree to the Terms and Conditions"
                />
              </Grid>
              <Grid item xs={12}>
                <Box mt={2} display="flex">
                  <Button variant="contained" color="primary" type="submit" style={{ borderRadius: "7px" }}>
                    Submit
                  </Button>
                  <Button variant="outlined" type="reset" style={{ marginLeft: "20px", backgroundColor: "purple", color: "white", borderRadius: "7px" }}>
                    Reset
                  </Button>
                </Box>
              </Grid>
              <Grid  container item xs={12}>
              <Link className='login' to="/login">Login Form</Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
