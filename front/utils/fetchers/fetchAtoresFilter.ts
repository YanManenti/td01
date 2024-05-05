export async function fetchAtoresFilter(filter: string) {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => data);

  const atores = data.filter((item: any) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return atores;
}
