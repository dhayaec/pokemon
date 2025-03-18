"use client";
import { useState } from "react";
import PokemonTypeDropdown from "./PokemonTypeDropdown";

export default function PokemonSearchForm() {
  const [search, setSearch] = useState("");

  return (
    <form className="flex flex-col gap-4 max-w-md rounded-lg">
      <PokemonTypeDropdown />
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 pl-8 border border-r-0 rounded-r-none rounded-md shadow-sm focus:ring focus:ring-blue-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-blue-800 text-white rounded-l-none rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
}
