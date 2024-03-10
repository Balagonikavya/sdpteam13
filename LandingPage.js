// LandingPage.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to Weather API App
      </Typography>
      {/* Your landing page content here */}
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
};

export default LandingPage;
