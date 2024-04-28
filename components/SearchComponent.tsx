"use client";
import { Button } from "@nextui-org/button";
import AtorSelect from "./AtorSelect";
import { useEffect, useState } from "react";
import { AtorSelectProps } from "@/types";

async function fetchAtores(url: string) {
  const data = await fetch(url)
    .then((response) => response.json())
    .then((data) => data);
  let atores: string[] = [];
  data.forEach((movie: any) => {
    movie.cast.map((ator: string) => {
      if (atores.findIndex((a) => a === ator) === -1) {
        atores.push(ator);
      }
    });
  });
  return atores;
}

function SearchComponent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [atorOrigem, setAtorOrigem] = useState(null);
  const [atorDestino, setAtorDestino] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAtores("latest_movies.json");
      // console.log(data);
      return data;
    };
    setIsLoaded(false);
    fetchData().then((data) => {
      setData(data);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-fit flex flex-col gap-4">
        <AtorSelect
          data={data}
          isLoaded={isLoaded}
          label="Ator Origem"
          onSelect={(e) => console.log(e)}
        />
        <AtorSelect
          data={data}
          isLoaded={isLoaded}
          label="Ator Destino"
          onSelect={(e) => console.log(e)}
        />
      </div>
      <Button>Click me</Button>
    </div>
  );
}

export default SearchComponent;
