import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ArrowBack from "@mui/icons-material/ArrowBack";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Inbox from "../componnents/Inbox.jsx";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import SearchBar from "../componnents/search/SearchBar";
import List from "../componnents/search/ List";
import  "../componnents/Nav.css"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [open, setOpen] = useState(false);
  const [like, setLikes] = useState(false);
  const [messages, setMessage] = useState(false);

  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [inputtext, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [inbox, setInbox] = useState("");

  const handleInbox = (e) => {
    setInbox(e.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={() => handleMenuClose}
    >
      <MenuItem onClick={() => handleMenuClose("/")}>x</MenuItem>
      <MenuItem onClick={() => navigate("/")}></MenuItem>
      <MenuItem onClick={() => navigate("/signup")}>SignUp</MenuItem>
      <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
      <MenuItem onClick={() => navigate("/holder")}>Holder</MenuItem>
      <MenuItem onClick={() => navigate("/scetion")}>Upcoming Dates</MenuItem>
      <MenuItem onClick={() => navigate("/sidebar")}>About</MenuItem>
      <MenuItem onClick={() => navigate("/home")}>Home</MenuItem>
      <MenuItem onClick={() => navigate("/search")}>Search</MenuItem>
      <MenuItem onClick={() => navigate("/displaydata")}>DisplayData</MenuItem>
      <MenuItem onClick={() => navigate("/inbox")}>Inbox</MenuItem>
      <MenuItem onClick={() => navigate("/gallery")}>Gallery</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>

        <p>Messages</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          // onClick={handleToHome(<Link to="/home">Home</Link>) i was trying to connect/link the profile button to the home page}
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className="main-nav">
      <AppBar position="static" style={{ background: "#222" }}>
        <Toolbar>
          <IconButton
            // size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
            style={{ background: "tomato" }}
          >
            <ArrowBack
              style={{ background: "tomato" }}
              onClick={() => navigate("/holder")}
            />
            <Hamburger
              label="Show menu"
              rounded
              size={20}
              toggled={open}
              toggle={setOpen}
              direction="left"
              duration={0.8}
              distance="lg"
              //   color="#4FD1C5"
              easing="ease-in"
              //   hideOutline={false}
              onClick={() => navigate("/inbox")}
            />

            {open && (
              <ul className="modalcontainer">
                {/* <button onClick={() => setOpen(false)}>CloseX</button> */}
                <NavLink to="/signup">
                  <li className="title1">Singup</li>
                </NavLink>

                <NavLink to="login">
                  <li className="title2">Login</li>
                </NavLink>
                <NavLink to="inbox">
                  <li className="title3">Inbox</li>
                </NavLink>
              </ul>
            )}
          </IconButton>

          <Typography
            color="gray"
            noWrap
            component="div"
            variant="h3"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            The Artist App
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon  onChange={(e) => {setInputText(e.target.value)}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {setInputText(e.target.value)}}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={21} color="error">
                <MailIcon onClick={handleInbox} />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
