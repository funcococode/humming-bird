import axios, { type AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";

interface CategoryReturnData {
  data: { id: string; name: string }[] | null;
  message: string;
  success: boolean;
}
export async function getCategoryData(): Promise<CategoryReturnData> {
  const response = await axios.get("/api/category");
  return response.data as CategoryReturnData;
}

export default function useCategory() {
  const [data, setData] = useState<{ id: string; name: string }[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    const response = await getCategoryData();
    setData(response?.data);
  }, []);

  useEffect(() => {
    fetchData()
      .catch((err: AxiosError) => {
        setIsError(true);
        setErrorMessage(err.message);
      })
      .finally(() => setIsLoading(false));
  }, [fetchData]);

  return { data, isLoading, isError, errorMessage };
}
