import React from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  OutlinedInput,
  InputAdornment,
  Card,
  CardContent,
  Avatar
} from "@mui/material";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const all = [
  {
    title: "Python Beginners to Advance with Projects",
    avatarSrc: "/python.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "React JS Beginner to Advance With NextJS",
    avatarSrc: "/react.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "Node Beginners to Advance with ExpressJS",
    avatarSrc: "/node.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "AWS-S3 Bucket",
    avatarSrc: "/aws.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "React JS Beginner to Advance With NextJS",
    avatarSrc: "/react.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "AWS-S3 Bucket",
    avatarSrc: "/aws.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "React JS Beginner to Advance With NextJS",
    avatarSrc: "/react.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "AWS-S3 Bucket",
    avatarSrc: "/aws.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "Node Beginners to Advance with ExpressJS",
    avatarSrc: "/mern.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "AWS-S3 Bucket",
    avatarSrc: "/aws.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "Node Beginners to Advance with ExpressJS",
    avatarSrc: "/node.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
  {
    title: "React JS Beginner to Advance With NextJS",
    avatarSrc: "/react.svg",
    avatarSx: { width: "70px", height: "70px" },
  },
];

export default function All() {
  return (
    <Box sx={{ marginLeft: { xs:"10px",lg: "60px" }, marginTop: "30px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3} lg={1.5}>
          <Button
            size="medium"
            variant="contained"
            sx={{ textTransform: "none", backgroundColor: "#0024E0" }}
          >
            All Program
          </Button>
        </Grid>

        <Grid item xs={12} sm={4} md={6} lg={8}>
          <OutlinedInput
            sx={{
              width: "360px",
              height: "40px",
              marginRight: "20px",
              boxShadow: 4,
              borderRadius: "5px",
              background: "#D9D9D9"
            }}
            placeholder="What you want to find !"
            type="search"
            startAdornment={
              <InputAdornment position="start">
                <SearchTwoToneIcon sx={{ color: "#7059FF" }} />
              </InputAdornment>
            }
          />
        </Grid>

        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Button
            variant="contained"
            size="medium"
            sx={{ textTransform: "none", backgroundColor: "#001DB4", left: { xs: "auto", lg: "150px" } }}
          >
            Login
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: { xs: '30px', md: "50px" }, marginLeft: "00px" }}>
        <Grid
          container
          spacing={4}
          columnSpacing={-2}
        
        >
          {all.map((subject, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4.1} key={index}>
              <Card
                sx={{
                  width: { xs: "350px", md: "449px" },
                  height: "179px",
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
                        fontSize: "20px",
                        fontWeight: "600",
                        marginLeft: "12px",
                        whiteSpace: "pre-line",
                        fontFamily: "Poppins, Sans-serif",
                      }}
                      component="div"
                    >
                      {subject.title}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        marginLeft: {xs:"auto",lg:"270px"},
                        width: "152px",
                        backgroundColor:"#000AF0",
                        marginTop:"30px"
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
