import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import type { Control, FieldValues } from "react-hook-form";

export interface PropsWithControl<T extends FieldValues> {
  control: Control<T>;
}

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;
export type BaseSelectProps = SelectHTMLAttributes<HTMLSelectElement>;
export type BaseTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface Option {
  label: string;
  value: string;
}
