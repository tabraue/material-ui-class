import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import LunchDining from '@mui/icons-material/LunchDining';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setIsMenuOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };
  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: '15px',
        backgroundColor: '#fae5e1',
        color: '#000',
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <LunchDining />
        </IconButton>

        <Menu
          id="basic-menu"
          open={isMenuOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => alert('about us')}
            sx={{
              backgroundColor: '#fae5e1',
            }}
          >
            About us
          </MenuItem>
          <MenuItem
            onClick={() => alert('somewherelse')}
            sx={{
              backgroundColor: '#fae5e1',
            }}
          >
            Somewherelse
          </MenuItem>
        </Menu>

        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          My Header
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
