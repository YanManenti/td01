export async function fetchAtoresFilter(filter: string) {
  const data = await fetch("http://localhost:9000/api/actor/getall")
    .then((response) => response.json())
    .then((data) => data);

  const atores = data.filter((item: any) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return atores;
}
