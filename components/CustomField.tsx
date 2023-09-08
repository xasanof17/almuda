import { HTMLInputTypeAttribute } from "react";

type Field = {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  textarea?: boolean;
};

const CustomField = ({
  label,
  type,
  placeholder,
  className,
  textarea,
}: Field) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={label} className="label">
        {label}
      </label>
      {!textarea ? (
        <input type={type} placeholder={placeholder} className="input" required />
      ) : (
        <textarea
          name=""
          className="input"
          placeholder={placeholder}
          rows={4}
          defaultValue="Hi there,"
        />
      )}
    </div>
  );
};

export default CustomField;
