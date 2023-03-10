import React from "react";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <nav style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
        <a href="Home">Home</a>
        <a href="Sobre">Sobre</a>
        <a href="Login">Login</a>
      </nav>
    </Container>
  );
};
