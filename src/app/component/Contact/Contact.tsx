"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { contactUser } from "@/app/api/lib/api";

export default function Contact() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    emailid: "",
    mobile: "",
    message: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (
      user.emailid.length > 0 &&
      user.message.length > 0 &&
      user.name.length > 0 &&
      user.mobile.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/Submit", user);
      console.log("Submitted ", response.data);
      router.push("");
    } catch (error: any) {
      console.log("Submit failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleContact = async (event: any) => {
    event.preventDefault();
    try {
      const data = await contactUser(
        user.name,
        user.emailid,
        user.mobile,
        user.message
      );
      console.log("Contact Saved", data);
    } catch (error) {
      console.error("Contact failed", error);
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
              {loading && <Box>Loading...</Box>}
      <Card
        sx={{
          marginTop: { xs: "5px", lg: "50px" },
          marginLeft: { xs: "0", lg: "50px" },
          position: "relative",
          width: { xs: "100%", lg: "1440px" },
          boxShadow: "inherit",
          background: "#EEEEEE",
          borderRadius: "10px",
          height: { xs: "100%", lg: "734px" },
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            marginTop={10}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                paddingRight: { xs: "0", lg: "80px" },
                paddingBottom: { xs: "50px" },
                borderRight: { xs: "0", lg: "5px solid #0009D9" },
                borderBottom: { xs: "5px solid #0009D9", lg: 0 },
              }}
            >
              <Image
                style={{
                  position: "relative",
                  height: "100%",
                  maxWidth: "100%",
                }}
                src="contactUs.svg"
                alt="Picture of a stall"
                width={550}
                height={550}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                marginLeft: { xs: 0, lg: 13 },
                marginTop: { xs: "25px", lg: 0 },
              }}
            >
              <Image
                style={{
                  marginLeft: "25%",
                  width: "200px",
                  height: "120px",
                }}
                src="Logo.svg"
                alt="logo"
                width={200}
                height={95}
              />
              <Typography
                sx={{ marginLeft: { xs: "25%", lg: "28%" } }}
                variant="h4"
                fontWeight="600"
                color="#0024E0"
              >
                Contact us
              </Typography>
              <form onSubmit={handleContact}>
                <TextField
                  label="Name"
                  name="name"
                  size="small"
                  placeholder="Enter Your Name"
                  focused
                  value={user.name}
                  required
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email id"
                  name="email"
                  required
                  placeholder="Enter Email id"
                  size="small"
                  focused
                  type="email"
                  value={user.emailid}
                  onChange={(e) =>
                    setUser({ ...user, emailid: e.target.value })
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Mobile No"
                  name="number"
                  required
                  focused
                  placeholder="Enter Mobile"
                  type="number"
                  size="small"
                  value={user.mobile}
                  onChange={(e) => setUser({ ...user, mobile: e.target.value })}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Message"
                  name="message"
                  required
                  placeholder="Write Here!"
                  size="small"
                  focused
                  value={user.message}
                  onChange={(e) =>
                    setUser({ ...user, message: e.target.value })
                  }
                  fullWidth
                  margin="normal"
                />
                <Button
                  type="submit"
                  disabled={buttonDisabled}
                  variant="contained"
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    background: "rgba(0, 36, 224, 1)",
                    width: "100%",
                    fontWeight: "1000",
                    fontFamily: "Poppins,sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
