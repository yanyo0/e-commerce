import { Button } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login({variant, color}) {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      color={color}
      variant={variant}
      onClick={() => loginWithRedirect()}
     
    >
      login
    </Button>
  );
}
