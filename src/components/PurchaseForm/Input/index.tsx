import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import "./input.module.scss";
import style from "./input.module.scss";

import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  masks?: "currency";
}

const Input: React.FC<InputProps> = ({ masks, id, name, label, ...rest }) => {
  // pega o valor de um input especifoco e botando HTMLinputElement pega as propriedades do input tipo value
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const [, setIsFocused] = useState(false);
  const [, setIsFilled] = useState(true);

  // pegando valor do input e verificando se tem algo ou não pq ele vai começar nulo

  const handleFocusInput = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  // pegando o valor de todos os inputs
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className={style.container}>
      <label htmlFor={id}>
        {label}
        <input
          onFocus={handleFocusInput}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          className="color"
          {...rest}
        />
      </label>
    </div>
  );
};

export default Input;
