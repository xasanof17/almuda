import { HTMLInputTypeAttribute } from "react";

type Field = {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  textarea?: boolean;
};

const CustomField = ({
  id,
  label,
  type,
  placeholder,
  className,
  textarea,
}: Field) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {!textarea ? (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="input"
          autoComplete="true"
        />
      ) : (
        <textarea
          id={id}
          className="input"
          placeholder={placeholder}
          rows={4}
        />
      )}
    </div>
  );
};

export default CustomField;
