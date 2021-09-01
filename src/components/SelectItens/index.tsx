import React from 'react';
import SidebarLink from '../SidebarLink';
import { FiBarChart2  } from "react-icons/fi";
import { BsGraphUp ,BsPersonPlusFill } from "react-icons/bs";
import { ImEqualizer, ImTicket  } from "react-icons/im";
import { FaCalendarDay  } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import {Link} from 'react-router-dom'

import {Container} from './styles'

const SelectItens:React.FC = () =>{

    return(
        <Container>
          <Link to='not-found'>
            <SidebarLink icon={FiBarChart2}> Recursos <br/> humanos</SidebarLink>
          </Link>

          <Link to='not-found'>
            <SidebarLink icon={BsGraphUp}> Material de <br/> Consumo </SidebarLink>
          </Link>

          <Link to='not-found'>
            <SidebarLink icon={ImEqualizer}> Equipamento </SidebarLink>
          </Link>

          <Link to='not-found'>
            <SidebarLink icon={BsPersonPlusFill}> Serviço de <br/> terceiros </SidebarLink>
          </Link>

          <Link to='not-found'>
            <SidebarLink icon={FaCalendarDay}> Diarias </SidebarLink>
          </Link>

          <Link to='not-found'>
            <SidebarLink icon={ImTicket}> Passagens </SidebarLink>
          </Link>

          <Link to='not-found'>
            <SidebarLink icon={HiAcademicCap}> Outras <br/> Despesas </SidebarLink>
          </Link>


        </Container>
    )
}

export default SelectItens;
