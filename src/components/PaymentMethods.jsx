import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
  Card,
  CardContent,
  Container,
  Button,
  Box,
} from "@mui/material";
import React, { useContext } from "react";
import { LocalMallContext } from "../context/LocalMallContext";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function PaymentMethods() {
  const { buy, addMethod } = useContext(LocalMallContext);
  const [value, setValue] = useState("");
  const [send, setSend] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendForm = (e) => {
    e.preventDefault();
    if(value !== ""){
      setSend(true);
      Swal.fire({
        position: "center",
        icon: "success",
        background: "black",
        title: `Los datos se cargaron correctamente `,
        showConfirmButton: false,
        timer: 1900,
      });
    }
    
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "79vh",
        width: 1,
        p: 3,
        bgcolor: "secondary.light",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        color="primary"
        sx={{ textAlign: "center", p: 1, mt: 1 }}
      >
        Medios de pago
      </Typography>

      <Box
        component="form"
        onSubmit={sendForm}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "44%", color: "primary" },
          width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', 
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ width: "100%", p: 1 }}>
          <FormLabel
            id="PaymentMethods"
            sx={{ color: "primary.main", textAlign: "center" }}
          >
            Elija una opción
          </FormLabel>
          <RadioGroup
            aria-labelledby="PaymentMethods"
            defaultValue="efectivo"
            name="radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Card sx={{ width: "80%", height: 50, mt: 2, p: 1 }}>
              <CardContent sx={{ p: 1 }}>
                <FormControlLabel
                  value={"Efectivo"}
                  control={<Radio />}
                  label="Efectivo"
                />
              </CardContent>
            </Card>
            <Card sx={{ width: "80%", height: 50, mt: 2, p: 1 }}>
              <CardContent sx={{ p: 1 }}>
                <FormControlLabel
                  value={"Tarjeta"}
                  control={<Radio />}
                  label="Tarjeta"
                />
              </CardContent>
            </Card>
            <Card sx={{ width: "80%", height: 50, mt: 2, p: 1 }}>
              <CardContent sx={{ p: 1 }}>
                <FormControlLabel
                  value={"Tranferencia"}
                  control={<Radio />}
                  label="Tranferencia"
                />
              </CardContent>
            </Card>
          </RadioGroup>
        </FormControl>
        <Button
          variant="outlined"
          size="large"
          sx={{ mt: 3, alignSelf: "flex-end" }}
          type="submit"
          onClick={() => addMethod(value)}
        >
          Cargar Datos
        </Button>
      </Box>
      {send ? (
        <Link to={'/FinishBuy'} style={{alignSelf: "flex-end"}}>
        <Button
         color="success"
          variant="contained"
          size="large"
          sx={{ mt: 3, alignSelf: "flex-end" }}
          type="submit"
          onClick={() => buy()}
        >
          Finalizar compra
        </Button>
        </Link>
      ) : (
        ""
      )}
    </Container>
  );
}
