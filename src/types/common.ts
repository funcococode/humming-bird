import type { ReactElement } from "react";

export interface BaseAPIResponse {
  message: string;
  status_code: number;
  success: boolean;
  error_message?: string | null;
}

export interface APIResponseWithData<T> extends BaseAPIResponse {
  data: T;
}

export interface NavigationLink {
  label: string;
  url: string;
  key: string;
  icon?: ReactElement;
}
