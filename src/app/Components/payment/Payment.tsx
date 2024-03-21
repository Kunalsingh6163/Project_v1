"use client"
import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Typography, Button } from "@mui/material";
import Image from "next/image";
import Files from "react-files";

const Payment = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    date: "",
    files: [] 
  });

  const handleChange = (e:any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onFilesChange = (files:any) => {
    setUser({
      ...user,
      files: files
    });
  };

  const onFilesError = (error:any, file:any) => {
    console.log("Error uploading file:", error, file);
  };

  const handleSubmit = () => {
    console.log("Submitted Files:", user.files);
  };

  return (
    <Box>
      <Card
        sx={{
          height: { xs: "540px", md: "", lg: "650px" },
          width: { xs: "360px", md: "", lg: "1300px" },
          backgroundColor: "#EEEEEE",
          marginTop: { xs: "30px", lg: "60px" },
          marginLeft: { xs: "5px", lg: "131px" },
          borderRadius: "10px",
          boxShadow: "4"
        }}
      >
        <CardContent>
          <Box sx={{ marginLeft: { xs: "28%", lg: "44%" }, marginTop: "4%" }}>
            <Image src={"IP.svg"} alt="IP" width={150} height={80} />
          </Box>
          <Box sx={{ marginTop: "2%" }}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: { xs: "20px", lg: "36px" },
                color: "#0024E0",
                textAlign: "center"
              }}
            >
              Payment Confirmation
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", lg: "40%" }, marginLeft: { xs: "4px", lg: "30%" }, marginTop: "10px" }}>
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
              placeholder="Enter Mobile Number"
              label="Mobile Number"
              name="phone"
              size="small"
              required
              focused
              type="tel"
              value={user.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              sx={{ mb: 2 }}
            />

            
            <Files
              className="files-dropzone"
              onChange={onFilesChange}
              onError={onFilesError}
              accepts={["image/*"]}
              multiple
              maxFiles={3}
              maxFileSize={100000000}
              minFileSize={0}
              clickable
            >
              <Button variant="outlined" sx={{ textAlign: "center",textTransform:"lowercase" ,marginTop: "10px" ,width:{xs:"330px",lg:"508px"}}}>
                Click to Upload 
              </Button>
            </Files>

        
            {user.files.length > 0 && (
              <div>
                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                  Uploaded Files:
                </Typography>
                <ul>
                  {user.files.map((file, index) => (
                    <li key={index}>
                      {file.name} - {file.size} bytes
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: "#0024E0", width: "100%" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Payment;
