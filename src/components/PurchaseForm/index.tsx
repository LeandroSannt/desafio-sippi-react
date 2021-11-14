/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useCallback, useRef } from "react";
import styles from "./styles.module.scss";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import Input from "./Input";
import TextArea from "./textArea";
import File from "./file";
import { MdFileUpload } from "react-icons/md";
import Buttom from "./Buttons";

interface PurchaseFormData {
  nameItem: string;
  valueAvailable: string;
  valueSolicited: string;
  adress: string;
  detailDescription: string;
  justification: string;
  term: string;
  proposal: string;
}

const PurchaseForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: PurchaseFormData) => {
    try {
      //inserir o data no post
      return data;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>Gerar pedido de compra</h1>
      <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="text"
          label={"NOME DO ITEM"}
          masks="currency"
          id="oi"
          name="nameItem"
          placeholder="Nome do item"
          className={styles.inputReduzido}
        />
        <div className={styles.containerSecondeInput}>
          <Input
            type="text"
            label={"VALOR DISPONIVEL"}
            name="valueAvailable"
            placeholder="R$ 9.000.00"
          />
          <Input
            type="text"
            label={"VALOR SOLICITADO"}
            name="valueSolicited"
            placeholder="R$ 9.000.00"
          />
        </div>

        <Input
          type="text"
          label={"ENDEREÇO DE ENTREGA"}
          name="address"
          placeholder="Endereço"
        />

        <div className={styles.textarea}>
          <TextArea
            label="DESCRIÇÃO DETALHADA DO ITEM"
            placeholder="Descrição"
            name="detailDescription"
            rows={5}
            cols={50}
          />
          <TextArea
            label="JUSTIFICATIVA PARA AQUISIÇÃO"
            placeholder="Justificativa"
            name="justification"
            rows={5}
            cols={50}
          />
        </div>

        <div className={styles.file}>
          <File
            name="term"
            label={"UPLOAD DE TERMO DE REFÊRENCIA"}
            placeholderfile={"Anexar termo de referencia"}
            icon={<MdFileUpload size={24} />}
          />
          <File
            name="proposal"
            label={"UPLOAD DE PROPOSTA (OPCIONAL)"}
            placeholderfile={"Anexar propostas"}
            icon={<MdFileUpload size={24} />}
          />
        </div>

        <div className={styles.containerButtom}>
          <Buttom disabled>Cancelar</Buttom>
          <Buttom type="submit" selected>
            Cadastrar
          </Buttom>
        </div>
      </Form>
    </div>
  );
};

export default PurchaseForm;
