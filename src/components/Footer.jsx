import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'transparent',
        color: 'white',
        py: 6,
        px: 2,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
          <Typography variant="h6" fontWeight="bold" textAlign={{ xs: 'center', md: 'left' }}>
            Bekzod Rahimjonov
          </Typography>
          <Typography variant="body2" color="white" sx={{ mt: 0.5 }}>
            Crafting thoughtful web experiences
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', color: 'white' }}>
          <Typography variant="body1">📞 +998 94 152 75 86</Typography>
          <Typography variant="body1">📧 yahikooo7586@email.com</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
