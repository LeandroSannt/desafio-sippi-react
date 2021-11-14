import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface AncoraProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  selected?: boolean;
}

const Button: React.FC<AncoraProps> = ({
  icon: Icon,
  selected,
  children,
  ...rest
}) => {
  return (
    <Container type="submit" selected={selected} {...rest}>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
};

export default Button;
