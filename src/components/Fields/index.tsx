import React from 'react';

import {Container, CardFields} from './styles'
import SelectItens from '../SelectItens'

const Fields: React.FC = ({children,}) => {
       
    return (
      <Container>
        <SelectItens/>
        <h2>Gerar pedido de compra</h2>
        <CardFields className= "card-pedidos" >{children}</CardFields>
      </Container>
    )
}

export default Fields
