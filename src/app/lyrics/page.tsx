"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import Input from "@/components/form/input";
import Textarea from "@/components/form/textarea";
import useCategory from "@/hooks/use-category";
import Select, { type Option } from "@/components/form/select";
import useUser from "@/hooks/use-user";
interface Fields {
  title: string;
  lyrics: string;
  category: string;
  writer: string;
}
export default function LyricsPage() {
  const { data: categoryData } = useCategory();
  const { data: userData } = useUser();
  const [categoryOptions, setCategoryOptions] = useState<Option[]>([]);
  const [userOptions, setUserOptions] = useState<Option[]>([]);

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

  useEffect(() => {
    if (categoryData?.length) {
      setCategoryOptions(
        categoryData.map((item) => ({ label: item.name, value: item.id })),
      );
    }
  }, [categoryData]);

  useEffect(() => {
    if (userData?.length) {
      setUserOptions(
        userData.map((item) => ({ label: item.name, value: item.id })),
      );
    }
  }, [userData]);

  return (
    <main className="flex flex-1 items-center justify-center">
      <form className="h-fit w-fit space-y-4 rounded-lg border bg-gray-50 p-4">
        <h1 className="font-semibold">Add Lyrics</h1>
        <Input control={control} name="title" />
        <Select
          control={control}
          name="writer"
          options={userOptions}
          label="Writer"
        />
        <Select
          options={categoryOptions}
          label="Category"
          name="category"
          control={control}
        />
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
