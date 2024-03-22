'use client'
import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, useMediaQuery } from '@mui/system';
import Button from '@mui/material/Button'; // Import Button from @mui/material
import { useRouter } from "next/navigation";
const MyForm = () => {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    phone: '',
   
  });

  const handleChange = (e:any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const router = useRouter();
  

  return (
    <Card
      sx={{
        width: { xs: "350px", lg: "879px" },
        height: { xs: "500px", lg: "591px" },
        marginTop: { xs: "50px", lg: "208px" },
        marginLeft: { xs: "10px", lg: "300px" },
        marginBottom: { xs: "00px", lg: "296px" },
        boxShadow: "4",
        borderRadius: "10px"
      }}
    >
      <CardContent>
        <Box sx={{ width: { xs: "100%", lg: "50%" }, marginLeft: { xs: "5px", lg: '25%' }, marginTop: "20%" }}>
          <TextField
            placeholder="Enter Name"
            label="Name"
            name="name"
            size="small"
            required
            focused
            value={user.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter Email ID"
            label="Email ID"
            name="email"
            size="small"
            required
            focused
            type="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter Phone Number"
            label="Phone Number"
            name="phone"
            size="small"
            required
            focused
            type="tel"
            value={user.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ mb: 1 }}
          />
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: '15%',marginLeft:"80%" }}>
            <Button variant="contained" onClick={() => router.push('/bookfinel')} sx={{backgroundColor:"#0024E0" , width:"80%"}}>
            Next
            </Button>
          </Box>
      </CardContent>
    </Card>
  );
};

export default MyForm;
