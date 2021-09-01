import React, {useCallback,useRef}  from 'react';
import {Container,Content} from './styles'
import getValidationErrors from '../../utils/getValidationErros'

import Head from '../../components/header';
import Fields from '../../components/Fields'
import Input from '../../components/Input'
import Button from '../../components/Buttons'
import InputFile from '../../components/inputFile'

import {Form} from "@unform/web"
import {FormHandles} from '@unform/core'
import * as Yup from 'yup'


interface CreateOrder{
  nameItem:string;
  amountRequested:number;
  valueAvailable:number;
  justification:string;
  description:string;
  address:string;
}

const Create: React.FC = () => {

  const formRef= useRef<FormHandles>(null)
    
    const handleSubmit= useCallback(async(data:CreateOrder) =>{

        try{

          formRef.current?.setErrors({});
          const schema = Yup.object().shape({
            nameItem:Yup.string().required('Nome obrigatorio'),
            amountRequested:Yup.number().min(0).required('digite um numero'),
            valueAvailable:Yup.number().min(0).required('Digite um valor valido'),
            justification:Yup.string().required('Jusitificativa obrigatoria'),
            description:Yup.string().required('Descrição obrigatoria obrigatoria'),
            address:Yup.string().required('Digite um endereço valido')   
          })
    
          await schema.validate(data,{
            abortEarly:false
          })

          
        }catch(err){
          if(err instanceof Yup.ValidationError){
            const errors = getValidationErrors(err)
            formRef.current?.setErrors(errors);
          }
        }
         
          let arr = []

          arr.push(data)

          localStorage.setItem("orders",JSON.stringify(arr))

          console.log(arr)
        
    },[])   

  return (
    <Container> 
        <Head/>   
        <Fields >
          <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <fieldset>
                <h4>NOME DO ITEM</h4>
                <Input name="nameItem" type="text" />
              </fieldset>

              <div className="fieldset-1">
                <fieldset>
                    <h4>VALOR DISPONIVEL</h4>
                    <Input name="valueAvailable" type="number" />
                </fieldset>

                <fieldset>
                    <h4>VALOR SOLICITADO</h4>
                    <Input name="amountRequested" type="number" />
                </fieldset>
              </div>

              <fieldset className="fieldset-3">
                <h4>ENDEREÇO DE ENTREGA</h4>
                <Input name="address" type="text" />
              </fieldset>

              <div className="textareaField">
                <fieldset>
                  <h4>DESCRIÇÃO DETALHADA DO ITEM</h4>
                  <Input name="description" ></Input>
                </fieldset>

                <fieldset>
                  <h4>JUSTIFICATIVA PARA AQUISIÇÃO</h4>
                  <Input name="justification" type="text" ></Input>
                </fieldset>
              </div>

              <div className="fieldset-4">
                  <fieldset>
                    <h4>UPLOAD DE TERMO DE REFERÊNCIA</h4>
                    <label className="custom-file-upload">
                      <InputFile  name="proposal" type="file"/>
                      <h3>Anexar termo de referencia</h3>
                    </label>
                  </fieldset>

                  <fieldset>
                    <h4>UPLOAD DE PROPOSTA ( OPCIONAL )</h4>
                    <label className="custom-file-upload">
                      <InputFile  name="proposal" type="file"/>
                      <h3>Anexar propostas</h3>
                    </label>
                  </fieldset>
                </div>
            </div>

            <div className="actions">
              <Button type="submit">Cancelar</Button>
              <Button selected type="submit">Cadastrar</Button>
            </div>

          </Form>

          </Content>
        </Fields>  
    </Container> 
  )
}

export default Create
