import { useRef, useEffect, TextareaHTMLAttributes } from "react";

import { useField } from "@unform/core";

import styles from "./styles.module.scss";

/**
 * Textarea component for Unform.
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 */
interface Props {
  name: string;
  label?: string;
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Props;

export default function Textarea({ name, label, ...rest }: TextareaProps) {
  const textareaRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  /**
   * If you need to set a default value for the textarea,
   * use the initial data property on your form,
   * or set it dynamically (be aware of the differences).
   *
   * initial data: https://unform.dev/guides/initial-data
   * set field value: https://unform.dev/guides/get-set-field-value
   */

  return (
    <div className={styles.contentTextArea}>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <textarea
        ref={textareaRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span>{error}</span>}
    </div>
  );
}
