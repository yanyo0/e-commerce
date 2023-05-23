import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export default function LogOut({variant, color}) {

  const { logout } = useAuth0();

  return (
    <Button color={color} variant={variant} onClick={() => logout({returnTo: window.location.origin})}>Log Out</Button>
  );
}
