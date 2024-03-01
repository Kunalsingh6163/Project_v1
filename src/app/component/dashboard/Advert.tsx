import React from "react";
import {
  Typography,
  Card,
  Button,
  Box,
  CardContent,
  Grid,
} from "@mui/material";
import Image from "next/image";

export default function Adverstisment() {
  return (
      <Card
        
        sx={{
          display:'block',
          position:{xs:'relative',md:'relative'},
          width: {xs:'100%',md:"378px"},
          height: "291px",
          backgroundColor: "#F0F0F0",
          borderRadius: "10px",
          left:{md:'1300px'},
          top:{xs:'30px',md:'-660px'}
        }}
      >
        <Card
          sx={{
            height: "252px",
            width: "334px",
            marginTop: "20px",
            marginLeft: "20px",
            borderRadius: "5px",
          }}
        >
          <CardContent>
            <Grid display={"flex"}>
              <Typography
                sx={{
                  color: "#1A56B1",
                  fontSize: { xs: "20px", sm: "20px" },
                  lineHeight: "30px",
                  font: "Poppins",
                  fontWeight: "600",
                  width: "250px",
                }}
              >
                Get a Myntra <br />
                Voucher Worth
                <br />₹ 500
              </Typography>
              <Image
                src="friendship 1.svg"
                alt="friendship"
                width={61}
                height={62}
                style={{ marginLeft: "0px" }}
              />
            </Grid>
            <Box>
              <Image
                src="check 1.svg"
                alt="check"
                width={15}
                height={15}
                style={{ marginTop: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{ marginLeft: "20px", marginTop: "-20px" }}
              >
                You’ll receive Rs 1000 Amazon voucher <br />
                after they successfully enroll
              </Typography>
              <Image
                src="check 1.svg"
                alt="check"
                width={15}
                height={15}
                style={{ marginTop: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{ marginLeft: "20px", marginTop: "-20px" }}
              >
                Your Peer will receive 5% discount
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#000AF0",
                color: "white",
                left: "135px",
                marginTop: "15px",
              }}
            >
              <Image
                src={"/confetti.svg"}
                alt="logo"
                width={20}
                height={20}
                style={{ marginRight: "5px" }}
              />
              Refer your Peer
            </Button>
          </CardContent>
        </Card>
      </Card>
  );
}
