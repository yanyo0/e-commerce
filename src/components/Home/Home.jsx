import React from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import GridLoader from "react-spinners/GridLoader";
import { Link } from "react-router-dom";
import ImageCarrusel from "../Main-Card/ImageCarrusel";

export default function Home() {
  let [loading, setLoading] = useState(true);

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const accesColletion = collection(db, "Accesorios");
        const docsAcces = await getDocs(accesColletion);
        const accesorios = docsAcces.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        const indumColletion = collection(db, "Indumentaria");
        const docsIndum = await getDocs(indumColletion);
        const indumentaria = docsIndum.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        const calzadoColletion = collection(db, "Calzado");
        const docsCalzado = await getDocs(calzadoColletion);
        const calzado = docsCalzado.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts({ calzado, indumentaria, accesorios });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    load();
  }, []);
  return (
    <Container
      maxWidth="false"
      sx={{
        width: " 100%",
        minHeight: "85vh",
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <GridLoader
          margin={2}
          color="#42d636"
          size={15}
          loading={loading}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={{ marginTop: "200px" }}
        />
      </div>

      <Carousel sx={{ width: "100%", p: 2 }}>
        <Link to={"/category/Calzado"}>
          {products && (
            <ImageCarrusel array={products} colection={products.calzado} />
          )}
        </Link>

        <Link to={"/category/Indumentaria"}>
          {products && (
            <ImageCarrusel array={products} colection={products.indumentaria} />
          )}
        </Link>

        <Link to={"/category/Accesorios"}>
          {products && (
            <ImageCarrusel array={products} colection={products.accesorios} />
          )}
        </Link>
      </Carousel>
    </Container>
  );
}
