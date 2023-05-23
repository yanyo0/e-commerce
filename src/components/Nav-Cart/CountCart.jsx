import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function CountCart({ onAdd, stock }) {
  const [count, setCount] = useState(1);

  const addCount = () => {
    if (count + 1 <= stock) setCount(count + 1);
  };

  const subtractCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" color="primary" onClick={subtractCount}>
          -
        </Button>
        <Typography variant="subtitle1" color="primary">
          {count}
        </Typography>
        <Button variant="outlined" color="primary" onClick={addCount}>
          +
        </Button>
      </Box>
      <Button
        fullWidth
        sx={{ bgcolor: "primary.light" }}
        variant="contained"
        onClick={() => onAdd(count)}
      >
        <LocalMallIcon style={{ marginRight: 10 }} /> Agregar
      </Button>
    </>
  );
}
