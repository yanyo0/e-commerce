import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import ActionAreaCard from "./Card";
import { Container } from "@mui/material";
import GridLoader from "react-spinners/GridLoader";
import { useParams } from "react-router-dom";

export default function ContainCard() {
  let [loading, setLoading] = useState(true);

  const [products, setProducts] = useState(null);

  const { nameCategory, section } = useParams();

  const paintData = (product, category) => (
    <ActionAreaCard
      key={product.id}
      coleccion={category}
      id={product.id}
      img={product.img}
      modelo={product.modelo}
      marca={product.marca}
      color={product.color}
      deporte={product.deporte}
      genero={product.genero}
      precio={product.precio}
      stock={product.stock}
    />
  );

  useEffect(() => {
    const load = async () => {
      let accesorios, indumentaria, calzado;

      try {
        const accesColletion = collection(db, "Accesorios");

        if (section && nameCategory === "Accesorios") {
          const filterAccsorios = query(
            accesColletion,
            where("tipo", "==", section)
          );
          const data = await getDocs(filterAccsorios);
          accesorios = data.docs.map((item) => {
            return {
              ...item.data(),
              id: item.id,
            };
          });
        } else {
          const docsAcces = await getDocs(accesColletion);
          accesorios = docsAcces.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
        }

        const indumColletion = collection(db, "Indumentaria");

        if (section && nameCategory === "Indumentaria") {
          const filterIndumentaria = query(
            indumColletion,
            where("tipo", "==", section)
          );
          const data = await getDocs(filterIndumentaria);
          indumentaria = data.docs.map((item) => {
            return {
              ...item.data(),
              id: item.id,
            };
          });
        } else {
          const docsIndum = await getDocs(indumColletion);
          indumentaria = docsIndum.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
        }

        const calzadoColletion = collection(db, "Calzado");

        if (section && nameCategory === "Calzado") {
          const filterCalzado = query(
            calzadoColletion,
            where("genero", "==", section)
          );
          const data = await getDocs(filterCalzado);
          calzado = data.docs.map((item) => {
            return {
              ...item.data(),
              id: item.id,
            };
          });
        } else {
          const docsCalzado = await getDocs(calzadoColletion);
          calzado = docsCalzado.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
        }

        setProducts({ calzado, indumentaria, accesorios });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    load();
  }, [nameCategory, section]);

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: "85vh",
        width: 1,
        p: 4,
        m: 0,
        bgcolor: "secondary.light",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {products &&
        nameCategory === "Calzado" &&
        products.calzado.map((product) => paintData(product, nameCategory))}

      {products &&
        nameCategory === "Indumentaria" &&
        products.indumentaria.map((product) =>
          paintData(product, nameCategory)
        )}

      {products &&
        nameCategory === "Accesorios" &&
        products.accesorios.map((product) => paintData(product, nameCategory))}

      <GridLoader
        margin={2}
        color="#42d636"
        size={15}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={{ marginTop: "50px" }}
      />
    </Container>
  );
}
