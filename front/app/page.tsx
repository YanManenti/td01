"use client";
import ComponentBackground from "@/components/ComponentBackground";
import ResultComponent from "@/components/ResultComponent";
import SearchComponent from "@/components/SearchComponent";
import { SearchProps } from "@/types";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<SearchProps>();
  return (
    <section className="flex flex-col items-start gap-4 w-full h-full">
      <h1 className="font-bold text-white text-4xl">HELLO WORLD</h1>
      <div className="flex w-full h-full gap-4">
        <ComponentBackground>
          <SearchComponent setSearch={setSearch} />
        </ComponentBackground>
        <ComponentBackground>
          <ResultComponent {...search} />
        </ComponentBackground>
      </div>
    </section>
  );
}
