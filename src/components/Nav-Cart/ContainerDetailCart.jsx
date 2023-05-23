import { Container, Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import { LocalMallContext } from "../../context/LocalMallContext";
import { useContext } from "react";
import DetailCart from "./DetailCart";
import img from "../../assets/img/Carrito-Vacio.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import  Login  from "./Login";

export default function ContainerDetailCart() {

  const {
    localMall,
    getTotalPriceCart,
    removeCountProduct,
    addCountProduct,
    deleteProduct,
    cleanCart,
  } = useContext(LocalMallContext);

  const { isAuthenticated } = useAuth0()



  const paintDetailCart = () => {
    if (localMall.length !== 0) {
      return (
        <>
          <Grid container marginTop={4} marginBottom={4}>
            <Grid item md={3}></Grid>
            <Grid item md={3}></Grid>

            <Grid item xs={6} md={3} textAlign={"center"}>
              <Typography variant="h5" color="secondary">
                TOTAL A PAGAR 
              </Typography>
            </Grid>

            <Grid item xs={6} md={3} textAlign={"center"}>
              <Typography variant="h5" color="primary">
                $ {getTotalPriceCart()}
              </Typography>
            </Grid>
          </Grid>
        </>
      );
    } else {
      return (
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src={img} alt="carrito vacio" width={350} />
        </Grid>
      );
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {localMall.length !== 0 &&
        localMall.map((product) => (
          <DetailCart
            key={product.id}
            deleteProduct={deleteProduct}
            removeCountProduct={removeCountProduct}
            addCountProduct={addCountProduct}
            id={product.id}
            stock={product.stock}
            img={product.img}
            marca={product.marca}
            modelo={product.modelo}
            count={product.cantidad}
            color={product.color}
            precio={product.precio}
          />
        ))}

      {paintDetailCart()}
      <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginRight: 6,
              marginTop: 3,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={() => cleanCart()}
              sx={{mr: '10%'}}
            >
              VACIAR <LocalMallIcon fontSize="small" sx={{ marginLeft: 2 }} />
            </Button>

            {/* { isAuthenticate ? <Link to={'/infoBuy'}> :  loginWithRedirect() } */}

          { isAuthenticated ? 
            <Link to={'/infoBuy'}>
            <Button
              variant="outlined"
              color="primary"
            >
              COMPRAR <LocalMallIcon fontSize="small" sx={{ marginLeft: 2 }} />
            </Button>
            </Link>
            : <Login variant={"outlined"} color={"primary"}  />} 
          </Box>
    </Container>
  );
}
