import styled, { css } from "styled-components";
import { shade } from "polished";

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: inherit;
  border: 0;
  font-size: 12px;
  color: black;

  ${(props) =>
    props.selected &&
    css`
      background: inherit;
      border: 0;
      background: #37a64a;
      color: #fff;
      padding: 16px 16px;
      border-radius: 30px;
      transition: background 200ms;
      font-weight: bold;

      &:hover {
        background: ${shade(0.2, "#37A64A")};
      }
    `}
`;
