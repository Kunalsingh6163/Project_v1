import React from "react";
import {
  Typography,
  Avatar,
  Box,
  Input,
  InputAdornment,
  OutlinedInput,
  Chip,
  Grid,
  Card,
  CardContent,
  Button,
  Slider,
} from "@mui/material";
import { Stack } from "@mui/system";

function Subjects() {
  const subjects = [
    {
      title1: "Python Beginners to Advance with Projects",
      avatarSrc: "/python.svg",
      avatarSx: { width: "70px", height: "70px" },
    },
    {
      title2: "React JS Beginner to Advance With NextJS",
      avatarSrc: "/react.svg",
      avatarSx: { width: "70px", height: "70px" },
    },
    {
      title3: "Node Beginners to Advance with ExpressJS",
      avatarSrc: "/node.svg",
      avatarSx: { width: "70px", height: "70px" },
    },
    {
      title4: "AWS-S3 Bucket",
      avatarSrc: "/aws.svg",
      avatarSx: { width: "70px", height: "70px" },
    },
    {
      title5: "Node Beginners to Advance with ExpressJS",
      avatarSrc: "/mern.svg",
      avatarSx: { width: "70px", height: "70px" },
    },
  ];

  return (
    <Box  sx={{position:{xs:'relative',md:"relative" },marginTop:{xs:'30px',md:"50px"}}}>
      <Box
        position={{ xs: "relative", md: "relative" }}
        sx={{ left: { xs: "8px", md: "75px" }, alignContent: "left" ,
        width:'500px'}}
        
      >
        <OutlinedInput
          sx={{
            width: "256px",
            height: "37px",
            marginRight: "20px",
            boxShadow: 5,
            borderRadius: "10px",
          }}
          placeholder="Search"
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <img
                src="search.svg"
                alt="Search Icon"
                style={{ width: "25px", height: "25px" }}
              />
            </InputAdornment>
          }
        />
        <Chip
          label="Categories"
          clickable
          color="primary"
          variant="filled"
          sx={{
            borderRadius: "20px",
            marginRight: {xs:"40px",md:"20px"},
            width:{xs:"100px", md:"112px"},
            height: "29px",
            marginTop: { xs: 0, md: 0 },
            
           
          }}
        />
        <Chip
          label="Sort by"
          clickable
          color="primary"
          variant="filled"
          sx={{
            borderRadius: "20px",
            width: "89px",
            height: "29px",
          
            marginTop: { xs: 2, md: 0 },
          }}
        />
      </Box>
      <Box sx={{marginTop:{xs:'30px',md:"50px"}, marginLeft:"00px"}}>
        <Grid
          container
          spacing={3}
          left={{xs:"10px", md: "00px"}}
          width={'70%'}
        >
          {subjects.map((subject, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6}key={index}>
              <Card
                sx={{
                  height: "179px",
                  width: { xs: "350px", md: "449px" },
                  marginLeft:{xs:"10px",md:"80px"},
                  backgroundColor: "#B7E5FF80",
                }}
              >
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={subject.avatarSrc}
                      alt={`Avatar ${index + 1}`}
                      sx={subject.avatarSx}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "24px" },
                        fontWeight: "600",
                        marginLeft: "12px",
                        marginTop: "20px",
                        whiteSpace: "pre-line",
                        fontFamily: "Poppins,Sans-serif",
                      }}
                      component="div"
                    >
                      {subject.title1}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: "600",
                        marginLeft: "12px",
                        marginTop: "20px",
                        whiteSpace: "pre-line",
                        fontFamily: "Poppins,Sans-serif",
                      }}
                      component="div"
                    >
                      {subject.title2}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "22px" },
                        fontWeight: "600",
                        marginLeft: "12px",
                        marginTop: "20px",
                        whiteSpace: "pre-line",
                        fontFamily: "Poppins,Sans-serif",
                      }}
                      component="div"
                    >
                      {subject.title3}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "24px" },
                        fontWeight: "600",
                        marginLeft: "12px",
                        marginTop: "20px",
                        whiteSpace: "pre-line",
                        fontFamily: "Poppins,Sans-serif",
                      }}
                      component="div"
                    >
                      {subject.title4}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "22px" },
                        fontWeight: "600",
                        marginLeft: "12px",
                        marginTop: "20px",
                        whiteSpace: "pre-line",
                        fontFamily: "Poppins,Sans-serif",
                      }}
                      component="div"
                    >
                      {subject.title5}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        left: { xs: "40%", md: "60%" },
                        width: "152px",
                      }}
                    >
                      Continue
                      <Avatar
                        src="/arrowforward.svg"
                        alt="Forward"
                        sx={{
                          width: "20px",
                          height: "20px",
                          left: "10px",
                          backgroundColor: "white",
                        }}
                      />
                    </Button>
                  </Box>
                  <Box mb={2}>
                    <Slider
                      defaultValue={0}
                      aria-label="Progress"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Subjects;
