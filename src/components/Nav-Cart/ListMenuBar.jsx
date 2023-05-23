import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { TbShoe } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { BiFootball } from "react-icons/bi";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItemsMenuBar from "./ListItemsMenuBar";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import LogOut from "./LogOut";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ListMenuBar = () => {

  const { isAuthenticated, user } = useAuth0()
  return (
    <List
      component="nav"
      sx={{ bgcolor: "primary.light", color: "secondary.contrastText" }}
    >
      {isAuthenticated ? <ListItemsMenuBar name={`Hola ! ${user.given_name}`} avatar={user.picture} /> : ""}
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="calzado-content"
          id="calzado-header"
          sx={{ bgcolor: "primary.light", color: "secondary.contrastText" }}
        >
          <Link
            to={"/category/Calzado"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Calzado"} icon={<TbShoe />} />
          </Link>
        </AccordionSummary>

        <AccordionDetails>
          <Link
            to={"/category/Calzado/Hombre"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Hombre"} icon={null} />
          </Link>

          <Link
            to={"/category/Calzado/Mujer"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Mujer"} icon={null} />
          </Link>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="indumentaria-content"
          id="indumentaria-header"
          sx={{ bgcolor: "primary.light", color: "secondary.contrastText" }}
        >
          <Link
            to={"/category/Indumentaria"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Indumentaria"} icon={<GiClothes />} />
          </Link>
        </AccordionSummary>

        <AccordionDetails>
          <Link
            to={"/category/Indumentaria/shorts"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Shorts"} icon={null} />
          </Link>

          <Link
            to={"/category/Indumentaria/remera"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Remeras"} icon={null} />
          </Link>

          <Link
            to={"/category/Indumentaria/campera"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Camperas"} icon={null} />
          </Link>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="accesorios-content"
          id="accesorios-header"
          sx={{ bgcolor: "primary.light", color: "secondary.contrastText" }}
        >
          <Link
            to={"/category/Accesorios"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Accesorios"} icon={<BiFootball />} />
          </Link>
        </AccordionSummary>

        <AccordionDetails>
          <Link
            to={"/category/Accesorios/pelota"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Pelotas"} icon={null} />
          </Link>

          <Link
            to={"/category/Accesorios/bolso"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Bolsos"} icon={null} />
          </Link>

          <Link
            to={"/category/Accesorios/mochila"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Mochilas"} icon={null} />
          </Link>

          <Link
            to={"/category/Accesorios/medias"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemsMenuBar name={"Medias"} icon={null} />
          </Link>
        </AccordionDetails>
      </Accordion>

      <Divider />

      <ListItemsMenuBar name={isAuthenticated ? <LogOut variant={"text"} color={"secondary"} /> : <Login variant={"text"} color={"secondary"} /> } icon={<AccountCircleIcon sx={{ml:2}} />} />
    </List>
  );
};
