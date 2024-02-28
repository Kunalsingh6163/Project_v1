import React from 'react';
import { Typography, Box, Grid, Container, Button } from '@mui/material';
import Image from 'next/image';

function Footer() {
  return (
    <Container maxWidth={false} sx={{marginTop:'100px', backgroundColor: 'black', color: 'white', py: 4 ,height:{xs:'800px',lg:'250px'}}}>
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center">
          <Box mb={2}>
            <Image src="/Logo.svg" alt="Logo" width={150} height={150} />
          </Box>
          
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" fontWeight="700">Company</Typography>
          <Typography>help</Typography>
          <Typography>Contact us</Typography>
          <Typography>About us</Typography>
          <Typography>careers at TheFreshEats</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" fontWeight="700">Policies</Typography>
          <Typography>FAQs</Typography>
          <Typography>Privacy Policies</Typography>
          <Typography>Terms and Conditions</Typography>
        </Grid>
        <Grid  item xs={12} md={2}>
          <Typography variant="h6" fontWeight="700">Follow us</Typography>
          <Box display="flex">
            <Image src="/facebook.svg" alt="Facebook logo" width={40} height={40} style={{marginRight:'20px'}}/>
            <Image src="/google.svg" alt="Google logo" width={40} height={40} style={{backgroundColor:'white'}}  />
          </Box>
          <Box  display="flex">
            <Image src="/instagram.svg" alt="Instagram logo" width={40} height={40} style={{marginRight:'20px'}} />
            <Image src="/youtube.svg" alt="Youtube logo" width={40} height={40} style={{backgroundColor:'white'}} />
          </Box>
          <Image src="/twitter.svg" alt="Twitter logo" width={40} height={40} />
        </Grid>
        <Grid marginTop={2} item xs={12} md={2} display="flex" flexDirection="column" alignItems="center" sx={{paddingRight:{lg:35}}}>
          <Button color="inherit" variant="outlined" sx={{width:'230px',textTransform:'none'}}>
            <Image src="/android.svg" alt="Android Logo" width={25} height={25} style={{marginRight:'5px'}} />
            Get the Android app
          </Button>
          <Button color="inherit" variant="outlined" sx={{width:'230px' ,marginTop:'30px',textTransform:'none'}}>
            <Image src="/apple.svg" alt="Apple Logo" width={25} height={25} style={{marginRight:'5px'}} />
            Get the iOS app
          </Button>
        </Grid>
        <Grid marginTop={3} item xs={12} sx={{ textAlign: 'center',fontSize:'20px' }}>
            Terms of use &nbsp; · &nbsp; Privacy Policy &nbsp; · &nbsp; Refund Policy &nbsp; · &nbsp; Free Trial Policy
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
