import { Box, Grid, Container, Typography, Button } from '@mui/material';

const Footer = () => {
  const elements = [
    {
      header: 'Aiuda',
      links: ['Contact', 'Support', 'Ira'],
    },
    {
      header: 'Mi cuenta',
      links: ['Login', 'Register', 'New new'],
    },
  ];

  const generateFeetElements = () => {
    const footerElements = elements.map((column, idx) => {
      return (
        <Grid item xs={12} md={5} key={idx}>
          <Box borderBottom={1}>
            <Button sx={{ color: '#000', fontWeight: 'bold' }}>
              {column.header}
            </Button>
          </Box>
          {column.links.map((link, idx) => {
            return (
              <Box key={idx}>
                <Button sx={{ color: '#000', }}>{link}</Button>
              </Box>
            );
          })}
        </Grid>
      );
    });
    return footerElements;
  };

  return (
    <Box sx={{ mt: 'auto', width: '100%' }}>
      <Box
        sx={{
          backgroundColor: '#fae5e1',
          color: '#000',
          padding: '4px',
        }}
      >
        <Container>
          <Grid container columnSpacing={2}>
            {generateFeetElements()}
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          paddingY: '2px',
          margin: '0px',
          backgroundColor: '#9adedc',
          color: '#00',
        }}
      >
        <Typography>© Muy MUI - All Rights Reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
