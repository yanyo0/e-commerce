import React, { useContext } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Badge } from "@mui/material";
import { LocalMallContext } from "../../context/LocalMallContext";

export default function Cart() {
  const { getTotalProducts } = useContext(LocalMallContext);
  return (
    <Badge color="success" badgeContent={getTotalProducts()} showZero>
      <LocalMallIcon />
    </Badge>
  );
}
