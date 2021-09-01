import styled , {css}from 'styled-components'
import {shade} from 'polished'

interface ContainerProps{
  selected?: boolean;
}

export const Container = styled.button<ContainerProps>`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    background:inherit;
    border: 0;

      ${props => props.selected && css`
        background:inherit;
        border: 0;
        background: green;
        color: #fff;
        padding:8px 16px;
        border-radius:30px;
        transition: background 200ms;

        &:hover{
        background: ${shade(0.2, 'green')};

        }
      `}       

`
