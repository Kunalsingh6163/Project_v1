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
        position: { xs: "relative", md: "relative" },
        width: { xs: "95%", md: "359px" },
        height: "276px",
        backgroundColor: "#F0F0F0",
        borderRadius: "9.5px",
        left: { md: "1083px" },
        top: { xs: "28.5px", md: "-590px" },
      }}
    >
      <Card
        sx={{
          height: "239.4px",
          width: "317.3px",
          marginTop: "19px",
          marginLeft: "19px",
          borderRadius: "4.75px",
        }}
      >
        <CardContent>
          <Grid display={"flex"}>
            <Typography
              sx={{
                color: "#1A56B1",
                fontSize: { xs: "19px", sm: "19px" },
                lineHeight: "28.5px",
                font: "Poppins",
                fontWeight: "600",
                width: "237.5px",
              }}
            >
              Get a Myntra <br />
              Voucher Worth
              <br />
              ₹ 500
            </Typography>
            <Image
              src="friendship 1.svg"
              alt="friendship"
              width={57.95}
              height={58.1}
              style={{ marginLeft: "0px" }}
            />
          </Grid>
          <Box>
            <Image
              src="check 1.svg"
              alt="check"
              width={14.25}
              height={14.25}
              style={{ marginTop: "9.5px" }}
            />
            <Typography
              variant="body2"
              sx={{ marginLeft: "19px", marginTop: "-19px" }}
            >
              You’ll receive Rs 500 Amazon voucher <br />
              after they successfully enroll
            </Typography>
            <Image
              src="check 1.svg"
              alt="check"
              width={14.25}
              height={14.25}
              style={{ marginTop: "9.5px" }}
            />
            <Typography
              variant="body2"
              sx={{ marginLeft: "19px", marginTop: "-19px" }}
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
              left: "128.25px",
              marginTop: "13px",
            }}
          >
            <Image
              src={"/confetti.svg"}
              alt="logo"
              width={18}
              height={18}
              style={{ marginRight: "4.75px" }}
            />
            Refer your Peer
          </Button>
        </CardContent>
      </Card>
    </Card>
  );
}
