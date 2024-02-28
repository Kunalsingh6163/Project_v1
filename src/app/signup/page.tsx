"use client";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from 'axios'
import { toast } from "react-hot-toast";
import { Typography,Box, Button, Link,Grid,Hidden } from '@mui/material';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import {IconButton,} from '@mui/material';
import { LinkedIn, Password, Translate, Visibility,VisibilityOff } from '@mui/icons-material';
import { Facebook,Twitter,Apple,Google } from "@mui/icons-material";
import { ClassNames } from "@emotion/react";


export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        Name: '',
        email: '',
        password: '',
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [nameError,setnameError] = React.useState("");
    const [emailError,setEmailError] = React.useState("");
    const [passwordError,setPasswordError] = React.useState("");

    
  const validateName = (Name:any) => {
    const isValid = /^[A-Za-z]+ [A-Za-z]+$/.test(Name);
    if (!isValid) {
        setnameError("Name must have a Firstname and a Lastname - Ex. John doe");
        return false;
    } else {
        setnameError("");
        return true;
    }
};

    const validateEmail = (email:any) => {
      const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      if (!isValid) {
          setEmailError("Please enter a valid email address");
          return false;
      } else {
          setEmailError("");
          return true;
      }
  };

  const validatePassword = (password:any) => {
    const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (!isValid) {
      setPasswordError(
        "Password must:\n" +
        "- Be at least 8 characters long\n" +
        "- Contain at least one uppercase letter\n" +
        "- Contain at least one lowercase letter\n" +
        "- Contain at least one digit\n" +
        "- Contain at least one special character (e.g., !@#$%^&*)"
      );    
      return false;
  } else {
      setPasswordError("");
      return true;
  }
  
  }
    const onSignup = async () => {
        try {
            setLoading(true);
            if (!validateName(user.Name)){
              return;
            }
            if (!validateEmail(user.email)) {
              return;
            }
            if (!validatePassword(user.password)){
              return;
            }
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup successful", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }
    

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.Name.length) {
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
                  {loading && <Box>Loading...</Box>}
                  <Grid  item xs={12} sm={6} order={{ xs: 1, sm: 2 }} >
                  <Hidden xsDown>
                  <Image src="/Juliacameron.svg" alt="Pic of a kid learning" width={922} height={900} layout="responsive" 
                  />
                 </Hidden>
                  </Grid>
      <Grid display={'flex'} flexDirection="column" item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh", marginTop:'5%' }}>
                  <Box>
                        <Image src="/Logo.svg" alt="Logo" width={250} height={250} />
                    </Box>

          <Typography  variant="h5" fontWeight="600" color="#0024E0" textAlign="center" sx={{fontFamily:"Poppins, Sans-serif"}}>
            Sign-Up Here
          </Typography>
          <Typography variant="h6" color="#0024E0" textAlign="center" >
            Signup to continue Your Progress
          </Typography>
          <Grid sx={{ width: "60%"}}>
            <TextField sx={{height:'45px',borderRadius:'5px' }} label="Name" color="primary" placeholder="Name"focused name="Name" value={user.Name} required onChange={(e) => setUser({ ...user, Name: e.target.value })} fullWidth margin="normal" error={!!nameError} helperText={nameError}/>
            <TextField sx={{height:'45px',borderRadius:'5px'}} label="Email id" focused placeholder="Email Id" name="email" required type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} fullWidth margin="normal" error={!!emailError} helperText={emailError}/>
            <TextField
            focused
            sx={{height:'45px',borderRadius:'5px'}}
            placeholder="Password"
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
              error={!!passwordError}
              helperText={passwordError}
            />
            <Button variant="contained" onClick={onSignup} disabled={buttonDisabled} sx={{marginTop:'15px' ,boxShadow: 1, maxWidth: "100%", height: "auto", width: "100%", fontWeight: "800", fontFamily: "Poppins,Sans-serif", color:'white' }}>
              Submit
            </Button>
            <Box marginTop="5px" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Typography variant="h6" align="center" sx={{color:'blue'}}>or sign up with</Typography>
            <Box marginTop={"10px"} display={"flex"} flexDirection={"column"} gap={"15px"} sx={{width:'100%'}}>
                <Button startIcon={<Google />}  variant='contained' sx={{height:41, fontSize:16, fontWeight:400, textTransform:'none',borderRadius:'5px', background:'#FF3E30', '&:hover': {background:'#FF3E30'}}}>
                    Sign in with Google
                </Button>
                <Button startIcon={<Facebook />}  variant='contained' sx={{height:41, fontSize:16, fontWeight:400, textTransform:'none',borderRadius:'5px',background:"#316FF6", '&:hover': {background:"#316FF6"}}}>
                     Sign in with Facebook
                </Button>
                <Button startIcon={<Twitter />}  variant='contained' sx={{height:41, fontSize:16, fontWeight:400, textTransform:'none',borderRadius:'5px',background:"#0077B5", '&:hover': {background:"#0077B5"}}}>
                     Sign in with Twitter
                </Button>
                <Button startIcon={<LinkedIn /> } variant='contained' sx={{height:41, fontSize:16, fontWeight:400, textTransform:'none',borderRadius:'5px',background:"#000000", '&:hover': {background:"#000000"}}}>
                    Sign in with LinkedIn
                </Button>
            </Box>

            </Box>
          </Grid>
          <Box sx={{ display: "block", textAlign: "center", marginTop: "8px" }}>
            Already Have An Account! {""}
            <Link href="/login" underline="hover">
              Login
            </Link>
          </Box>
          <Box  sx={{ backgroundColor: "#f0f0f0", textAlign: "center", padding: "15px 0", marginTop: "5%" }}>
            <Typography variant="body2" color="#555">
              © 2009-2024 - inteMEgence Perk Solutions. All Rights Reserved. | <span style={{textDecorationLine:'underline'}}>Privacy Policy</span>
            </Typography>
          </Box>
          </Box>
      </Grid>
    </Grid>
    
);
}