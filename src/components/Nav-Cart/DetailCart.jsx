import {
  Container,
  Grid,
  CardMedia,
  Typography,
  Hidden,
  Box,
  IconButton,
  Button,
  Card,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

export default function DetailCart({
  addCountProduct,
  removeCountProduct,
  id,
  stock,
  marca,
  modelo,
  img,
  precio,
  count,
  color,
  deleteProduct,
}) {
  return (
    <Container
      maxWidth="false"
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Card
        sx={{ width: "100%", bgcolor: "secondary.light", p: 2, marginTop: 4 }}
      >
        <Grid container padding={0}>
          <Grid item xs={12} md={6} sx={{ marginTop: 1, marginBottom: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={3}>
                <CardMedia
                  sx={{ height: "100%", width: "100%" }}
                  image={img}
                  title={modelo}
                />
              </Grid>

              <Grid item xs={9} md={8}>
                <Typography variant="subtitle1" color="secondary.contrastText">
                  {marca}
                </Typography>

                <Typography variant="h6">{modelo}</Typography>

                <Typography variant="subtitle1" color="secondary">
                  {color}
                </Typography>

                <Button
                  variant="outlined"
                  size="medium"
                  onClick={() => deleteProduct(id)}
                >
                  ELIMINAR PRODUCTO
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ marginTop: 3 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Grid container spacing={2}>
              <Grid item xs={4} textAlign={"center"}>
                <Box
                  sx={{
                    width: "auto",
                    p: 0,
                    border: "1px solid gray",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    aria-label="remove"
                    onClick={() => removeCountProduct(id, count)}
                  >
                    <RemoveIcon color="primary" />
                  </IconButton>

                  <Typography variant="subtitle1">{count}</Typography>

                  <IconButton
                    aria-label="add"
                    onClick={() => addCountProduct(id, count, stock)}
                  >
                    <AddIcon color="primary" />
                  </IconButton>
                </Box>

                <Typography
                  variant="subtitle2"
                  color="secondary.contrastText"
                  sx={{ textAlign: "center", m: 1 }}
                >
                  {stock} disponibles
                </Typography>
              </Grid>

              <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  ${precio * count}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
