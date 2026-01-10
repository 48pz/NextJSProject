"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) {
      return router.push("/");
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };
  return (
    <div className="flex items-center gap-0.5">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder="Explore Circuitry電"
        className="h-10 px-4 w-80 border text-textmain border-gray-300 rounded-l-md focus:outline-none focus:bourder-[0.5px] focus:border-slate-500 bg-white"
      />
      <button
        className="h-10 px-6 bg-accent text-primary hover:bg-accent/80 transition p-2 rounded-r-md cursor-pointer"
        onClick={handleSubmit(onSubmit)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
