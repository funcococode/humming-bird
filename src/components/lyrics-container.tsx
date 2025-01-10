"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
interface Data {
  id: string;
  name: string;
  lyrics: string;
  user: {
    id: string;
    name: string;
  };
}

export default function LyricsContainer() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async (): Promise<Data[]> => {
    const params = {
      // q: writerWatcher,
    };
    const response = await axios.get("/api/lyrics", {
      params,
    });
    const data = response.data as Data[];
    return data;
  }, []);

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [fetchData]);

  if (isLoading) {
    return "loading...";
  }

  return <div>{data?.map((item) => item.lyrics)}</div>;
}
