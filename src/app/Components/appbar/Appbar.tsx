"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/navigation";


const pages = ["Resource", "Company", "Reviews"];
const resourceMenuItems = ["Case Studies", "Webiners", "Our Events"];
const companyMenuItems = ["About Us", "Careers", "Contact Us"];

export default function Appbar() {
  const router = useRouter();
  const [user, setAnchorElNav] = React.useState(null);
  const [resourceMenuAnchor, setResourceMenuAnchor] = React.useState(null);
  const [companyMenuAnchor, setCompanyMenuAnchor] = React.useState(null);
  const [reviewsAnchor, setReviewsAnchor] = React.useState(null);
  const [resourceMenuActive, setResourceMenuActive] = React.useState(false);
  const [companyMenuActive, setCompanyMenuActive] = React.useState(false);
  const [reviewsActive, setReviewsActive] = React.useState(false);
 
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleResourceMenuOpen = (event: any) => {
    setResourceMenuAnchor(event.currentTarget);
    setResourceMenuActive(true);
  };

  const handleResourceMenuClose = () => {
    setResourceMenuAnchor(null);
    setResourceMenuActive(false);
  };

  const handleCompanyMenuOpen = (event: any) => {
    setCompanyMenuAnchor(event.currentTarget);
    setCompanyMenuActive(true);
  };

  const handleCompanyMenuClose = () => {
    setCompanyMenuAnchor(null);
    setCompanyMenuActive(false);
  };

  const handleReviewsOpen = (event: any) => {
    setReviewsAnchor(event.currentTarget);
    setReviewsActive(true);
    router.push('/review');
  };

  const handleReviewsClose = () => {
    setReviewsAnchor(null);
    setReviewsActive(false);
  };

  return (
    <AppBar
      position="relative"
      sx={{ height: "80px", background: "white", boxShadow: 5 }}
    >
      <Container maxWidth={false}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "76px",
          }}
        >
          <Image src="/Logo.svg" alt="Logo" height={80} width={180} />

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(event) => {
                  if (page === "Resource") {
                    handleResourceMenuOpen(event);
                  } else if (page === "Company") {
                    handleCompanyMenuOpen(event);
                  } else if (page === "Reviews") {
                    handleReviewsOpen(event);
                  } else {
                    handleCloseNavMenu();
                  }
                }}
                sx={{
                  my: 2,
                  display: "block",
                  fontFamily: "Poppins, Sans-serif",
                  fontSize: "18px",
                  textTransform: "none",
                  color:
                    (page === "Resource" && resourceMenuActive) ||
                    (page === "Company" && companyMenuActive)
                      ? "#0000FF"
                      : "#747474", // Change color if corresponding menu is active
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/*Small Screens Menu*/}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={user}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(user)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          
          <Menu
            id="resources-menu"
            anchorEl={resourceMenuAnchor}
            open={Boolean(resourceMenuAnchor)}
            onClose={handleResourceMenuClose}
          >
            {resourceMenuItems.map((item) => (
              <MenuItem key={item} onClick={handleResourceMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
          <Menu
            id="company-menu"
            anchorEl={companyMenuAnchor}
            open={Boolean(companyMenuAnchor)}
            onClose={handleCompanyMenuClose}
          >
            {companyMenuItems.map((item) => (
              <MenuItem
                key={item}
                onClick={() => {
                  handleCompanyMenuClose();
                  if (item === "Contact Us") {
                    router.push("/contact");
                  } else if (item === "About Us") {
                    router.push("/about");
                  } else if (item === "Careers") {
                    router.push("/career");
                  }
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
