import React, { useCallback, useRef, useState } from "react";
import { Container } from "./styles";
import Header from "../../components/header";

import Tabs from "../../components/Tabs";

const Create: React.FC = () => {
  return (
    <Container>
      <Header />
      <Tabs
        subTabs={false}
        main={["primeiro", "segundo", "terceiro", "quarto"]}
        //subMain={["primeiro sub", "segundo sub", "terceiro sub", "quarto sub"]}
        component={[
          <div>primeiro componente</div>,
          <div>segundo componente</div>,
          <div>terceiro componentes</div>,
          <div>quarto componentes</div>,
        ]}
      />
    </Container>
  );
};

export default Create;
