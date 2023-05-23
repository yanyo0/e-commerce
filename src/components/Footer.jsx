import React from "react";
import { Hidden, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMdMail,
  IoIosClock,
} from "react-icons/io";
import { IoLocation } from "react-icons/io5";

export default function Footer() {
  return (
    <Toolbar
      sx={{
        bgcolor: "secondary.main",
        p: 1,
        display: "flex",
        fleDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      <Hidden smDown>
        <Box>
          <Typography variant="subtitle1" color="secondary.contrastText">
            Ubicación
          </Typography>
          <Typography variant="subtitle2" color="primary">
            <IoLocation /> Adalandia 123
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" color="secondary.contrastText">
            Horarios
          </Typography>
          <Typography variant="subtitle2" color="primary">
            <IoIosClock /> 10:00 a 20:00
          </Typography>
        </Box>
      </Hidden>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1" color="secondary.contrastText">
          Contacto
        </Typography>
        <Box>
          <Typography variant="subtitle2" color="primary">
            <IoLogoInstagram /> @AdaSport
          </Typography>

          <Typography variant="subtitle2" color="primary">
            <IoLogoWhatsapp /> 1234567890
          </Typography>

          <Typography variant="subtitle2" color="primary">
            <IoMdMail /> adasport@adasport.com
          </Typography>
        </Box>
      </Box>
    </Toolbar>
  );
}
