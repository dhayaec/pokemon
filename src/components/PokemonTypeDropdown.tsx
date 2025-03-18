import { useEffect, useState } from "react";

const PokemonTypeDropdown = () => {
  const [types, setTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/type/");
        const data = await response.json();
        const typeNames = data.results.map((type: { name: string }) => type.name);
        setTypes(typeNames);
      } catch (error) {
        console.error("Error fetching Pokémon types:", error);
      }
    };

    fetchTypes();
  }, []);

  return (
    <div>
      <label className="block mb-2 font-medium">Select Pokémon Type:</label>
      <select
        className="p-2 border rounded-lg w-full"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="" disabled>Select Type</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonTypeDropdown;
