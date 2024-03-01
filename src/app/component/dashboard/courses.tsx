"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Box,
  Grid,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { ListItemText } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

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
const subCourses = {
  "Full Stack Development": [
    {
      name: "Mongo DB",
      image: "MongoDB.svg",
      style: { color: "#3FA037", fontFamily: "Poppins" },
      logo: "mongologo.svg",
      duration: "3 month",
      ratings: "4.5(3995 Ratings)",
    },
    {
      name: "Express JS",
      image: "ExpressJS.svg",
      style: { color: "#FFFFFF", fontFamily: "Poppins" },
      logo: "Expresslogo.svg",
      duration: "3 month",
      ratings: "5(3556 Ratings)",
    },
    {
      name: "React JS",
      image: "ReactJS.svg",
      style: { color: "#61DBFB", fontFamily: "Poppins" },
      logo: "reactlogo.svg",
      duration: "6 month",
      ratings: "7.1(7556 Ratings)",
    },
    {
      name: "Node JS",
      image: "Node.svg",
      style: { color: "#3FA038", fontFamily: "Poppins" },
      logo: "nodelogo.svg",
      duration: "6 month",
      ratings: "6.7(6889 Ratings)",
    },
  ],
};

const SubjectComponent: React.FC<{ course: any }> = ({ course }) => {
  const { name, style, logo } = course;

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
        <img
          src={logo}
          alt={name}
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
          {name}
        </Typography>
      </Box>
    </Card>
  );
};

export default function CategoryPage() {
  const [selectedMainCourse, setSelectedMainCourse] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleSubjectClick = (mainCourse: any) => {
    setSelectedMainCourse(mainCourse);
  };

  return (
    <Container>
      <Typography
        variant="h5"
        style={{
          width: "767px",
          height: "59px",
          top: "934px",
          left: "63px",
          fontFamily: "Poppins",
          fontSize: "24px",
          fontWeight: "400",
          lineHeight: "32px",
          letterSpacing: "0em",
          textAlign: "left",
          position: "absolute",
        }}
      >
        Top Certification Courses to Elevate Your Career
      </Typography>
      <Card
        style={{
          height: "524px",
          width: "334px",
          marginTop: "993px",
          left: "45px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          position: "absolute",
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
          spacing={isMobile ? 4 : 10}
          style={{
            marginTop: "950px",
            marginLeft: "-20%",
            display: "grid-column-start:( 2)",
          }}
        >
          {subCourses[selectedMainCourse].map((course: any, index: number) => (
            <Grid item xs={6} sm={2} md={3} key={index}>
              <Card
                style={{
                  width: "283px",
                  height: "337px",
                  borderRadius: "5px",
                  backgroundColor: "#FFF3F3",
                  marginLeft: "5px",
                }}
              >
                <CardContent>
                  <Box sx={{ position: "absolute", alignItems: "normal" }}>
                    <img
                      src={course.image}
                      alt={course.name}
                      style={{
                        width: "100%",
                        position: "relative",
                        height: "150%",
                        marginBottom: "10px",
                        transform: "translate(-5%, -15%)",
                      }}
                    />
                    <SubjectComponent course={course} />
                    <Box sx={{ transform: "translate(-5%, 200%)" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          transform: "translate(5%, 100%)",
                        }}
                      >
                        <img
                          src="calendar.svg"
                          alt="calendar"
                          style={{
                            width: "13px",
                            height: "13px",
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
                          }}
                        >
                          {" "}
                          {course.duration}
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
                          }}
                        >
                          {course.ratings}
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
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
