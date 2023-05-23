import { Container, Typography } from '@mui/material'
import React from 'react'
import img from "../assets/img/gracias1.gif"

export default function FinishBuy() {
  return (
    <Container  maxWidth="false"
    sx={{
      minHeight: "85vh",
      width: 1,
      p: 4,
      m: 0,
      bgcolor: "secondary.main",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
        <img src={img} alt="Gracias por su compra" />

        <Typography variant="h5" color="primary" sx={{mt:4}}>
            POR ELEGIRNOS!
        </Typography>
        <Typography variant="h6" color="primary" sx={{mt:4}}>
            Su compra fue exitosa! Estaremos enviando a su email los datos y facturación.
        </Typography>

    </Container>
  )
}
