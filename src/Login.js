import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img from "./formtask-img.jpg"

import {
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
  Grid,
} from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username,
      password,
      remember,
    });
  };

  return (
    <Container maxWidth="lg" style={{backgroundColor:"#E8E9E8"}}>
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Img}
            alt="Login"
            width="70%"
            height="410px"
          style={{marginLeft:"200px"}}
            sx={{ borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: 3,
              boxShadow: 3,
              borderRadius: 2,
              width: '70%', 
            
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Login
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button style={{ width:"200px", marginLeft:"50px"}}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Login
            </Button>
            <Grid>
        <Link className='login' to="/">Register Form </Link>
        </Grid>
          </Box>
        </Grid>
      
      </Grid>
    </Container>
  );
};

export default LoginForm;
