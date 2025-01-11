import { type Today } from "@/app/api/today/route";
import axios, { type AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { capitalize } from "lodash";

interface TodayDataReturnType {
  data: Today | null;
  message: string;
  success: boolean;
}
export async function getTodayData(
  category: string,
): Promise<TodayDataReturnType> {
  const params = {
    q: capitalize(category),
  };
  const response = await axios.get("/api/today", {
    params,
  });

  return response.data as TodayDataReturnType;
}

export default function useToday(current: string) {
  const [data, setData] = useState<Today | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    if (current) {
      const response = await getTodayData(current);
      setData(response?.data);
    }
  }, [current]);

  useEffect(() => {
    fetchData()
      .catch((err: AxiosError) => {
        setIsError(true);
        setErrorMessage(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [current, fetchData]);

  return { data, isLoading, isError, errorMessage };
}
