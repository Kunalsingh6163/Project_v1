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

  const handleSubjectClick = (mainCourse:any) => {
    if (selectedMainCourse === mainCourse) {
      setSelectedMainCourse(null);
    } else {
      setSelectedMainCourse(mainCourse);
    }
  };

  const smallCards = {
    "AI and Machine Learning": [
      {
        title: "Node JS",
        image: "node.svg",
        style: {},
        logo: "nodelogo.svg",
        description: "Learn to build scalable and efficient web applications with Node JS, a powerful runtime environment.",
        duration: "",
        ratings: "",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
    ],
    "Data Science": [
      {
        title: "Python ",
        image: "Python.svg",
        style: {
          color: "#FFD43B",
          fontFamily: "Poppins",
        },
        logo: "Python.svg",
        description: "Learn the fundamentals of Python programming for Data Science. Explore data analysis, visualization, and machine learning techniques.",
        duration: "5 months",
        ratings: "4.7",
      },
      {
        title: "Machine Learning Fundamentals",
        image: "ML.svg",
        style: { color: "#6C63FF", fontFamily: "Poppins" },
        logo: "MLlogo.svg",
        description: "Dive deep into the principles of Machine Learning. Understand algorithms, models, and applications in real-world scenarios.",
        duration: "6 months",
        ratings: "4.6",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
     

    ],
    "Data Analyst-CloudFocused": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Explore the backend framework Express JS for building robust web applications. Focus on cloud-based solutions.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },

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
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Explore the backend framework Express JS for building robust web applications.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
      {
        title: "React JS",
        image: "ReactJS.svg",
        style: { color: "#61DBFB", fontFamily: "Poppins" },
        logo: "reactlogo.svg",
        description: "Master front-end development with React JS. Build interactive user interfaces and dynamic web applications.",
        duration: "6 months",
        ratings: "7.1(7556 Ratings)",
      },
      {
        title: "Node JS",
        image: "Node.svg",
        style: { color: "#3FA038", fontFamily: "Poppins" },
        logo: "nodelogo.svg",
        description: "Learn to build scalable and efficient web applications with Node JS, a powerful runtime environment.",
        duration: "6 months",
        ratings: "6.7(6889 Ratings)",
      },
    ],
    "Data Engineering": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Explore the backend framework Express JS for building robust web applications.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Explore the backend framework Express JS for building robust web applications.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
    ],
    "Generative AI": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
    ],
    "DevOps/DevSecOps": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
    ],
    "Microsoft office and AI with Microsoft Excel": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
    ],
    "UI/UX Design": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
    ],
    "Business Analyst": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
    ],
    "Internship Program": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Learn to build scalable and efficient web applications with Express JS, a powerful backend framework.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Learn to build scalable and efficient web applications with Express JS, a powerful backend framework.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
    ],
    "Final year Projects industry based": [
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Learn to build scalable and efficient web applications with Express JS, a powerful backend framework.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
    ],
    "Cloud-Computing": [
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Explore the backend framework Express JS for building robust web applications.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Explore the backend framework Express JS for building robust web applications.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
      {
        title: "Express JS",
        image: "ExpressJS.svg",
        style: { color: "#FFFFFF", fontFamily: "Poppins" },
        logo: "Expresslogo.svg",
        description: "Explore the backend framework Express JS for building robust web applications.",
        duration: "3 months",
        ratings: "5(3556 Ratings)",
      },
      {
        title: "Mongo DB",
        image: "MongoDB.svg",
        style: {
          color: "#3FA037",
          fontFamily: "Poppins",
        },
        logo: "mongologo.svg",
        description: "MongoDB-Complete Guide(2024) for beginners to advanced level.",
        duration: "6 months",
        ratings: "5.3",
      },
    ],
  };

  const SubjectComponent = ( {course}) => {
    const { title, style, logo } = course;

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
          transform: "translate(18%, -110%)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
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
            style={{...style, transform: "translate(5%, 35%)", fontWeight: "600", fontSize: "20px", letterSpacing: "2%", font: "poppins" }}
          >
            {title}
          </Typography>
        </Box>
      </Card>
    );
  };

  return (
    <Box>
      <Typography
        variant="h5"
        style={{
          width: "767px",
          height: "59px",
          top: "34px",
          left: "63px",
          fontFamily: "Poppins",
          fontSize: "24px",
          fontWeight: "400",
          lineHeight: "32px",
          letterSpacing: "0em",
          textAlign: "left",
          position: "relative",
        }}
      >
        Top Certification Courses to Elevate Your Career
      </Typography>
      <Card
        sx={{
          height: "700px",
          width: "283px",
          marginTop: "10px",
          left: "5px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          position: "relative",
          paddingBottom: "280px",
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
            marginTop: "-650px",
            marginLeft: "340px",
            position: "relative",
            rowGap: "8px",
            paddingBottom: "300px",
          }}
        >
          {smallCards[selectedMainCourse].map((card, index) => (
            <Grid
              item
              key={index}
              xs={8}
              sm={6}
              md={2}
              lg={3}
              sx={{ marginBottom: "8px" }}
            >
              <Card
                sx={{
                  width: "260px",
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
                    height={95}
                    style={{
                      position: "absolute",
                      transform: "translateX(-17.2%) translateY(-16%)",
                    }}
                  />
                  <Box sx={{ position: "relative", paddingTop: "115px" }}>
                    <SubjectComponent course={card} />
                  </Box>
                  
                
                  <Box sx={{ transform: "translate(-5%, 180%)", position: "relative" }}>
                 
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        transform: "translate(5%, 40%)",
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
                          width: "12px",
                          height: "12px",
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
                      variant="subtitle2"
                      sx={{
                        color: "#0044F2",
                        width: "95px",
                        height: "24px",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        transform: "translate(180%, -25%)",
                      }}
                    >
                      Know more..
                    </Typography>
                  </Box>
                 
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
