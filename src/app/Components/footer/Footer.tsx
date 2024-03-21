import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Image from "next/image";
import { Container } from "@mui/system";

function Footer() {
  return (
    <Box
      width="100%"
      height="auto"
      sx={{
        position: "relative",
        marginTop: { xs: "100px", md: "50px" },
        backgroundColor: "black",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            <Box mb={2}>
              <Image src="/Logo.svg" alt="Logo" width={150} height={150} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              fontWeight="700"
              sx={{ fontFamily: "poppins" }}
            >
              Company
            </Typography>
            <Typography sx={{ fontFamily: "poppins", fontSize: "12px" }}>
              Help
            </Typography>
            <Typography sx={{ fontFamily: "poppins", fontSize: "12px" }}>
              Contact us
            </Typography>
            <Typography sx={{ fontFamily: "poppins", fontSize: "12px" }}>
              About us
            </Typography>
            <Typography sx={{ fontFamily: "poppins", fontSize: "12px" }}>
              Careers at TheFreshEats
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="h6"
              fontWeight="700"
              sx={{ fontFamily: "poppins" }}
            >
              Policies
            </Typography>
            <Typography sx={{ fontFamily: "poppins", fontSize: "12px" }}>
              FAQs
            </Typography>
            <Typography sx={{ fontFamily: "poppins", fontSize: "12px" }}>
              Privacy Policies
            </Typography>
            <Typography sx={{ fontFamily: "poppins", fontSize: "12px" }}>
              Terms and Conditions
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography
              variant="h6"
              fontWeight="700"
              sx={{ fontFamily: "poppins" }}
            >
              Follow us
            </Typography>
            <Box sx={{ flexDirection: "row" }}>
              <Image
                src="/facebook.svg"
                alt="Facebook logo"
                width={30}
                height={30}
                style={{ marginRight: "10px" }}
              />
              <Image
                src="/google.svg"
                alt="Google logo"
                width={30}
                height={30}
                style={{ marginRight: "21px" }}
              />
              <Image
                src="/instagram.svg"
                alt="Instagram logo"
                width={30}
                height={30}
                style={{ marginRight: "10px" }}
              />
              <Image
                src="/youtube.svg"
                alt="Youtube logo"
                width={30}
                height={30}
                style={{ marginRight: "10px" }}
              />
              <Image
                src="/twitter.svg"
                alt="Twitter logo"
                width={30}
                height={30}
                style={{ marginRight: "10px" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={2}
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", sm: "flex-start" }}
            mt={2}
          >
            <Button
              color="inherit"
              variant="outlined"
              sx={{ width: "230px", textTransform: "none", mb: 2 }}
            >
              <Image
                src="/android.svg"
                alt="Android Logo"
                width={25}
                height={25}
                style={{ marginRight: "5px" }}
              />
              Get the Android app
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt:-2,
            textAlign: "center",
            fontSize: "14px",
            pt: 4,
            borderTop: "1px solid white",
          }}
        >
          Terms of use &nbsp; · &nbsp; Privacy Policy &nbsp; · &nbsp; Refund
          Policy &nbsp; · &nbsp; Free Trial Policy
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;