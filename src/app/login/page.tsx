"use client";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from 'axios'
import { toast } from "react-hot-toast";
import { Typography,Box, Button, Link,Grid,Hidden } from '@mui/material';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import {IconButton,} from '@mui/material';
import { Translate, Visibility,VisibilityOff } from '@mui/icons-material';
import { Poppins } from "next/font/google";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Login successful", response.data);
            router.push("/Signup");
            
        } catch (error:any) {
            console.log("login failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }
    

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
    const handleMouseDownPassword = (event:any) => {
        event.preventDefault();
      };

    return (
      <Grid container>
         <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} >
                  <Hidden xsDown>
                  <Image src="/learning image.svg" alt="learning " width={922} height={900} />
                 </Hidden>
                  </Grid>
                  <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "90vh", marginTop:'5%' }}>
          {loading && <Box>Loading...</Box>}
          <Image
            src="final logo 3.svg"
            alt="Company Logo"
            width={80}
            height={80}
          />
          <Typography variant="h4" fontWeight="600" color="#0024E0" textAlign="center">
            Welcome back !
          </Typography>
          <Typography variant="h5" color="#0024E0" textAlign="center" fontFamily="Poppins">
            Login to continue Your Progress
          </Typography>
          <Box sx={{ width: "60%", margin: "0 auto" }}>
            <TextField label="Email id" name="email" required type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} fullWidth margin="normal" />
            <TextField
              label="Password"
              name="password"
              required
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Button onClick={onLogin} disabled={buttonDisabled} sx={{ boxShadow: 1, maxWidth: "100%", height: "auto", backgroundColor: "rgba(0, 36, 224, 1);", width: "100%", fontWeight: "600", fontFamily: "Poppins,sans-serif", color: "#FFFFFF" }}>
              Submit
            </Button>
          </Box>
          <Link href="/Signup" sx={{ display: "block", textAlign: "center", marginTop: "80px" }}>
           Not an Account? signup
          </Link>
          <Box sx={{ backgroundColor: "#f0f0f0", textAlign: "center", padding: "20px 0", marginTop: "13%" }}>
            <Typography variant="body2" color="#555">
              © 2009-2024 - inteMEgence Perk Solutions. All Rights Reserved. | Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
);
            }
