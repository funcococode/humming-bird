"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Input from "@/components/form/input";

export default function CategoryPage() {
  const { control, handleSubmit, reset } = useForm<{ name: string }>({
    defaultValues: {
      name: "",
    },
  });
  const [message, setMessage] = useState("");
  const handleClick = async (data: { name: string }) => {
    if (data) {
      const response: { data: { message: string; success: boolean } } =
        await axios.post("/api/category", data);

      setMessage(response.data.message);
      setTimeout(() => {
        setMessage("");
      }, 2000);

      reset();
    }
  };

  return (
    <main className="flex flex-1 items-center justify-center">
      <form className="h-fit w-fit space-y-4 rounded-lg border bg-gray-50 p-4">
        <h1 className="font-semibold">Add Category</h1>
        <Input control={control} name="name" />
        <button
          type="button"
          className="w-full rounded bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white"
          onClick={handleSubmit(handleClick)}
        >
          Submit
        </button>
        {message && (
          <p className="rounded bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-600">
            {message}
          </p>
        )}
      </form>
    </main>
  );
}
