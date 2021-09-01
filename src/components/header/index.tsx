import React from 'react';

import { IoIosNotifications  } from "react-icons/io";
import {MdSettings,MdKeyboardArrowDown,MdKeyboardArrowRight } from "react-icons/md";
import {Head} from './styles'

const Header: React.FC = () =>{
    return(
        <Head>
          <div className="intro">
              <div className="section">
                <div>Todos os projetos <MdKeyboardArrowRight/></div>
                <div>Projetos <MdKeyboardArrowRight/></div>
                <div>Solicitacoes <MdKeyboardArrowRight/></div>
                <div>Materiais de consumo <MdKeyboardArrowRight/></div>
              </div>
              <h3>Identificação XXX.XXX-SIGLA</h3>
          </div>
          
          <div className="contentUser">
            <IoIosNotifications size={20}/>
            <MdSettings size={20}/>
            <h5>RC</h5>
            <div className='Arrowdown'>
              <div>
                <h4>Leandro Santos</h4>
                <span>Coordenador</span>
              </div>
              <MdKeyboardArrowDown size={20}/>
            </div>
          </div>
      </Head>
    )
}

export default Header