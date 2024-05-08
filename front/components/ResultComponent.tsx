"use client";
import { SearchProps } from "@/types";
import { fetchRelations } from "@/utils/fetchers/fetchRelations";
import { useEffect, useState } from "react";
import ResultTop from "./ResultTop";
import MovieRender from "./MovieRender";

function ResultComponent({ starting, target, sixConnections }: SearchProps) {
  const [result, setResult] = useState<any[]>([]);
  useEffect(() => {
    async function fetchResult() {
      const response = await fetchRelations({
        starting,
        target,
        sixConnections,
      });
      setResult(response);
    }

    if (starting && target) {
      fetchResult();
    }
  }, [starting, target, sixConnections]);

  return (
    <div className="w-full h-full max-h-full flex flex-col gap-2">
      <ResultTop />
      <div className="w-full overflow-x-hidden overflow-auto flex flex-col gap-2 h-[95%] max-h-[95%] ">
        {result?.map((connection, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="font-bold text-sm">#{index + 1}</p>
            {connection?.map((movie: any) => (
              <div key={movie.movie.id + Math.random()}>
                <MovieRender item={{ ...movie, starting, target }} />
              </div>
            ))}
          </div>
        ))}
        {result.length === 0 && target && starting && (
          <p className="self-center">Nenhuma conexão encontrada</p>
        )}
      </div>
    </div>
  );
}

export default ResultComponent;
