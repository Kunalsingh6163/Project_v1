"use client";
import * as React from "react";
import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Content from "../component/description/Description";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CourseItem() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 1, backgroundColor: "black" }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: "black", display: "flex" }}>
              <Image
                src={"/python.svg"}
                height={120}
                width={120}
                alt="Course image"
              />
              <Box sx={{ ml: 2, mt: 2 }}>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontSize: "24px",
                    textAlign: "left",
                  }}
                >
                  Course Title
                </Typography>
                <Typography sx={{ color: "white", textAlign: "left" }}>
                  Python Beginner to Advance with complete Project
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "Poppins",
                      fontSize: "24px",
                      textAlign: "left",
                    }}
                  >
                    Description...
                  </Typography>
                  <Typography sx={{ color: "white", textAlign: "left" }}>
                    Dive into the world of Python programming with our
                    comprehensive course designed to take you from a novice to
                    an expert coder. Python, known for its simplicity and power,
                    is the perfect language for beginners and a staple for
                    advanced programmers working in data science, web
                    development, automation, and beyond. Our course covers
                    everything from fundamental syntax to advanced concepts like
                    machine learning and web development, ensuring you gain the
                    skills needed to excel in the modern tech landscape.
                  </Typography>
                  <Content />
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item sx={{ backgroundColor: "black", ml: 25 }}>
              <Avatar
                alt="Remy Sharp"
                src="/Avtar.svg"
                sx={{ height: 250, width: 250, marginLeft: 15 }}
              />
              <Box sx={{ mt: 2, marginLeft: "-30px" }}>
                <Typography sx={{ color: "blue" }}>
                  Course Instructor
                </Typography>
                <Typography sx={{ color: "blue" }}>John Doe</Typography>
              </Box>
            </Item>
            <Item sx={{ backgroundColor: "black", mt: 5 }}>
              <Button
                size="large"
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "000AF0",
                  ml: 18,
                }}
              >
                Enroll Now
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CourseItem;
