"use client"
import React, { useEffect,useState} from "react";
import {useRouter} from "next/navigation";
import axios from 'axios'
import { toast } from "react-hot-toast";
import { Typography, Box, Button, Link, Grid, Hidden } from '@mui/material';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { Apple, Facebook, Google, LinkedIn, Translate, Twitter, Visibility, VisibilityOff } from '@mui/icons-material';
import { Poppins } from "next/font/google";
import {Fade} from '@mui/material'

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });
    const [buttonDisabled, setButtonDisabled] =React.useState(false);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] =React.useState(false);
    const [passwordValid, setPasswordValid] = React.useState(true); 
    const [imageHovered, setImageHovered] = useState(false); 
    const [showWelcome, setShowWelcome] = useState(false); 
    const validatePassword = (password:any) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[^\s]{8,100}$/;
        return passwordRegex.test(password);
    };

    const handlePasswordChange = (e:any) => {
        const newPassword = e.target.value;
        setUser({ ...user, password: newPassword });
        setPasswordValid(validatePassword(newPassword));
        setButtonDisabled(newPassword === '');
    
    };

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Login successful", response.data);
            router.push("/dashboard");
        } 
        
        catch (error:any) {
            console.log("login failed", error.message);
            toast.error(error.message);
        } 
        
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setButtonDisabled(!(user.email && passwordValid));
    }, [user.email, passwordValid]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event:any) => {
        event.preventDefault();
    };
    
    return (
      

        <Grid container>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} sx={{
    
}}>
    <Hidden xsDown>
        <Image src="/Juliacameron.svg" alt="learning" width={1400} height={1255} layout="responsive"/>
    </Hidden>
</Grid>

            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "90vh",marginTop:'70px' }}>
                    {loading && <Box>Loading...</Box>}
                    <Typography
            variant="h4"
            textAlign="center"
            component="a"
            sx={{
              fontFamily: 'Poppins,Sans-serif',
              fontWeight: 700,
            }}
          >
            <span style={{ color: '#FC6F6F' }}>inte</span>
            <span style={{ color: '#CD0606' }}>ME</span>
            <span style={{ color: '#21EA00' }}>gencePerk</span>
          </Typography>
                    
                    <Fade in={!showWelcome} timeout={1000}>
                    
                    <Typography 
                        variant="h4" 
                        fontWeight="600" 
                        color="#0024E0" 
                        textAlign="center"
                    >
                        Welcome back !
                    </Typography>
                </Fade>
                 <Fade in={!showWelcome} timeout={1300}>
                 <Typography variant="h5" color="#0024E0" textAlign="center" fontFamily="Poppins">
                 Log in to proceed with your learning
                    </Typography>
                    </Fade>
                    
                    <Box sx={{ width: "60%", margin: "0 auto" }}>
                        <TextField
                            label="Email id"
                            name="email"
                            required
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            fullWidth
                            margin="normal"
                        />
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
                            onChange={handlePasswordChange}
                            fullWidth
                            margin="normal"
                            error={!passwordValid}
                            helperText={!passwordValid && "Password must be 8-100 characters long, contain at least one uppercase letter, one lowercase letter, and at least two digits. It should not contain spaces and blacklist specific values."}
                        />
                        <h5 style={{ textAlign: 'end', color: 'rgba(0, 36, 224, 1)' }}>forgot password</h5>
                        <Button onClick={onLogin} disabled={buttonDisabled} sx={{ boxShadow: 1, maxWidth: "100%", height: "auto", backgroundColor: "#0024E0", width: "100%", fontWeight: "600", fontFamily: "Poppins,sans-serif", color: "#FFFFFF" }}>
              Submit
            </Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                    <Typography variant="h6" align="center" marginTop={1} sx={{color:'blue'}}>or login with</Typography>
                    <Grid spacing={2} container  columns={16} >
                    <Grid item xs={8}>
                    <Button startIcon={<Google />}  variant='contained' sx={{background:'#FF3E30', '&:hover': {background:'#FF3E30'}}}>
                     Google
                </Button>
                </Grid>
                <Grid item xs={8}>
                <Button startIcon={<Facebook />}  variant='contained' sx={{background:"#316FF6", '&:hover': {background:"#316FF6"}}}>
                    Facebook
                </Button> 
                </Grid>
                    </Grid>

                    <Grid spacing={2} marginTop={2} container columns={16} >
                <Grid item xs={8}>
                    <Button startIcon={<Twitter />}  variant='contained' sx={{background:"#0077B5", '&:hover': {background:"#0077B5"}}}>
                    Twitter
                </Button>
                </Grid>
                <Grid sx={{width:'100%'}}item xs={8}>

                <Button startIcon={<LinkedIn /> } variant='contained' sx={{background:"#000000", '&:hover': {background:"#000000"}}}>
                     LinkedIn
                </Button>
                </Grid>
                </Grid>
                    </Box>
                    <Link href="/signup" sx={{ display: "block", textAlign: "center", marginTop: "20px", "& .MuiTypography-root": { fontWeight: 'bold' } }}>
                        Not an Account? signup
                    </Link>

                    <Box sx={{ backgroundColor: "#f0f0f0", textAlign: "center", padding: "10px 0", marginTop: "20%" }}>
                        <Typography variant="body2" color="#555">
                            © 2009-2024 - inteMEgence Perk Solutions. All Rights Reserved. | Privacy Policy
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
