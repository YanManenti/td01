import { SearchProps } from "@/types";

export async function fetchRelations({
  starting,
  target,
  sixConnections,
}: SearchProps) {
  // const data = await fetch(
  //   `http://localhost:9000/api/getrelations?starting=${starting}&target=${target}&sixConnections=${sixConnections}`
  // ).then((response) => response.json());
  const data = await fetch(
    `http://localhost:9000/api/gettest?starting=${starting}&target=${target}`
  ).then((response) => response.json());

  return data;
}
