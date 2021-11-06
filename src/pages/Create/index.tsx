/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useRef, useState } from "react";
import { Container } from "./styles";
import Header from "../../components/header";
import MacroEntrega from "../../components/Macroentregas";

import GraficoPizza from "../../components/graficoPizza";

const arr = ["entrega 1", "entrega 2", "entrega 3"];

const Create: React.FC = () => {
  const [perc, usePerc] = useState(2);
  return (
    <Container>
      <Header />
      <MacroEntrega
        deliverables={arr}
        title={"titulo teste de macro entrega"}
        duration={3.5}
      />
    </Container>
  );
};

export default Create;
