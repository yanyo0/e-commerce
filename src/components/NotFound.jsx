import React from 'react'
import notFound from "../assets/img/yalantis-interactive-404.gif"
import { Container } from '@mui/material';
import PacmanLoader from "react-spinners/PacmanLoader";

export default function NotFound() {
  return (
    <Container maxWidth='false' sx={{ width: 1, bgcolor: 'secondary.light', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={notFound} />
    </Container>
  )
}
