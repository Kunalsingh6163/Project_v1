'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Home','Case Study', 'About Us','Career','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Appbar() {
  const [user, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar sx={{background:"linear-gradient(to bottom,#77E7FF,#87D3F333)"}} elevation={0}>
      <Container maxWidth={false}  >
        <Toolbar sx={{padding:'0'}}>
        <Avatar alt="Logo" src="Logo.svg" sx={{ marginRight: 2, borderRadius:0, width:75, height:75}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,              
              fontFamily: 'Poppins,Sans-serif',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: '#FC6F6F' }}>inte</span>
            <span style={{ color: '#CD0606' }}>ME</span>
            <span style={{ color: '#21EA00' }}>gencePerk</span>
          </Typography>
            
            <Box sx={{flexGrow:1}}/>
          <Box sx={{flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={user}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(user)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} > 
                  <Typography textAlign="center">{page}</Typography>

                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{my:2 , color: '#747474',display:'block', fontFamily:'Poppins,Sans-serif', fontSize:18, fontWeight:"400",boxShadow:1 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
