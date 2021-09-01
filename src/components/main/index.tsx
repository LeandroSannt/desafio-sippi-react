import React from 'react';
import {Container,Sidebar} from './styles'
import {SidebarLink} from '../../components/SidebarLink'

import {  IoMdMenu  } from "react-icons/io";
import { FaBell  } from "react-icons/fa";
import { AiFillHome  } from "react-icons/ai";
import { MdPersonAdd,MdAccountBalance,MdSettings} from "react-icons/md";
import { HiFolderDownload} from "react-icons/hi";
import { FiHelpCircle} from "react-icons/fi";
import sippilogo from '../../assets/sippi.svg'

const Main: React.FC = () => {
  return ( 
    <Container>

      <Sidebar>
      <div className="logo">
        <img src={sippilogo} alt="sippi" />
      </div>
      <ul>
        <IoMdMenu size={25} className="menu"/>
        <SidebarLink icon={AiFillHome}> Inico </SidebarLink>
        <SidebarLink icon={MdAccountBalance }> Propostas </SidebarLink>
        <SidebarLink icon={HiFolderDownload}> Projetos </SidebarLink>
        <SidebarLink icon={MdPersonAdd}> Pessoal </SidebarLink>
        <SidebarLink icon={FaBell}> Homologação </SidebarLink>  
      </ul>

    <div>
      <div className="footerSidebar">
        <SidebarLink className="linebottom" icon={MdSettings}> Configurações </SidebarLink>
        <SidebarLink className="linebottom" icon={FiHelpCircle}> Inico </SidebarLink>
      </div>
      <div className="privacity">
        <span>Privacidade</span>
        <span>Termos</span>
      </div>
    </div>

      </Sidebar>

    </Container>
  )
}

export default Main
