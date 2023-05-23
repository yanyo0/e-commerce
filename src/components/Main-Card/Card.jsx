import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { CardHeader } from "@mui/material";

export default function ActionAreaCard({
  id,
  modelo,
  img,
  precio,
  coleccion,
  marca,
}) {
  return (
    <Card
      sx={{
        height: 350,
        maxWidth: 350,
        width: 250,
        mr: 5,
        ml: 5,
        mt: 3,
        mb: 3,
        bgcolor: "secondary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={`/DetailCard/${coleccion}/${id}`}
        style={{ textDecoration: "none" }}
      >
        <CardHeader
          title={modelo}
          sx={{ mt: 3, color: "primary.main", p: 1, textAlign: "center" }}
        ></CardHeader>
      </Link>
      <CardActionArea>
        <Link
          to={`/DetailCard/${coleccion}/${id}`}
          style={{ textDecoration: "none" }}
        >
          <CardMedia component="img" height="160" image={img} alt={modelo} />
        </Link>

        <CardContent sx={{ p: 2 }}>
          <Typography variant="subtitle1" color="secondary.light">
            {marca}
          </Typography>

          <Typography variant="subtitle1" color="secondary.contrastText">
            Precio: $ {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
