import React from 'react';
import { Grid, Card, Button, CardContent, Typography, Box, Avatar } from '@mui/material';
import Image from 'next/image';

const FullStackDevelopment = [
  {
    title: "React JS",
    image: "ReactJS.svg",
    color: "#61DBFB",
    logo: "reactlogo.svg",
    step: "Step 1",
    about: "React JS Beginner to Advance with NextJS"
  },
  {
    title: "Node JS",
    image: "NodeN.svg",
    color: "#3FA038",
    logo: "nodelogo.svg",
    step: "Step 2",
    about: "Node JS Beginner to Advance with Express JS"
  },
  {
    title: "Express JS",
    image: "ExpressJS.svg",
    color: "#FFFFFF",
    logo: "Expresslogo.svg",
    step: "Step 3",
    about: "Express JS Beginner to Advance with Node JS"
  },
  {
    title: "Mongo DB",
    image: "MongoDB.svg",
    color: "#3FA037",
    logo: "mongologo.svg",
    step: "Step 4",
    about: "MongoDB Beginner to Advance"
  },
];

const StepC = () => {
  return (
    <Grid container spacing={8} position={"relative"}>
      {FullStackDevelopment.map((item, index) => (
        <Grid item key={index} xs={12} md={12}>
          <Typography variant="h6" sx={{ fontWeight: "600", size: "20px", color: "#666666", marginLeft: "120px", marginTop: "70px", position: "relative" }}>
            {item.step}
          </Typography>
          <Typography  sx={{ fontWeight: "700", fontSize:{ xs:"16px",lg:"24px"}, color: "#1A56B1", paddingLeft: { xs: "00", lg: "430px" }, paddingTop: { xs: "15px", lg: "90px" }, 
          position: "relative", wordSpacing:{xs:"0.01rem",lg:"00"},display:{xs:"flex-culomn",lg:"inline-block"}, whiteSpace: { xs: "normal", lg: "nowrap" }
           }}>
            {item.about}
          </Typography>
          <Card sx={{ width: "280px", height: " 210px", backgroundColor: "#D9D9D9", marginLeft: { xs: "45px", lg: "120px" }, marginTop: { xs: "50px", lg: "-110px" } }}>
            <CardContent>
              <Image
                src={item.image}
                alt={item.title}
                width={283}
                height={130}
                style={{ transform: "translate(-6%, -22%)", position: "absolute" }}
              />

              <Card
                sx={{
                  width: "154px",
                  height: "48px",
                  top: "50px",
                  left: "38px",
                  border: "5px",
                  background: "rgba(7, 3, 3, 1)",
                  zIndex: "1",
                  position: "relative",
                  transform: "translate(5%, 20%)"
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.logo}
                    alt={item.title}
                    style={{
                      width: "40px",
                      height: "40px",
                      marginRight: "8%",
                      transform: "translate(20%, 10%)",
                    }}
                  />
                  <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    sx={{
                      color: (item.color),
                      transform: "translate(0%, 30%)",
                      fontWeight: "600",
                      fontSize: "20px",
                      letterSpacing: "2%",
                      font: "poppins",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Card>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  left: { xs: "50%", md: "50%" },
                  top: "100px",
                  width: "132px",
                  backgroundColor: "#000AF0"
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
            </CardContent>
          </Card>
          {index < FullStackDevelopment.length -1 && (
            <div
              style={{
                borderLeft: "4px solid #C2AF00",
                height: "260px",
                marginLeft: "300px",
                marginTop: "0px",
                position: "absolute"
              }}
            >
                 
              <div
                style={{
                  position: "absolute",
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#2864FF",
                  borderRadius: "50%",
                  top: "50px",
                  left: "-8px",
                }}
              ></div>
            
              <div
                style={{
                  position: "absolute",
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#2864FF",
                  borderRadius: "50%",
                  top: "120px",
                  left: "-8px",
                  transform: "translateY(-50%)",
                }}
              ></div>
            </div>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default StepC;
