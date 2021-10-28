import React, { useCallback, useRef, useState } from "react";
import { Container } from "./styles";
import Header from "../../components/header";

import Tabs from "../../components/Tabs";

const Create: React.FC = () => {
  return (
    <Container>
      <Header />
      <Tabs title={["teste1", "teste2"]} novoComp={[<Header />]} />
    </Container>
  );
};

export default Create;
