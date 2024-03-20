'use client'
import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, useMediaQuery } from '@mui/system';
import Button from '@mui/material/Button'; // Import Button from @mui/material
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

const MyForm = () => {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    date: ''
  });

  const handleChange = (e:any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const MyDateTimePicker = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return isMobile ? (
      <DemoItem label="Date & Time">
        <MobileDateTimePicker defaultValue={dayjs('2024-03-12T15:30')} />
      </DemoItem>
    ) : (
      <DemoItem label="Date & Time">
        <DesktopDateTimePicker defaultValue={dayjs('2024-03-12T15:30')} />
      </DemoItem>
    );
  };

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
        <Box sx={{ width: { xs: "100%", lg: "50%" }, marginLeft: { xs: "5px", lg: '25%' }, marginTop: "10%" }}>
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                'MobileDateTimePicker',
                'DesktopDateTimePicker',
              ]}
            >
              <MyDateTimePicker />
            </DemoContainer>
          </LocalizationProvider>
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Button variant="contained" sx={{backgroundColor:"#0024E0" , width:"100%"}}>
            Book Demo Session
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MyForm;
