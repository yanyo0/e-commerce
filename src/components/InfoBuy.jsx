import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormBuySend from "./FormBuySend";
import FormBuyWithdraw from "./FormBuyWithdraw";
import { useState } from "react";

export default function InfoBuy() {
  const [methosSend, setMethosSend] = useState(true);

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "85vh",
        width: 1,
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        p: 1,
        m: 0,
      }}
    >
     <Typography variant="h4" color="primary" sx={{mt: 1, mb:6}}>
               Seleccione forma de envio
              </Typography>
      <Box
        sx={{
          width: "70%",
          height: 100,
          m: 0,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Button
          variant={methosSend ? "contained" : "outlined"}
          sx={{ p: 1, mr: 1 }}
          onClick={() => setMethosSend(true)}
          color="primary"
        >
          <LocalShippingIcon sx={{ mr: 3 }} /> Enviar
        </Button>
        <Button
          variant={methosSend ? "outlined" : "contained" }
          sx={{ p: 1, ml: 1 }}
          onClick={() => setMethosSend(false)}
          color="primary"
        >
          <LocationOnIcon sx={{ mr: 3 }} /> Retirar
        </Button>
      </Box>

      {methosSend ? <FormBuySend /> : <FormBuyWithdraw />}
    </Container>
  );
}
