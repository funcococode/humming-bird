"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./form/input";

interface Writer {
  id: string;
  firstname: string;
  lastname: string;
}

type FormFields = {
  search: string;
};

export default function WriterContainer() {
  const [writers, setWriters] = useState<Writer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { control, watch } = useForm<FormFields>({
    defaultValues: {
      search: "",
    },
  });
  const writerWatcher = watch("search");

  const fetchData = useCallback(async (): Promise<Writer[]> => {
    const params = {
      q: writerWatcher,
    };
    const response = await axios.get("/api/user", {
      params,
    });
    const data = response.data as Writer[];
    return data;
  }, [writerWatcher]);

  useEffect(() => {
    fetchData()
      .then((data) => setWriters(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [writerWatcher, fetchData]);

  if (isLoading) {
    return "loading...";
  }

  return (
    <div className="space-y-4 rounded-lg border p-5">
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Writers</h1>
        <Input
          control={control}
          name="search"
          showLabel={false}
          placeholder="Search"
          className="bg-gray-50 py-2 text-sm placeholder-gray-400"
        />
      </div>
      <div className="space-y-2">
        {writers.map((item) => (
          <li
            key={item.id}
            className="font-handwritten cursor-pointer list-none text-gray-500 hover:text-gray-800"
          >
            {item.firstname} {item.lastname}
          </li>
        ))}
      </div>
    </div>
  );
}
