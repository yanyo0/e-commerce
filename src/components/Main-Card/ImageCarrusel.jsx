import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

export default function ImageCarrusel({ array, colection }) {
  return (
    <ImageList
      sx={{ width: "100%", height: "60vh" }}
      variant="woven"
      cols={colection.length}
      gap={8}
    >
      {array &&
        colection.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.modelo}
              loading="lazy"
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
}
