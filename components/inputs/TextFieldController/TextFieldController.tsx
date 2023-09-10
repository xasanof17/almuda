import { FC } from "react";
import { Control, Controller } from "react-hook-form";

interface ITextFieldController {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
}

export const TextFieldController: FC<ITextFieldController> = ({
  control,
  name,
  label,
  placeholder,
  className,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true }}
      render={({ field }) => (
        <div className={`flex flex-col ${className}`}>
          <label className="label">{label}</label>
          <input
            {...field}
            placeholder={placeholder}
            className="input"
            autoComplete="true"
          />
        </div>
      )}
    />
  );
};
