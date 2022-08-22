import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Mail } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "baseline",
    gap: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Sohad Dev
        </Typography>
        <LocalFloristIcon
          sx={{
            display: { xs: "block", lg: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail
              sx={{ width: { xs: 20, sm: 30 }, height: { xs: 20, sm: 30 } }}
            />
          </Badge>
          <Badge badgeContent={+99} color="error">
            <NotificationsIcon
              sx={{ width: { xs: 20, sm: 30 }, height: { xs: 20, sm: 30 } }}
            />
          </Badge>
          <Avatar
            alt="Emma Watson"
            src="https://img.chip.com.tr/rcman/Cw940h529q95gm/images/content/2014101315195557418.jpg"
            sx={{ width: 40, height: 40 }}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            alt="Emma Watson"
            src="https://img.chip.com.tr/rcman/Cw940h529q95gm/images/content/2014101315195557418.jpg"
            sx={{ width: 35, height: 35 }}
          />
          <Typography variant="span">Sohad Almadhoon</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout  {<LogoutIcon sx={ {fontSize:20,marginLeft:1}} />}</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
