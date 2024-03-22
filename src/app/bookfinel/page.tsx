"use client"
import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs'; 

export default function BookFinel() {

  const defaultValue = dayjs('2024-03-21T15:30');

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" marginTop={{xs:"10px",lg:"50px"}}>
      <Card sx={{ width: 600, height: 700 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{textAlign:"center"}}>
          Welcome John Schedule your  Meeting
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateTimePicker defaultValue={defaultValue} />
          </LocalizationProvider>
        </CardContent>
      </Card>
    </Box>
  );
}
