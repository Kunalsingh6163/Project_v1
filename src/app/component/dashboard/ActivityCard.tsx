"use client";
import React from "react";
import { Card, Box, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";

export default function Userdetails() {
  return (
    <Box
      sx={{
        position:{xs:'relative', md:"relative"},
        display: { xs: "flex", md: "flex" },
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        rowGap: { xs: "50px", lg: "00px" },
        columnGap: { xs: "00px", lg: "50px" },
        marginTop: {xs:'100px',md:"50px"},
        paddingLeft: { xs: "0px", lg: "180px" },
      }}
    >
      <Card
        sx={{
          width: { xs: "291px", lg: "350px" },
          height: { xs: "170px", lg: "240px" },
          borderRadius: "10px 0px 10px 0px",
          boxShadow:4,
        }}
      >
        <CardContent>
          <Box
            sx={{
              marginTop: { xs: "-51px", lg: "-50px" },
              marginLeft: { xs: "151px", lg: "210px", width: { xs: "103px" } },
            }}
          >
            <Image
              src="/Ellipse 10.svg"
              alt="ellipse"
              width="124"
              height="133"
            />
          </Box>

          <Typography
            variant={"h5"}
            sx={{
              fontFamily: "Poppins, Sans-serif",
              marginTop: { xs: "-60px", lg: "-40px" },
              paddingLeft: "10px",
              fontWeight: "600",
              color: "#1A56B1",
            }}
          >
            Enrolled Programs
          </Typography>
          <Box
            sx={{
              fontFamily: "Poppins, Sans-serif",
              fontSize: "35px",
              fontWeight: "700",
              color: "#1A56B1",
              marginTop: { xs: "20px", lg: "40px" },
              marginLeft: { xs: "110px", lg: "100px" },
              position: "absolute",
            }}
          >
            <CountUp start={0} end={52} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "10px", lg: "10px" },
              marginLeft: { xs: "200px", lg: "250px" },
              position: "absolute",
            }}
          >
            <Image
              src="/stack-of-books 1.svg"
              alt="ellipse"
              width="70"
              height="70"
            />
          </Box>
          <Box
            sx={{
              marginTop: { xs: "-3px", lg: "48px" },
              marginLeft: { xs: "-15px", lg: "-15px" },
              position: "absolute",
            }}
          >
            <Image
              src="/Ellipse 11.svg"
              alt="ellipse"
              width="124"
              height="133"
            />
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: { xs: "291px", lg: "350px" },
          height: { xs: "170px", lg: "240px" },
          borderRadius: "10px 0px 10px 0px",
        }}
      >
        <CardContent>
          <Box
            sx={{
              marginTop: { xs: "-51px", lg: "-50px" },
              marginLeft: { xs: "151px", lg: "210px", width: { xs: "103px" } },
            }}
          >
            <Image
              src="/Ellipse 10.svg"
              alt="ellipse"
              width="124"
              height="133"
            />
          </Box>
          <Typography
            variant={"h5"}
            sx={{
              fontFamily: "Poppins, Sans-serif",
              marginTop: { xs: "-60px", lg: "-40px" },
              paddingLeft: "10px",
              fontWeight: "600",
              color: "#1A56B1",
            }}
          >
            Task Due
          </Typography>
          <Box
            sx={{
              fontFamily: "Poppins, Sans-serif",
              fontSize: "35px",
              fontWeight: "700",
              color: "#1A56B1",
              marginTop: { xs: "20px", lg: "40px" },
              marginLeft: { xs: "110px", lg: "100px" },
              position: "absolute",
            }}
          >
            <CountUp start={0} end={76} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "10px", lg: "10px" },
              marginLeft: { xs: "200px", lg: "250px" },
              position: "absolute",
            }}
          >
            <Image src="/calendar 2.svg" alt="ellipse" width="70" height="70" />
          </Box>
          <Box
            sx={{
              marginTop: { xs: "-3px", lg: "48px" },
              marginLeft: { xs: "-15px", lg: "-15px" },
              position: "absolute",
            }}
          >
            <Image
              src="/Ellipse 11.svg"
              alt="ellipse"
              width="124"
              height="133"
            />
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: { xs: "291px", lg: "350px" },
          height: { xs: "170px", lg: "240px" },
          borderRadius: "10px 0px 10px 0px",
        }}
      >
        <CardContent>
          <Box
            sx={{
              marginTop: { xs: "-51px", lg: "-50px" },
              marginLeft: { xs: "151px", lg: "210px", width: { xs: "103px" } },
            }}
          >
            <Image
              src="/Ellipse 10.svg"
              alt="ellipse"
              width="124"
              height="133"
            />
          </Box>
          <Typography
            variant={"h5"}
            sx={{
              fontFamily: "Poppins, Sans-serif",
              marginTop: { xs: "-60px", lg: "-40px" },
              paddingLeft: "10px",
              fontWeight: "600",
              color: "#1A56B1",
            }}
          >
            Quizzy
          </Typography>
          <Box
            sx={{
              fontFamily: "Poppins, Sans-serif",
              fontSize: "35px",
              fontWeight: "700",
              color: "#1A56B1",
              marginTop: { xs: "20px", lg: "40px" },
              marginLeft: { xs: "110px", lg: "100px" },
              position: "absolute",
            }}
          >
            <CountUp start={0} end={59} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "10px", lg: "10px" },
              marginLeft: { xs: "200px", lg: "250px" },
              position: "absolute",
            }}
          >
            <Image src="/quiz 1.svg" alt="ellipse" width="70" height="70" />
          </Box>
          <Box
            sx={{
              marginTop: { xs: "-3px", lg: "48px" },
              marginLeft: { xs: "-15px", lg: "-15px" },
              position: "absolute",
            }}
          >
            <Image
              src="/Ellipse 11.svg"
              alt="ellipse"
              width="124"
              height="133"
            />
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: { xs: "291px", lg: "350px" },
          height: { xs: "170px", lg: "240px" },
          borderRadius: "10px 0px 10px 0px",
        }}
      >
        <CardContent>
          <Box
            sx={{
              marginTop: { xs: "-51px", lg: "-50px" },
              marginLeft: { xs: "151px", lg: "210px", width: { xs: "103px" } },
            }}
          >
            <Image
              src="/Ellipse 10.svg"
              alt="ellipse"
              width="124"
              height="133"
            />
          </Box>
          <Typography
            variant={"h5"}
            sx={{
              fontFamily: "Poppins, Sans-serif",
              marginTop: { xs: "-60px", lg: "-40px" },
              paddingLeft: "10px",
              fontWeight: "600",
              color: "#1A56B1",
            }}
          >
            Completed Program
          </Typography>
          <Box
            sx={{
              fontFamily: "Poppins, Sans-serif",
              fontSize: "35px",
              fontWeight: "700",
              color: "#1A56B1",
              marginTop: { xs: "20px", lg: "40px" },
              marginLeft: { xs: "110px", lg: "100px" },
              position: "absolute",
            }}
          >
            <CountUp start={0} end={15} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </Box>
          <Box
            sx={{
              marginTop: { xs: "10px", lg: "10px" },
              marginLeft: { xs: "200px", lg: "250px" },
              position: "absolute",
            }}
          >
            <Image
              src="/checklist 1.svg"
              alt="ellipse"
              width="70"
              height="70"
            />
          </Box>
          <Box
            sx={{
              marginTop: { xs: "-3px", lg: "48px" },
              marginLeft: { xs: "-15px", lg: "-15px" },
              position: "absolute",
            }}
          >
            <Image
              src="/Ellipse 11.svg"
              alt="ellipse"
              width="124"
              height="133"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
