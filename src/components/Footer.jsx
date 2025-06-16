import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 3,
        px: 2,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -2px 10px rgba(0, 255, 255, 0.3)',
      }}
    >     
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 4 }}>
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          Bekzod Rahimjonov
        </Typography>
        <Typography variant="body1" textAlign="center">
          📞 +998 94 152 75 86
        </Typography>
        <Typography variant="body1" textAlign="center">
          📧 yahikooo7586@email.com
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
