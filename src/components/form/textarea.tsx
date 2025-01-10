import { type TextareaHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import type { FieldValues, FieldPath, Control } from "react-hook-form";

interface Props<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: Control<T>;
  name: string;
  showLabel?: boolean;
}
export default function Textarea<T extends FieldValues>({
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
          <textarea
            {...rest}
            id={name}
            name={name}
            onChange={onChange}
            value={value}
            className={`rounded border px-2 py-1 ${rest.className}`}
          />
        )}
      />
    </div>
  );
}
