import { type InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import type { FieldValues, FieldPath, Control } from "react-hook-form";

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  control: Control<T>;
  name: string;
  showLabel?: boolean;
}
export default function Input<T extends FieldValues>({
  type = "text",
  name,
  showLabel = true,
  control,
  ...rest
}: Props<T>) {
  return (
    <div className="flex flex-col space-y-1">
      {showLabel && (
        <label
          className="text-sm font-medium capitalize text-gray-500"
          htmlFor={name}
        >
          {name}
        </label>
      )}
      <Controller
        control={control}
        name={name as FieldPath<T>}
        render={({ field: { onChange, value } }) => (
          <input
            {...rest}
            type={type}
            id={name}
            name={name}
            onChange={onChange}
            value={value}
            className={`w-72 rounded border px-2 py-1 ${rest.className}`}
          />
        )}
      />
    </div>
  );
}
