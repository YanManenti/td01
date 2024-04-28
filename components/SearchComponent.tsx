"use client";
import { Button } from "@nextui-org/button";
import AtorSelect from "./AtorSelect";
import { useState } from "react";
import { Switch } from "@nextui-org/switch";
import "@/styles/globals.css";

function SearchComponent() {
  const [atorOrigem, setAtorOrigem] = useState();
  const [atorDestino, setAtorDestino] = useState();
  const [seisConexoes, setSeisConexoes] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-fit flex flex-col gap-4">
        <h3 className="font-bold text-xl">Atores</h3>
        <AtorSelect
          label="Ator Origem"
          value={atorOrigem ?? ""}
          onSelect={(e) => setAtorOrigem(e)}
        />
        <AtorSelect
          label="Ator Destino"
          value={atorDestino ?? ""}
          onSelect={(e) => setAtorDestino(e)}
        />
        <h3 className="font-bold text-xl">Opções</h3>
        <Switch
          className="switchTeste"
          color="default"
          isSelected={seisConexoes}
          onClick={() => setSeisConexoes((current) => !current)}
        >
          6 Conexões
        </Switch>
      </div>
      <Button
        className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold"
        onClick={() => {
          console.log({ atorOrigem, atorDestino, seisConexoes });
        }}
      >
        SEARCH
      </Button>
    </div>
  );
}

export default SearchComponent;
