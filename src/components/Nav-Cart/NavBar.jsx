import React from "react";
import Cart from "./Cart";
import logo from "../../assets/logoAdaSport.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import Login from "./Login"
import { useAuth0 } from "@auth0/auth0-react";
import LogOut from "./LogOut";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);



export default function NavBar({ handleDrawerToggle }) {

 const { isAuthenticated, user } = useAuth0();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Link to={"/"}>
            <img src={logo} alt="Logo Ada Sport" width={120} />
          </Link>

          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
          <Link to={"/DetailCart"}>
            <IconButton aria-label="Cart" color="primary" sx={{ mr: 2 }}>
              <Cart />
            </IconButton>
          </Link>

         
          { isAuthenticated ? <Avatar alt={user.name} src={user.picture} />: <Login variant={"outlined"} color={"primary"}/>}
          
          <Button aria-label="Menu" color="primary">
            <MenuIcon
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            />
          </Button>
        </Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
