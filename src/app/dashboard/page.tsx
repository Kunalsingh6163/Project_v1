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
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import Image from "next/image";

const Courses = [
  { Course: "Mern" },
  { Course: "Frontend Development" },
  { Course: "Dev Ops" },
  { Course: "Artificial Intelligence" },
  { Course: "Cloud Computing" },
];

export default function Dashboard() {
  return (
    <Box  sx={{position:'relative'}}>
      <Stack
        sx={{
          marginLeft: { xs: 0, sm: 12 },
          marginTop: 12,position:"relative"
        }}
        direction={"row"}
        alignContent={"space-between"}
        alignItems={{ xs: "flex-start", md: "center" }}
      >
        <Box flex={1}>
          <Button
            startIcon={
              <Image
                src="/Courselogo.svg"
                alt="Course Logo"
                width={24}
                height={18}
                style={{ marginRight: 0, paddingRight:0 , padding: 0 }}
              />
            }
            variant="contained"
            sx={{
              marginLeft:0 ,
              paddingLeft:{sm:'30px',lg:'0px'},
              width: { xs: 100, sm: 150 },
              height: "44px",
              textTransform: "none",
              background: "blue",
              fontSize: { xs: "0.5rem", md: "1rem", whiteSpace: "nowrap" },
            }}
          >
            All Courses
          </Button>
        </Box>
        <Box flex={8} display={"flex"} sx={{ whiteSpace: "nowrap" }}>
          <Stack
            spacing={2}
            sx={{
              height: { xs: 40, sm: 40 },
              width: { xs: 150, sm: 450 },
              marginBottom: { xs: 8, sm: 3 },
            }}
          >
            <Autocomplete
              id="course-id-2"
              disableClearable
              freeSolo
              options={Courses.map((option) => option.Course)}
              renderInput={(params) => (
                <TextField
                  sx={{ background: "#D9D9D9", boxShadow: "2", border: "5px" }}
                  {...params}
                  placeholder="What you want to find !"
                  style={{ color: 'color="#000000"' }}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton aria-label="search" edge="start">
                          <SearchRoundedIcon fontSize="large" color="primary" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Stack>
        </Box>

        <Button
          variant="contained"
          sx={{
            marginRight:5,
            paddingLeft: 0,
            width: { xs: 100, sm: 100 },
            textTransform: "none",
            background: "blue",
            fontSize: { xs: "0.5rem", md: "1rem" },
            height: "44px",
          }}
        >
          Login
        </Button>
      </Stack>
      <Grid
        item
        xs={12}
        sm={6}
        order={{ xs: 1, sm: 2 }}
        flex={4}
        sx={{
          width: { xs: "5", lg: "15" },
          fontSize: { xs: "10", lg: "20" },
          position: "relative",
          paddingLeft: { xs: "10px", lg: "50px" },
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins,Sans-serif ",
            fontWeight: "600",
            paddingTop: "30px",
          }}
        >
          {" "}
          After Graduating,what deadline have<br/>
          you set for yourself to land your first job?
        </Typography>
        
        <Box
          sx={{
            top: "62px",
            left: "1200px",
            border: "1px",
            position: "absolute",
          }}
        >
          <Hidden xsDown>
            <Image src="Ellipse.svg" alt="ellipse" width={555} height={555} />
          </Hidden>
        </Box>
        <Box
          sx={{
            top: "150px",
            left: "1300px",
            border: "1px",
            position: "absolute",
          }}
        >
          <Hidden xsDown>
            <Image src="user.svg" alt="user" width={355} height={355} />
          </Hidden>
        </Box>
      
        <Typography
          variant="h6"
          sx={{ paddingTop: "30px", fontFamily: "Poppins,Sans-serif " }}
        >
          Are you seeking to build to build a rewarding career in IT,
          <br />
          leveraging trending technologies and a competitive package?
          <br />
          Do you believe you’ve reached your potential? Have you been <br />
          rewarded appropriately for your contributions?
        </Typography>

        <Typography
          variant="h6"
          sx={{ paddingTop: "30px", fontFamily: "Poppins,Sans-serif " }}
        >
          if any this questions give you pause our team is here to assistin
          <br />
          transforming them into positive outcomes.
        </Typography>
        <Typography
          variant="h6"
          sx={{ paddingTop: "30px", fontFamily: "Poppins,Sans-serif " }}
        >
          This exclusive training program is corrupted especially for Aspiring
          it
          <br />
          professionals who are recent graduates or in their final year of
          studies.
          <br />
          Proceed if are eager to kick-start your career journey within the IT
          <br />
          industry
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingTop: "30px",
            fontFamily: "Poppins,Sans-serif ",
            fontWeight: "600",
          }}
        >
          Take the next step by clicking the button bellow
          <br />
          to schedule a free demo session with us.
        </Typography>
        <Typography
          variant="h6"
          sx={{ paddingTop: "30px", fontFamily: "Poppins,Sans-serif " }}
        >
          inteMEgence Perk was founded a clear mission to empower phrase
          <br />
          graduates and final year students by equipping them with trending{" "}
          <br />
          Technology skills, ultimately enhancing their employability and
          securing <br />
          favorable job offers. additionally, we have implemented internship
          <br />
          opportunities engage final year students in practical industrial
          Projects,
          <br />
          enriching their learning experience and preparing them for the
          workforce
          <br />
        </Typography>
        <Box sx={{ paddingTop: "30px" }}>
          <Button
            variant="contained"
            sx={{
              marginRight: 5,
              paddingLeft: 0,
              width: { xs: 150, sm: 180 },
              height: { xs: 40, sm: 50 },
              textTransform: "none",
              background: "blue",
              fontSize: { xs: "1rem", md: "1rem" },
            }}
          >
            Free Demo
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}
