"use client";

import type { BaseSelectProps, Option, PropsWithControl } from "@/types/form";

import {
  Controller,
  type FieldPath,
  type Control,
  type FieldValues,
} from "react-hook-form";

interface Props<T extends FieldValues>
  extends PropsWithControl<T>,
    BaseSelectProps {
  options: Option[];
  label: string;
  name: string;
  control: Control<T>;
}

export default function Select<T extends FieldValues>({
  label,
  name,
  options,
  control,
  ...rest
}: Props<T>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-500">
        {label}
      </label>
      <Controller
        control={control}
        name={name as FieldPath<T>}
        render={({ field: { onChange, value } }) => (
          <select
            name={name}
            id={name}
            className="rounded border p-2 text-sm"
            onChange={onChange}
            value={value}
            {...rest}
          >
            {options?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
}
