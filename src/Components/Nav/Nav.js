import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Home", "VAGABOND", "Mailing list"];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        <a href="#home">
          <ListItem key={navItems[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", fontFamily: "MonumentExtendedReg" }}
            >
              <ListItemText
                primary={navItems[0]}
                sx={{
                  fontFamily: "MonumentExtendedReg",
                }}
              />
            </ListItemButton>
          </ListItem>
        </a>
        <a href="#vagabondStream">
          <ListItem key={navItems[1]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", fontFamily: "MonumentExtendedReg" }}
            >
              <ListItemText
                primary={navItems[1]}
                sx={{
                  fontFamily: "MonumentExtendedReg",
                }}
              />
            </ListItemButton>
          </ListItem>
        </a>
        <a href="https://mailchi.mp/6f1d07f00211/mailing-list" target="_blank">
          <ListItem key={navItems[2]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", fontFamily: "MonumentExtendedReg" }}
            >
              <ListItemText
                primary={navItems[2]}
                sx={{
                  fontFamily: "MonumentExtendedReg",
                }}
              />
            </ListItemButton>
          </ListItem>
        </a>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "black",
          justifyContent: "space-between",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <a href="#home">
              <Button
                key={navItems[0]}
                sx={{ color: "#fff", fontFamily: "AkiraExpanded" }}
              >
                {navItems[0]}
              </Button>
            </a>

            <a href="#vagabondStream">
              <Button
                key={navItems[1]}
                sx={{ color: "#fff", fontFamily: "AkiraExpanded" }}
              >
                {navItems[1]}
              </Button>
            </a>
            <a
              href="https://mailchi.mp/6f1d07f00211/mailing-list"
              target="_blank"
            >
              <Button
                key={navItems[2]}
                sx={{ color: "#fff", fontFamily: "AkiraExpanded" }}
              >
                {navItems[2]}
              </Button>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
              color: "white",
              fontFamily: "AkiraExpanded",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Nav;
