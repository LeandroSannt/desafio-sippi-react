import React, {ButtonHTMLAttributes} from 'react';
import {Container} from './styles'
import {IconBaseProps} from 'react-icons'

interface AncoraProps extends ButtonHTMLAttributes<HTMLInputElement>{

    icon:React.ComponentType<IconBaseProps>;
}

export const SidebarLink: React.FC<AncoraProps> = ({icon:Icon,children,...rest}) =>{
    return(
       <Container type="button" {...rest}>
        <Icon size={20}/>
        {children}
       </Container>
    )
}

export default SidebarLink;