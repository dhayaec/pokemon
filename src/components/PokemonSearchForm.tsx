"use client";
import { useState } from "react";

const POKEMON_TYPES = [
  "Normal",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
];

export default function PokemonSearchForm() {
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  return (
    <form className="flex flex-col gap-4 max-w-md p-4 rounded-lg">
      <select
        className="p-2 border rounded-md focus:ring focus:ring-blue-300"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Select Pokémon Type</option>
        {POKEMON_TYPES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

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
