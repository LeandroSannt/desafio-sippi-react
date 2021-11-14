import react, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";

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
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(true);

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

  const handleChange = useCallback((e: any) => {
    console.log(e.target.value);
  }, []);

  // pegando o valor de todos os inputs
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  //const b = defaultValue.replace(/\D/g, "");

  return (
    <div className={style.container}>
      <label htmlFor={id}>
        {label}
        <input
          onFocus={handleFocusInput}
          onBlur={handleInputBlur}
          onChange={handleChange}
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
