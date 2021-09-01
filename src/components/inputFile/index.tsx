import React, {InputHTMLAttributes} from 'react';
import {Container} from './styles'

import {BiUpload} from 'react-icons/bi'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputFile: React.FC<InputProps> = ({name,children, ...rest}) => {
  return (
    <>
    <Container type="file" placeholder="enviar arquivos"  {...rest} >
      
    {children}
    </Container>

     <BiUpload size={25}/>
      </>
  )
}

export default InputFile
