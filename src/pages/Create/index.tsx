import React, { useCallback, useRef, useState } from "react";
import { Container } from "./styles";
import Header from "../../components/header";

import Tabs from "../../components/Tabs";

const Create: React.FC = () => {
  return (
    <Container>
      <Header />
      <Tabs
        main={["teste1", "teste2"]}
        secundary={["teste1 primeira", "teste2 primeira"]}
        component={[<Header />]}
      />
    </Container>
  );
};

export default Create;
