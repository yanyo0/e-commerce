import React from "react";
import { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LocalMallContext } from "../context/LocalMallContext";
import { useContext } from "react";

export default function FormBuyWithdraw() {

  const { addInfoContact, setTypeSend} = useContext(LocalMallContext)


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [ formSend, setFormSend] = useState(false)
  const [infoContact, setInfoContact] = useState({})

  const [errorName, setErrorName] = useState({ error: false, message: "" });

  const [errorSurname, setErrorSurname] = useState({
    error: false,
    message: "",
  });

  const [errorDni, setErrorDni] = useState({ error: false, message: "" });

  const [errorEmail, setErrorEmail] = useState({ error: false, message: "" });

  const [errorTel, setErrorTel] = useState({ error: false, message: "" });

  const validateForm = () => {
    let error = false;

    !/(?=.*[a-z A-Z]+)[a-zA-Z]/g.test(name)
      ? (setErrorName({ error: true, message: "No debe contener numeros" }),
        (error = true))
      : setErrorName({ error: false, message: "" });

    !/([a-z A-Z]+)/g.test(surname)
      ? (setErrorSurname({ error: true, message: "No debe contener numeros" }),
        (error = true))
      : setErrorSurname({ error: false, message: "" });

    !/(?=.*[0-9]+)[0-9]{7,8}/g.test(dni)
      ? (setErrorDni({ error: true, message: "Debe contener 7/8 carácteres" }),
        (error = true))
      : setErrorDni({ error: false, message: "" });

    !/^[\w-.]+@[\w-_]+(\.[a-zA-Z]{2,4}){1,2}$/g.test(email)
      ? (setErrorEmail({ error: true, message: "Ingrese un email válido" }),
        (error = true))
      : setErrorEmail({ error: false, message: "" });

    !/(?=.*[0-9]+)[0-9]{11,11}/g.test(tel)
      ? (setErrorTel({
          error: true,
          message: "Ingrese numero con 0 y sin el 15",
        }),
        (error = true))
      : setErrorTel({ error: false, message: "" });

    return error;
  };

  const sendForm = (e) => {
    e.preventDefault();
    validateForm();
    setTypeSend("Retirar")
    if (!validateForm()) {
      setInfoContact({ name, surname, dni , email, tel });
      Swal.fire({
        position: "center",
        icon: "success",
        background: "black",
        title: `Los datos se cargaron correctamente `,
        showConfirmButton: false,
        timer: 1900,
      });
      setFormSend(true);
    }
  };

  const loadInfoContact = (info) => {
    addInfoContact(info)
  };

  return (
    <Box
      component="form"
      onSubmit={sendForm}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45%", color: "primary" },
        width: "80%",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="nombre"
          label="Nombre"
          type="text"
          error={errorName.error}
          helperText={errorName.message}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="apellido"
          label="Apellido"
          type="text"
          error={errorSurname.error}
          helperText={errorSurname.message}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>

      <div>
        <TextField
          required
          id="dni"
          label="D.N.I"
          type="number"
          error={errorDni.error}
          helperText={errorDni.message}
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          f
        />

        <TextField
          required
          id="telefono"
          label="Teléfono"
          type="tel"
          error={errorTel.error}
          helperText={errorTel.message}
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />

        <TextField
          required
          id="email"
          label="Email"
          type="email"
          error={errorEmail.error}
          helperText={errorEmail.message}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
      
        <Button
          type="submit"
          variant="outlined"
          size="large"
          sx={{ mt: 3, alignSelf: "flex-end" }}
        >
          Cargar datos
        </Button>
        
        <Link to={'/infoBuy/PaymentMethods'}>

        {formSend ? <Button onClick={() => loadInfoContact(infoContact)}  color="success" variant="contained" size="large" sx={{ mt: 3, ml:3, alignSelf: "flex-end" }}>
          CONTINUAR  <ArrowForwardIosIcon sx={{ml:1}}/> </Button> : "" }

        </Link>
      </div>
    </Box>
  );
}
