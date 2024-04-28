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
  const [items, setItems] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(50);
  const limit = 50; // Number of items per page, adjust as necessary

  const loadAtor = async (currentOffset: number) => {
    const controller = new AbortController();
    const { signal } = controller;

    try {
      setIsLoading(true);
      // Fetch the next batch of items
      let json = { results: fullList.splice(items.length, currentOffset) };
      // Check if there are more items to load
      setHasMore(currentOffset !== fullList.length);
      // Append new results to existing ones
      setItems((prevItems) => [...prevItems, ...json.results]);
    } catch (error: any) {
      console.error("There was an error with the loadAtor operation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAtores("latest_movies.json");
      return data.sort((a: string, b: string) => a.localeCompare(b));
    };
    fetchData().then((data) => {
      setFullList(data);
    });
  }, []);

  useEffect(() => {
    loadAtor(offset);
  }, [fullList]);

  const onLoadMore = () => {
    const newOffset =
      offset + limit >= fullList.length ? offset : offset + limit;
    setOffset(newOffset);
    loadAtor(newOffset);
  };

  return {
    items,
    hasMore,
    isLoading,
    onLoadMore,
  };
}
