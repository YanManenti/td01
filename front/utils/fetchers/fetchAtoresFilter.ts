export async function fetchAtoresFilter(filter: string) {
  const data = await fetch(
    `http://localhost:9000/api/getfiltered?filter=${filter}`
  ).then((response) => response.json());

  return data;
}
