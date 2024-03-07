"use client";
import React from "react";
import {
  Typography,
  Box,
  Button,
  Stack,
  TextField,
  Grid,
  Hidden,
  useMediaQuery,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import Image from "next/image";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import SearchIcon from "../../../public/SearchIcon.svg";
import Avatar from "@mui/material/Avatar";
import Cources from "../component/Dashboard/CourseCard";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h2: "h1",
          h3: "h2",
          body1: "p",
          body2: "p",
        },
      },
    },
  },
  typography: {
    h3: {
      fontSize: "2rem", // Adjusted for responsiveness
    },
    h4: {
      fontSize: "1.5rem", // Adjusted for responsiveness
      fontFamily: "poppins, robot",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem", // Adjusted for responsiveness
    },
    body2: {
      fontSize: "1rem", // Adjusted for responsiveness
      color: "093BEF",
    },
    h5: {
      fontSize: "1.25rem", // Adjusted for responsiveness
    },
    h6: {
      fontSize: "1.25rem", // Adjusted for responsiveness
      fontSizeAdjust: "17px",
    },
    subtitle1: {
      fontSize: "0.875rem", // Adjusted for responsiveness
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function Dashboard() {
  const currentTheme = useTheme();
  const isMobile = useMediaQuery(currentTheme.breakpoints.down("sm"));

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box sx={{ height: "auto" }}>
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent="space-between"
              sx={{ marginTop: "20px" }}
            >
              <Grid item xs={12} sm={4} md={3} lg={2}>
                <Button
                  size="medium"
                  variant="contained"
                  sx={{ textTransform: "none", backgroundColor: "0024E0" }}
                >
                  All Program
                </Button>
              </Grid>

              <Grid item xs={12} sm={4} md={5} lg={6}>
                <Box sx={{ display: "flex", alignItems: "left" }}>
                  <TextField
                    size="small"
                    placeholder="what you want to find"
                    sx={{
                      width: 300,
                      marginLeft: "2px",
                      "& .MuiInputBase-root": {
                        paddingLeft: "2px",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                      },
                    }}
                  />
                  <IconButton sx={{ marginLeft: -5 }}>
                    <Image
                      src={SearchIcon}
                      alt={"Search icon"}
                      width={24}
                      height={24}
                    />
                  </IconButton>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4} md={4} lg={2}>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ textTransform: "none", backgroundColor: "001DB4" }}
                >
                  login
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              alignItems="center"
              sx={{ marginTop: "10px" }}
            >
              <Grid item xs={12} md={8}>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  sx={{
                    textTransform: "none",
                    fontFamily: "poppins",
                    fontWeight: 700,
                  }}
                >
                  After Graduating, what deadline have you set for yourself to
                  land your first job?
                </Typography>
                <Typography
                  sx={{
                    marginTop: 2,
                    fontSize:'17px',
                    textTransform: "none",
                    fontFamily: "poppins",
                  }}
                >
                  Are you seeking to build a rewarding career in IT, leveraging
                  trending technologies and a competitive package? Do you
                  believe you’ve reached your potential? Have you been rewarded
                  appropriately for your contributions?
                </Typography>
                <Typography
                  sx={{
                    marginTop: 2,
                    fontSize:'17px',
                    textTransform: "none",
                    fontFamily: "poppins",
                  }}
                >
                  If any this questions give you pause our team is here to
                  assist in transforming them into positive outcomes.
                </Typography>

                <Typography
                  sx={{
                    marginTop: 2,
                    fontSize:'17px',
                    textTransform: "none",
                    fontFamily: "poppins",
                  }}
                >
                  This exclusive training program is corrupted especially for
                  Aspiring it professionals who are recent graduates or in their
                  final year of studies. Proceed if are eager to kick-start your
                  career journey within the IT industry.
                </Typography>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  sx={{
                    textTransform: "none",
                    marginTop: 2,
                    fontFamily: "poppins",
                    fontWeight: 700,
                  }}
                >
                  Take the next step by clicking the button below to schedule a
                  free demo session with us.
                </Typography>
                <Typography
                  sx={{
                    marginTop: 2,
                    fontSize:'17px',
                    textTransform: "none",
                    fontFamily: "poppins",
                  }}
                >
                  inteMEgence Perk was founded a clear mission to empower phrase
                  graduates and final year students by equipping them with
                  trending Technology skills, ultimately enhancing their
                  employability and securing favorable job offers. additionally,
                  we have implemented internship opportunities engage final year
                  students in practical industrial Projects, enriching their
                  learning experience and preparing them for the workforce
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "inline", justifyContent: "right",  }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/Avtar.svg"
                  sx={{ height: 250, width: 250, marginLeft:15 }}
                />
                <Box sx={{ marginTop: 1, marginLeft: 2 }}>
                  <Typography
                    sx={{ color: "green", fontSize:'17px', marginLeft:15 }}
                  >
                    CEO of interMEgence Perk <br></br>
                    Sulekha Phukon
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "left", marginTop: 5 }}>
              <Button
                size="large"
                variant="contained"
                sx={{ textTransform: "none", backgroundColor: "0024E0" }}
              >
                Free Demo
              </Button>
            </Box>
            <Box>
              <Cources />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}