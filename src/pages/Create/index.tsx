/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useRef, useState } from "react";
import { Container } from "./styles";
import Header from "../../components/header";
import ExpenseChart from "../../components/expenseChart";

const arr = ["entrega 1", "entrega 2", "entrega 3", "entrega 4"];
const arr2 = [30, 27, 38, 32];

const Create: React.FC = () => {
  return (
    <Container>
      <Header />
      <ExpenseChart name={arr} value={arr2} />
    </Container>
  );
};

export default Create;
