import {
  ForwardedRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import { forwardRef } from "react";

type Field = {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  textarea?: boolean;
};

const CustomField = forwardRef<
  | InputHTMLAttributes<HTMLInputElement>
  | InputHTMLAttributes<HTMLTextAreaElement>,
  Field
>(function CustomField(props, ref) {
  const { id, label, type, placeholder, className, textarea, ...field } = props;
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {!textarea ? (
        <input
          id={id}
          name={id}
          ref={ref as ForwardedRef<HTMLInputElement>}
          type={type}
          placeholder={placeholder}
          className="input"
          autoComplete="true"
          {...field}
        />
      ) : (
        <textarea
          ref={ref as ForwardedRef<HTMLTextAreaElement>}
          className="input resize-none hover:resize-y focus:resize-y"
          placeholder={placeholder}
          rows={4}
          {...field}
        />
      )}
    </div>
  );
});

export default CustomField;
