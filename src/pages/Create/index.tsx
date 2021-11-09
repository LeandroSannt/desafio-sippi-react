/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useRef, useState } from "react";
import { Container } from "./styles";
import Header from "../../components/header";
import MacroEntrega from "../../components/Macroentregas";

import PurchaseForm from "../../components/PurchaseForm";

const arr = ["entrega 1", "entrega 2", "entrega 3"];

const Create: React.FC = () => {
  const [perc, usePerc] = useState(2);
  return (
    <Container>
      <Header />
      <MacroEntrega deliverables={arr} title="teste" duration={50} />
    </Container>
  );
};

export default Create;
