import * as React from "react";
import { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import Swal from "sweetalert2";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import { LocalMallContext } from "../context/LocalMallContext";
import { useContext } from "react";

export default function FormBuySend() {

  const { addInfoContact, setTypeSend} = useContext(LocalMallContext)

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [direction, setDirection] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [codeP, setCodeP] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");


  const [infoContact, setInfoContact] = useState({})


  const [ formSend, setFormSend] = useState(false)



  const [errorName, setErrorName] = useState({ error: false, message: "" });

  const [errorSurname, setErrorSurname] = useState({
    error: false,
    message: "",
  });

  const [errorDirection, setErrorDirection] = useState({
    error: false,
    message: "",
  });

  const [errorCity, setErrorCity] = useState({ error: false, message: "" });

  const [errorProvince, setErrorProvince] = useState({
    error: false,
    message: "",
  });

  const [errorCodeP, setErrorCodeP] = useState({ error: false, message: "" });

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

    !/(?=.*[a-z A-Z])(?=.*[0-9])/g.test(direction)
      ? (setErrorDirection({ error: true, message: "Ingrese calle y número" }),
        (error = true))
      : setErrorDirection({ error: false, message: "" });

    !/(?=.*[a-z A-Z]+)[a-zA-Z]/g.test(city)
      ? (setErrorCity({ error: true, message: "No debe contener numeros" }),
        (error = true))
      : setErrorCity({ error: false, message: "" });

    !/(?=.*[a-z A-Z]+)[a-zA-Z]/g.test(province)
      ? (setErrorProvince({ error: true, message: "No debe contener numeros" }),
        (error = true))
      : setErrorProvince({ error: false, message: "" });

    !/(?=.*[0-9]+)[0-9]{4,4}/g.test(codeP)
      ? (setErrorCodeP({ error: true, message: "Debe ingresar 4 numeros" }),
        (error = true))
      : setErrorCodeP({ error: false, message: "" });

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
    setTypeSend("Enviar")
    validateForm();
    if (!validateForm()) {
      setInfoContact({name, surname, direction, city, province, codigoPostal: codeP, email, tel });
      Swal.fire({
        position: "center",
        icon: "success",
        background: "black",
        title: `Los datos se cargaron correctamente `,
        showConfirmButton: false,
        timer: 1900,
      });
      setFormSend(true)
      
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
        "& .MuiTextField-root": { m: 1, width: "44%", color: "primary" },
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
          id="direccion"
          label="Dirección"
          error={errorDirection.error}
          helperText={errorDirection.message}
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        />

        <TextField
          required
          id="ciudad"
          label="Ciudad"
          type="text"
          error={errorCity.error}
          helperText={errorCity.message}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="provincia"
          label="Provincia"
          type="text"
          error={errorProvince.error}
          helperText={errorProvince.message}
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />
        <TextField
          required
          id="codigoPostal"
          label="Codigo Postal"
          type="number"
          error={errorCodeP.error}
          helperText={errorCodeP.message}
          value={codeP}
          onChange={(e) => setCodeP(e.target.value)}
        />
      </div>
      <div>
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

        <Link to={'/infoBuy/Send'}>
        {formSend ? <Button onClick={() => loadInfoContact(infoContact)} color="success" variant="contained" size="large" sx={{ mt: 3, ml:3, alignSelf: "flex-end" }}>
          CONTINUAR  <ArrowForwardIosIcon sx={{ml:1}}/> </Button> : "" }
        </Link>
      </div>
    </Box>
  );
}
