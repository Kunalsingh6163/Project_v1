"use client";
import React from "react";
import { Card, Box, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";

const cardData = [
  {
    title: "Enrolled Programs",
    count: 52,
    icon: "/stack-of-books 1.svg",
    background: "/Ellipse 10.svg",
  },
  {
    title: "Task Due",
    count: 76,
    icon: "/calendar 2.svg",
    background: "/Ellipse 10.svg",
  },
  {
    title: "Quizzy",
    count: 59,
    icon: "/quiz 1.svg",
    background: "/Ellipse 10.svg",
  },
  {
    title: "Completed Program",
    count: 15,
    icon: "/checklist 1.svg",
    background: "/Ellipse 10.svg",
  },
];

export default function Userdetails() {
  return (
    <Box
      sx={{
        position: { xs: "relative", md: "relative" },
        display: { xs: "flex", md: "flex" },
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        rowGap: { xs: "50px", lg: "00px" },
        columnGap: { xs: "00px", lg: "40px" },
        marginTop: { xs: "100px", md: "50px" },
        left: { xs: "0px", lg: "75px" },
      }}
    >
      {cardData.map((data, index) => (
        <Card
          key={index}
          sx={{
            width: { xs: "320px", lg: "310px" },
            height: { xs: "200px", lg: "220px" },
            borderRadius: "10px 0px 10px 0px",
            boxShadow: 4,
          }}
        >
          <CardContent>
            <Box
              sx={{
                marginTop: { xs: "-51px", lg: "-50px" },
                marginLeft: { xs: "191px", lg: "180px", width: { xs: "103px" } },
                position: "relative",
              }}
            >
              <Image src={data.background} alt="ellipse" width="114" height="123" />
            </Box>

            <Typography
              variant={"h5"}
              sx={{
                fontFamily: "Poppins, Sans-serif",
                marginTop: { xs: "-40px", lg: "-40px" },
                paddingLeft: "10px",
                fontWeight: "600",
                color: "#1A56B1",
                position: "absolute",
              }}
            >
              {data.title}
            </Typography>
            <Box sx={{position:'relative'}}>
            <Box
              sx={{
                fontFamily: "Poppins, Sans-serif",
                fontSize: "35px",
                fontWeight: "700",
                color: "#1A56B1",
                marginTop: { xs: "20px", lg: "30px" },
                left: { xs: "130px", lg: "100px" },
                position: {xs:"absolute",lg:"absolute"},
              }}
            >
              <CountUp start={0} end={data.count} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </Box>
            </Box>
            <Box
              sx={{
                marginTop: { xs: "10px", lg: "30px" },
                marginLeft: { xs: "210px", lg: "210px" },
                position: "absolute",
              }}
            >
              <Image src={data.icon} alt="icon" width="60" height="60" />
            </Box>
            <Box
              sx={{
                marginTop: { xs: "20px", lg: "35px" },
                marginLeft: { xs: "-15px", lg: "-15px" },
                position: "absolute",
              }}
            >
              <Image src="/Ellipse 11.svg" alt="ellipse" width="114" height="123" />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
