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

function Subjects() {
  const subjects = [
    {
      title1: "Python Beginners to Advance with Projects",
      avatarSrc: "/python.svg",
      avatarSx: { width: "100px", height: "100px" },
    },
    {
      title2: "React JS Beginner to Advance With NextJS",
      avatarSrc: "/react.svg",
      avatarSx: { width: "100px", height: "100px" },
    },
    {
      title3: "Node Beginners to Advance with ExpressJS",
      avatarSrc: "/node.svg",
      avatarSx: { width: "100px", height: "100px" },
    },
    {
      title4: "AWS-S3 Bucket",
      avatarSrc: "/aws.svg",
      avatarSx: { width: "100px", height: "100px" },
    },
    {
      title5: "Node Beginners to Advance with ExpressJS",
      avatarSrc: "/mern.svg",
      avatarSx: { width: "100px", height: "100px" },
    },
  ];

  return (
    <Box marginTop={"50px"}>
      <Box
        position={"absolute"}
        sx={{ left: { xs: "25px", md: "104px" }, alignContent: "center" }}
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
            marginRight: "20px",
            width: "112px",
            height: "29px",
            marginTop: { xs: 2, md: 0 },
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
      <Box position={"absolute"} marginTop={"100px"} marginRight={"700px"}>
        <Grid
          container
          spacing={2}
          sx={{ paddingLeft: { xs: "10px", md: "104px" } }}
        >
          {subjects.map((subject, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <Card
                sx={{
                  height: "209px",
                  width: { xs: "350px", md: "499px" },
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
                        fontWeight: "700",
                        marginLeft: "12px",
                        marginTop: "30px",
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
                        fontWeight: "700",
                        marginLeft: "12px",
                        marginTop: "30px",
                        whiteSpace: "pre-line",
                        fontFamily: "Poppins,Sans-serif",
                      }}
                      component="div"
                    >
                      {subject.title2}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "24px" },
                        fontWeight: "700",
                        marginLeft: "12px",
                        marginTop: "30px",
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
                        fontWeight: "700",
                        marginLeft: "12px",
                        marginTop: "30px",
                        whiteSpace: "pre-line",
                        fontFamily: "Poppins,Sans-serif",
                      }}
                      component="div"
                    >
                      {subject.title4}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "24px" },
                        fontWeight: "700",
                        marginLeft: "12px",
                        marginTop: "30px",
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
                        left: "60%",
                        width: "182px",
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
                  <Box mt={2}>
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
