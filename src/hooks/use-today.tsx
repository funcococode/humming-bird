import { type Today } from "@/app/api/today/route";
import axios, { type AxiosError } from "axios";
import { useEffect, useState } from "react";

interface TodayDataReturnType {
  data: Today | null;
  message: string;
  success: boolean;
}
export async function getTodayData(
  category = "Poem",
): Promise<TodayDataReturnType> {
  const params = {
    q: category,
  };
  const response = await axios.get("/api/today", {
    params,
  });

  return response.data as TodayDataReturnType;
}

export default function useToday() {
  const [data, setData] = useState<Today | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async () => {
    const response = await getTodayData();
    setData(response?.data);
  };

  useEffect(() => {
    fetchData()
      .catch((err: AxiosError) => {
        setIsError(true);
        setErrorMessage(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, isError, errorMessage };
}
