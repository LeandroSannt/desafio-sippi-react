import React from "react";
import Head from '../../components/header';
import {Container} from './styles'


const NotFound: React.FC = () => {
  return(
    <Container>
    <Head/>
      <div className="notfound">
        <h1>Pagina em desenvolvimento</h1>
      </div>
    </Container>
  )
}

export default NotFound
