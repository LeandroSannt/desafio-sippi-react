import styled, {css} from "styled-components";

import Tooltip from '../Tooltip'


interface ContainerProps{
    isFocused:boolean
    isFilled:boolean
    isErrorRed:boolean
  }


export const Container = styled.div<ContainerProps>`

  display: flex;
  align-items: center;

  input{
        ${props => props.isErrorRed && css`
          border:1px solid red !important;
          border
        `}

        //mudar a cor e borda do input
        ${props => props.isFocused && css`
          color:#6e9574;;
          border-color: #6e9574;;
          box-shadow: 0px 0px 4px 0px #6e9574;;
        `}

        ${props => props.isFilled && css`
          color:#6e9574; !important;
        `}

  }

        

    
`

export const Error = styled(Tooltip)`
margin-left: 16px;
height: 20px;
svg{
  margin: 0;
}

span{
  background: #c53030;
  color: #fff;

    &::before{
      border-color: #c53030 transparent;
    }
}
`
