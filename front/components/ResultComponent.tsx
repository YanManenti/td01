"use client";
import { SearchProps } from "@/types";
import { fetchRelations } from "@/utils/fetchers/fetchRelations";
import { useEffect, useState } from "react";
import ResultTop from "./ResultTop";

function ResultComponent({ starting, target, sixConnections }: SearchProps) {
  const [result, setResult] = useState();
  useEffect(() => {
    async function fetchResult() {
      const response = await fetchRelations({
        starting,
        target,
        sixConnections,
      });
      console.log(response);
      //   setResult(response);
    }
    fetchResult();
  }, [starting, target, sixConnections]);

  return (
    <div className="w-full h-full ">
      <ResultTop />
      <p>Starting: {starting}</p>
      <p>Target: {target}</p>
      <p>Seis conexões: {sixConnections ? "True" : "False"}</p>
    </div>
  );
}

export default ResultComponent;
