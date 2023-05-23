import React, { useContext, useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import CountCart from "../Nav-Cart/CountCart";
import { LocalMallContext } from "../../context/LocalMallContext";
import Swal from "sweetalert2";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DetailCard() {
  const [oneProduct, setOneProduct] = useState({});
  const { id, nameCategory } = useParams();

  useEffect(() => {
    const load = async () => {
      const docProduct = await doc(db, nameCategory, id);
      const data = await getDoc(docProduct);
      setOneProduct({ ...data.data(), id: data.id });
    };

    load();
  }, [id]);

  const { addProduct, localMall } = useContext(LocalMallContext);

  const addProductParameter = (count) => {
    addProduct({ ...oneProduct, cantidad: count , descripcion: "", category: nameCategory });

    Swal.fire({
      position: "center",
      icon: "success",
      background: "black",
      title: `Agrego ${count} productos `,
      showConfirmButton: false,
      timer: 1800,
    });
  };

  const onAdd = (count) => {
    const index = localMall.findIndex((item) => item.id === oneProduct.id);
    if (index !== -1) {
      if (localMall[index].cantidad + count > oneProduct.stock) {
        Swal.fire({
          position: "center",
          icon: "error",
          background: "black",
          title: "Oops... !",
          text: "No disponemos de stock suficiente",
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "ok",
        });
      } else {
        addProductParameter(count);
      }
    } else {
      addProductParameter(count);
    }
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        width: 1,
        p: 2,
        bgcolor: "secondary.light",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: 500, maxWidth: 500, bgcolor: "secondary.main" }}>
        <CardHeader style={{ color: "white" }} title={oneProduct.modelo} />
        <CardMedia
          component="img"
          height="250"
          image={oneProduct.img}
          alt={oneProduct.modelo}
        />
        <CardContent>
          <Typography variant="h5" color="primary">
            {oneProduct.marca}
          </Typography>
          <Typography variant="subtitle2" color="secondary.contrastText">
            {oneProduct.deporte}
          </Typography>
          <Typography variant="subtitle2" color="secondary.contrastText">
            Color : {oneProduct.color}
          </Typography>
          <Typography variant="subtitle2" color="secondary.contrastText">
            Genero: {oneProduct.genero}
          </Typography>
          <Typography variant="h6" color="primary">
            Precio: $ {oneProduct.precio}
          </Typography>
          <Typography variant="subtitle2" color="gray">
            {oneProduct.stock} disponibles
          </Typography>

          <CountCart onAdd={onAdd} stock={oneProduct.stock} />
        </CardContent>
        <CardActions disableSpacing>
          <Typography color="secondary.contrastText" paragraph>
            Descripción
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon color="primary" />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography color="secondary.contrastText">
              {oneProduct.descripcion}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
}
