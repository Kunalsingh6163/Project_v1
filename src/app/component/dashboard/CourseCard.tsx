"use client";
import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { ListItemText } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export default function Courses() {
  const mainCourses = [
    "AI and Machine Learning",
    "Data Science",
    "Data Analyst-CloudFocused",
    "Data Engineering",
    "Cloud-Computing",
    "Full Stack Development",
    "Generative AI",
    "DevOps/DevSecOps",
    "Microsoft office and AI with Microsoft Excel",
    "UI/UX Design",
    "Business Analyst",
    "Internship Program",
    "Final year Projects industry based",
  ];

  const [selectedMainCourse, setSelectedMainCourse] = useState(null);

  const handleSubjectClick = (mainCourse: any) => {
    if (selectedMainCourse === mainCourse) {
      setSelectedMainCourse(null);
    } else {
      setSelectedMainCourse(mainCourse);
    }
  };

  const smallCards = {
    "AI and Machine Learning": [
      { title: " AI", description: "Description " },
      { title: "ML", description: "Description " },
    ],
    "Data Science": [
      { title: "Data Science", description: "Description" },
      { title: " Data Science", description: " Data Science" },
      { title: " Data Science", description: "Data Science" },
      { title: "Data Science", description: " Data Science" },
    ],
    "Data Analyst-CloudFocused": [
      { title: " CloudFocused", description: "Description" },
      { title: " CloudFocused", description: "Description" },
      { title: " CloudFocused", description: "Description" },
      { title: " CloudFocused", description: "Description" },
      { title: " CloudFocused", description: "Description" },
      { title: " CloudFocused", description: "Description" },
    ],
    "Full Stack Development": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "Description",
        duration: " 6 months",
        ratings: "5.3",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: "",
        logo: "Expresslogo.svg",
        description: "Description",
        duration: "",
        ratings: "",
      },
      {
        title: "React JS",
        image: "ReactJS.svg",
        style: "",
        logo: "",
        description: "Description",
        duration: "",
        ratings: "",
      },
      {
        title: "Node JS",
        image: "node.svg",
        style: "",
        logo: "",
        description: "Description",
        duration: "",
        ratings: "",
      },
    ],
  };

  const SubjectComponent = (card: any) => {
    const { title, style, logo } = card;

    return (
      <Card
        sx={{
          width: "174px",
          height: "58px",
          top: "111px",
          left: "48px",
          border: "5px",
          background: " rgba(7, 3, 3, 1)",
          zIndex: "1",
          transform: "translate(25%, -100%)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image
            src={logo}
            alt={title}
            style={{
              width: "40px",
              height: "40px",
              marginRight: "8%",
              transform: "translate(40%, 25%)",
            }}
          />
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            style={style}
            sx={{
              transform: "translate(5%, 35%)",
              fontWeight: "600",
              fontSize: "20px",
              letterSpacing: "2%",
              font: "poppins",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Card>
    );
  };

  return (
    <Box sx={{mt:2}}>
      <Typography
        sx={{ fontSize: "20px", fontFamily: "poppins", fontWeight: "700" }}
      >
        Top Certification Courses to Elevate Your Career
      </Typography>
      <Card
        sx={{
          height: "auto",
          width: "285px",
          marginTop: 2,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          position: "relative",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontFamily: " Poppins",
              fontSize: "15px",
              fontWeight: "400",
              letterSpacing: "0.02em",
              textAlign: "left",
            }}
          >
            All Courses
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontSize: "15px",
              fontWeight: "300",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            <Divider sx={{ color: "#0043C6" }} />
            <List>
              {mainCourses.map((mainCourse, index) => (
                <ListItem
                  key={index}
                  onClick={() => handleSubjectClick(mainCourse)}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedMainCourse === mainCourse
                        ? "#FFE7CA"
                        : "transparent",
                  }}
                >
                  <ListItemText primary={mainCourse} />
                </ListItem>
              ))}
            </List>
          </Typography>
        </CardContent>
      </Card>
      {selectedMainCourse && (
        <Grid
          container
          spacing={0}
          sx={{
            marginTop: "-400px",
            marginLeft: "340px",
            position: "relative",
            rowGap: "8px",
          }}
        >
          {smallCards[selectedMainCourse].map((card, index) => (
            <Grid
              item
              key={index}
              xs={8}
              sm={6}
              md={3}
              lg={4}
              sx={{ marginBottom: "8px" }}
            >
              <Card
                sx={{
                  width: "280px",
                  height: "337px",
                  backgroundColor: "#FFF3F3",
                  display: "flex",
                }}
              >
                <CardContent>
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={350}
                    height={102}
                    style={{
                      position: "absolute",
                      transform: "translateX(-14.5%) translateY(-15%)",
                    }}
                  />
                  <Box sx={{ position: "relative", paddingTop: "115px" }}>
                    <SubjectComponent course={card} />
                  </Box>
                  <Box
                    sx={{
                      transform: "translate(-5%, 180%)",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        transform: "translate(5%, 100%)",
                      }}
                    >
                      <Image
                        src="/calendar.svg"
                        alt="calendar"
                        width={13}
                        height={13}
                        style={{
                          left: "444px",
                          top: "1323px",
                        }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{
                          font: "poppins",
                          fontWeight: "500",
                          fontSize: "10px",
                          lineHeight: "12px",
                          letterSpacing: "-5%",
                          width: "52px",
                          height: "12px",
                          top: "1324px",
                          paddingLeft: "3px",
                        }}
                      >
                        {" "}
                        {card.duration}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        transform: "translate(5%, 150%)",
                      }}
                    >
                      <StarOutlineIcon
                        style={{
                          width: "9px",
                          height: "9px",
                          top: "1344px",
                          left: "444px",
                          transform: "rotate(-0deg)",
                          paddingLeft: "3px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          width: "83px",
                          height: "10px",
                          top: "1342px",
                          left: "454px",
                          fontFamily: "Poppins",
                          fontSize: "10px",
                          fontWeight: 500,
                          lineHeight: "12px",
                          letterSpacing: "-0.05em",
                          textAlign: "left",
                          paddingLeft: "3px",
                        }}
                      >
                        {card.ratings}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#0044F2",
                        width: "95px",
                        height: "24px",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        transform: "translate(200%, -25%)",
                      }}
                    >
                      Know more..
                    </Typography>
                  </Box>
                  <Typography variant="body2">{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
