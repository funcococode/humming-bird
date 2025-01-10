"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Input from "@/components/form/input";
import Textarea from "@/components/form/textarea";
interface Fields {
  title: string;
  lyrics: string;
  category: string;
  writer: string;
}
export default function LyricsPage() {
  const { control, handleSubmit, reset } = useForm<Fields>({
    defaultValues: {
      category: "",
      lyrics: "",
      writer: "",
      title: "",
    },
  });
  const [message, setMessage] = useState("");
  const handleClick = async (data: Fields) => {
    if (data) {
      const response: { data: { message: string; success: boolean } } =
        await axios.post("/api/lyrics/", {
          writerId: data.writer,
          categoryId: data.category,
          ...data,
        });

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
        <h1 className="font-semibold">Add Lyrics</h1>
        <Input control={control} name="title" />
        <Input control={control} name="writer" />
        <Input control={control} name="category" />
        <Textarea control={control} name="lyrics" className="" />

        <button
          type="button"
          className="w-full rounded bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-500 hover:text-white"
          onClick={handleSubmit(handleClick)}
        >
          Add Lyrics
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
