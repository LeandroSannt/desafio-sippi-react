import React, { useCallback, useRef, useState } from "react";
import { Container } from "./styles";
import Header from "../../components/header";
import MacroEntrega from "../../components/Macroentregas";

const Create: React.FC = () => {
  return (
    <Container>
      <Header />
      <MacroEntrega />
    </Container>
  );
};

export default Create;
