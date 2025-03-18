import PokemonSearchForm from "@/components/PokemonSearchForm";

export default function Home() {
  return (
    <main className="container flex flex-col gap-[32px] row-start-2">
      <h1>Pokemon Search</h1>
      <PokemonSearchForm/>
    </main>
  );
}
