"use client";
import { Button } from "@nextui-org/button";
import { useCallback, useState } from "react";
import { Switch } from "@nextui-org/switch";
import "@/styles/globals.css";
import AtorAsync from "./AtorAsync";
import { SearchComponentProps } from "@/types";

function SearchComponent({ setSearch }: SearchComponentProps) {
  const [atorOrigem, setAtorOrigem] = useState();
  const [atorDestino, setAtorDestino] = useState();
  const [seisConexoes, setSeisConexoes] = useState(false);

  const handleClick = useCallback(() => {
    if (atorOrigem && atorDestino) {
      setSearch({
        starting: atorOrigem,
        target: atorDestino,
        sixConnections: seisConexoes,
      });
    }
  }, [atorOrigem, atorDestino, seisConexoes, setSearch]);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-fit flex flex-col gap-4">
        <h3 className="font-bold text-xl">Atores</h3>
        <AtorAsync
          label="Ator Destino"
          value={atorOrigem}
          onSelect={(e) => setAtorOrigem(e)}
        />
        <AtorAsync
          label="Ator Destino"
          value={atorDestino}
          onSelect={(e) => setAtorDestino(e)}
        />
        <h3 className="font-bold text-xl">Opções</h3>
        <Switch
          className="switchTeste"
          color="default"
          isSelected={seisConexoes}
          onClick={() => setSeisConexoes((prev) => !prev)}
        >
          6 Conexões
        </Switch>
      </div>
      <Button
        className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold"
        onClick={handleClick}
      >
        SEARCH
      </Button>
    </div>
  );
}

export default SearchComponent;
