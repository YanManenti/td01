import { AtorSelectProps } from "@/types";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Skeleton } from "@nextui-org/skeleton";
import { useAsyncList } from "@react-stately/data";

function AtorSelect({ label, isLoaded, data, onSelect }: AtorSelectProps) {
  let list = useAsyncList({
    async load({ signal, filterText }) {
      console.log(data);
      let slicedData = data.slice(0, 100);
      return {
        items: slicedData,
        // cursor: cursor + 100,
      };
    },
  });
  console.log(list.items);
  return (
    <Skeleton isLoaded={isLoaded}>
      {/* <Autocomplete items={list.items} label={label} onSelect={onSelect}>
        {list.items.map((ator: string) => {
          return (
            <AutocompleteItem key={ator} value={ator}>
              {ator}
            </AutocompleteItem>
          );
        })}
      </Autocomplete> */}
    </Skeleton>
  );
}

export default AtorSelect;
