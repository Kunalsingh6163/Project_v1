"use client";
import React, { useEffect, useState } from "react";
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
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={4} >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
            marginTop: "170px",
          }}
        >
          {loading && <Box>Loading...</Box>}
          <Image src={Logo} alt="logo" width={200} height={100} />

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

          <Box sx={{ width: "80%", margin: "0 auto" }}>
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
            <Box sx={{marginTop:'25px'}}>
            <Grid container spacing={2}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Button
                startIcon={<Google />}
                variant="contained"
                sx={{
                  background: "#FF3E30",
                  "&:hover": { background: "#FF3E30" },
                  textTransform: "none",
                  width: 200,
                  borderRadius: "5px",
                  height: 41,
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
                  width: 200,
                  borderRadius: "5px",
                  height: 41,
                }}
              >
                Facebook
              </Button>
            </Grid>
            <Grid container spacing={2}
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Button
                startIcon={<Twitter />}
                variant="contained"
                sx={{
                  background: "#0077B5",
                  "&:hover": { background: "#0077B5" },
                  textTransform: "none",
                  width: 200,
                  borderRadius: "5px",
                  height: 41,
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
                  width: 200,
                  borderRadius: "5px",
                  height: 41,
                }}
              >
                LinkedIn
              </Button>
            </Grid>
            </Box>
            <Box
              sx={{ display: "block", textAlign: "center", marginTop: "20px" }}
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
              marginTop: "20%",
            }}
          >
            <Typography variant="body2" color="#555">
              © 2009-2024 - inteMEgence Perk Solutions. All Rights Reserved. |
              Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={8} >
        {/* <Hidden xsDown> */}
          <Slider {...settings}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <Image
                src="/AI.svg"
                alt="learning"
                width={1000}
                height={700}
                layout="responsive"
              />
            </Box>
            <Image
              src={AIML}
              alt="learning"
              width={1000}             
              height={700}
              layout="responsive"
            />
            {/* </Box> */}
            <Image
              src={AIML}
              alt="AI"
              width={1000}
              height={700}
              layout="responsive"
            />
            <Image
              src="/DevOps.svg"
              alt="learning"
              width={1000}
              height={700}
              layout="responsive"
            />
            <Image
              src="/MernStack.svg"
              alt="AI"
              width={1000}
              height={700}
              layout="responsive"
            />
            <Image
              src="/AI.svg"
              alt="learning"
              width={1000}
              height={700}
              layout="responsive"
            />
          </Slider>
        {/* </Hidden> */}
      </Grid>
    </Grid>
    </Box>
  );
}
