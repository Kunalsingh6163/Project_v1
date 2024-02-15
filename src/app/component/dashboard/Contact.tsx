"use client";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from 'axios'
import { toast } from "react-hot-toast";
import { Card, CardContent, Typography,Box, Button, Link } from '@mui/material';
import Image from 'next/image';
import TextField from '@mui/material/TextField';



export default function Contact() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',        
        message:'',
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    

    useEffect(() => {
        if(user.email.length > 0 && user.message.length > 0 && user.firstName.length > 0 && user.lastName.length > 0 && user.mobileNo.length > 0) {
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
            
        } catch (error:any) {
            console.log("Submit failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }


    return (
      
      <Box>
        <Box>
        {loading && <Box>Loading...</Box>}
        <Card
        sx={{
          position: 'absolute',
          width: '100%',
          maxWidth: '1191px', 
          height: '70vh',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(143, 228, 247)',
          borderRadius: '50px',
          '@media screen and (max-width: 720px)': {
            width: '100%', 
            height: '95vh',
            borderRadius: '50px',
          }
        }}
      >
           
        <Box> 
          <CardContent>
                           
             <Image  style={{ position: 'absolute',height:"90%", left: '25%',maxWidth:'80%', transform: 'translateX(-50%)' }}
               src="stall.svg"
               alt="Picture of a stall"
               width={543}
               height={700}              
               />
            <Box sx={{
                position: 'absolute',
                fontFamily: 'poppins',
                marginTop: '1%',
                width: '110%',
                maxWidth:'125%',
                height: 'auto',
                left:'50%',
                textAlign:'center',
                transform: 'translateX(-50%)',
                
                }} >
              <Typography variant="h4" fontWeight="600" color="#0024E0">
                Contact Information
              </Typography>
            </Box>
            

            <Box sx={{  position: 'absolute', fontFamily: "Poppins,sans-serif",width:'100%', maxwidth: '100px', top: '100px', left: '70%', transform: 'translateX(-50%)',fontWeight:'500', textAlign:'center' }}>
              <Typography variant="h5" fontWeight="600" color="#0024E0" >
                Contact Info Here!
              </Typography>
            </Box>
            <Box>            
            
                  <Box sx={{ position: 'absolute', fontFamily: "Poppins,sans-serif",width:'40%', maxWidth: '600px', top: '120px', left: '70%', transform: 'translateX(-50%)',fontWeight:'500', textAlign:'center',}}>
                  <TextField label="First Name" name='firstName' value={user.firstName} required onChange={(e) => setUser({...user, firstName: e.target.value})} fullWidth margin="normal"  />
                  <TextField label="Last Name" name='lastName' value={user.lastName} required onChange={(e) => setUser({...user, lastName: e.target.value})} fullWidth margin="normal" />
                  <TextField label="Email id" name='email' required type='email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} fullWidth margin="normal"/>
                  <TextField label="Mobile No" name='number' required type='number' value={user.mobileNo} onChange={(e) => setUser({...user, mobileNo: e.target.value})} fullWidth margin="normal" />
                  
                  <TextField label="Message" name='message' required value={user.message} onChange={(e) => setUser({...user, message: e.target.value})} fullWidth margin="normal" />
                  
                  <Button onClick={onSubmit}  disabled={buttonDisabled} sx={{maxWidth:'80%',height:'auto',background:'rgba(0, 36, 224, 1)',left:'5px',width:'100px',fontWeight:'1000', fontFamily:'Poppins,sans-serif',color:'#FFFFFF'}}>Submit</Button>
              </Box>
              </Box>
           </CardContent>
         </Box>
        </Card>
        </Box>
        </Box>
);
}
