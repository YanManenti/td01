import { useState, useEffect } from "react";

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

export function useAtorList() {
  const [fullList, setFullList] = useState<string[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const limit = 20; // Number of items per page, adjust as necessary

  const loadAtor = async (currentOffset: number) => {
    const controller = new AbortController();
    const { signal } = controller;

    try {
      setIsLoading(true);

      // Fetch the next batch of items
      const response = await fetch(
        `https://api.javascripttutorial.net/v1/quotes/?page=${offset}&limit=${limit}`
      ).then((response) => response.json());

      let json = { results: response.data };

      // Check if there are more items to load
      setHasMore(json.results.length < response.total);

      // Append new results to existing ones
      setItems((prevItems) => [...prevItems, ...json.results]);
    } catch (error: any) {
      console.error("There was an error with the loadAtor operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchAtores("latest_movies.json");
  //     return data.sort((a: string, b: string) => a.localeCompare(b));
  //   };
  //   fetchData().then((data) => {
  //     setFullList(data);
  //   });
  // }, []);

  useEffect(() => {
    loadAtor(offset);
  }, [offset]);

  const onLoadMore = () => {
    // const newOffset = offset + limit >= fullList.length ? offset : offset + limit;
    const newOffset = offset + 1;
    setOffset(newOffset);
  };

  return {
    items,
    hasMore,
    isLoading,
    onLoadMore,
  };
}
