'use client';
import React, { useEffect, useState , Component} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Typography, Box, Button, Link, Grid, Hidden } from "@mui/material";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import {
  Facebook,
  Google,
  LinkedIn,
  Twitter,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../../public/Logo.svg";
import AIML from '../../../public/AIML.svg'
import Carousel from '@itseasy21/react-elastic-carousel';
import { CircleOutlined } from "@mui/icons-material";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(true);
  const validatePassword = (password: any) => {
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d.\d)[^\s]{8,100}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    setUser({ ...user, password: newPassword });
    setPasswordValid(validatePassword(newPassword));
    setButtonDisabled(newPassword === "");
  };

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Login successful", response.data);
      router.push("/dashboard");
    } catch (error: any) {
      console.log("login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && passwordValid));
  }, [user.email, passwordValid]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const settings = {
    dots: true,
    Slider: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function(i:any) {
      return (
          <div  style={{ position: 'relative', textAlign: 'center' }}>
              <CircleOutlined style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -150%)', color: 'white', fontSize: 24 }}>add_circle</CircleOutlined> {/* Example: Using the "add_circle" icon */}
              <span className="slick-dots-bullet"></span>
          </div>
      );
  }
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={4} order={{xs:2,md:1}}>
           {loading && <Box>Loading...</Box>}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop:{xs:'30px'},
              height: {xs:'100vh',md:"90%"}, // Adjust the height as needed
              padding: "0 20px", // Add padding to the sides
            }}
          >
            <Image src={Logo} alt="logo" width={400} height={200} />

            <Typography
              variant="h4"
              fontWeight="600"
              color="#0024E0"
              textAlign="center"
              fontFamily="Poppins,Sans-serif"
            >
              Welcome back !
            </Typography>
            <Typography
              variant="h5"
              color="#0024E0"
              textAlign="center"
              fontFamily="Poppins,Sans-serif"
            >
              Log in to proceed with your learning
            </Typography>

            <Box sx={{ width: "80%", }}>
              <TextField
                placeholder="Enter Email Id"
                label="Email id"
                name="email"
                size="small"
                required
                focused
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                fullWidth
                margin="normal"
              />
              <TextField
                placeholder="Enter Password"
                label="Password"
                name="password"
                size="small"
                focused
                required
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
                value={user.password}
                onChange={handlePasswordChange}
                fullWidth
                margin="normal"
                error={!passwordValid}
                helperText={
                  !passwordValid &&
                  "Password must be 8-100 characters long, contain at least one uppercase letter, one lowercase letter, and at least two digits. It should not contain spaces and blacklist specific values."
                }
              />
              <Button
                variant="contained"
                onClick={onLogin}
                disabled={buttonDisabled}
                sx={{
                  boxShadow: 1,
                  maxWidth: "100%",
                  height: "41px",
                  width: "100%",
                  fontWeight: "800",
                  fontFamily: "Poppins,Sans-serif",
                  color: "white",
                }}
              >
                Submit
              </Button>
              <Typography sx={{ textAlign: "end", color: "rgba(0, 36, 224, 1)" }}>
                <Link sx={{ cursor: "pointer" }}> forgot password</Link>
              </Typography>

              <Typography
                variant="h6"
                align="center"
                marginTop={1}
                fontWeight={900}
                sx={{ color: "blue" }}
              >
                or login with
              </Typography>
              <Grid
              container
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Button
                startIcon={<Google />}
                variant="contained"
                sx={{
                  background: "#FF3E30",
                  "&:hover": { background: "#FF3E30" },
                  textTransform: "none",
                  width:{xs:'100%',md:'200px'},
                  borderRadius: "5px",
                  height: '41px',
                }}
              >
                Google
              </Button>
              <Button
                startIcon={<Facebook />}
                variant="contained"
                sx={{
                  background: "#316FF6",
                  "&:hover": { background: "#316FF6" },
                  textTransform: "none",
                  width:{xs:'100%',md:'200px'},
                  borderRadius: "5px",
                  height: '41px',
                  marginTop: { xs: 1, lg: 0 },
                }}
              >
                Facebook
              </Button>
            </Grid>
            <Grid
              container
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: { xs: 1, lg: 2 },
              }}
            >
              <Button
                startIcon={<Twitter />}
                variant="contained"
                sx={{
                  background: "#0077B5",
                  "&:hover": { background: "#0077B5" },
                  textTransform: "none",
                  width:{xs:'100%',md:'200px'},
                  borderRadius: "5px",
                  height: '41px',
                }}
              >
                Twitter
              </Button>

              <Button
                startIcon={<LinkedIn />}
                variant="contained"
                sx={{
                  background: "#000000",
                  "&:hover": { background: "#000000" },
                  textTransform: "none",
                  width:{xs:'100%',md:'200px'},
                  borderRadius: "5px",
                  height: '41px',
                  marginTop: { xs: 1, lg: 0 },
                }}
              >
                LinkedIn
              </Button>
            </Grid>
              </Box>
              <Box
                sx={{ display: "block", textAlign: "center", marginTop:{xs:'20px',md: "15px"} }}
              >
                Don't have an Account ?
                <Link
                  href="/signup"
                  sx={{ "& .MuiTypography-root": { fontWeight: "bold" } }}
                >
                  Sign Up
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "#f0f0f0",
                textAlign: "center",
                padding: "10px 0",
                marginTop: {xs:'50px',md:"50px"},
              }}
            >
              <Typography variant="body2" color="#555">
                © 2009-2024 - inteMEgence Perk Solutions. All Rights Reserved. |
                Privacy Policy
              </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={8} order={{xs:1,md:2}}>
            <Slider {...settings} arrows={false} >
              <Box sx={{ width: "100%", height: "100%" }}>
                <Image
                  src="/purple.svg"
                  alt="learning"
                  width={1000}
                  height={600}
                  layout="responsive"
                />
              </Box>
              <Image
                src={"/AI.svg"}
                alt="learning"
                width={1000}
                height={600}
                layout="responsive"

              />
              <Image
                src={"/DevOps.svg"}
                alt="AI"
                width={1000}
                height={600}
                layout="responsive"

              />
              <Image
                src="/MernStack.svg"
                alt="learning"
                width={1000}
                height={600}
                layout="responsive"

              />
              <Image
                src="/AIML.svg"
                alt="AI"
                width={1000}
                height={600}
                layout="responsive"

              />
              <Image
                src="/AI.svg"
                alt="learning"
                width={1000}
                height={600}
                layout="responsive"
              />
            </Slider>
        </Grid>
      </Grid>
    </Box>
  );
}
