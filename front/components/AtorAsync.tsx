"use client";
import { AtorSelectProps } from "@/types";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
import { fetchAtoresFilter } from "@/utils/fetchers/fetchAtoresFilter";

function AtorAsync({
  label,
  value,
  isLoaded = true,
  onSelect,
}: AtorSelectProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleInputChangeDebounce = useCallback(
    debounce(async (value: string) => {
      onSelect(value);
      if (value.length < 3) return;
      setIsLoading(true);
      const data = await fetchAtoresFilter(value);
      setIsLoading(false);
      setItems(data);
    }, 300),
    []
  );

  return (
    <Autocomplete
      variant="bordered"
      isRequired
      isLoading={isLoading}
      defaultItems={items}
      label={label}
      multiple={false}
      placeholder={"Mínimo de 3 letras..."}
      value={value}
      onInputChange={handleInputChangeDebounce}
    >
      {items.map((item) => (
        <AutocompleteItem key={item.id} value={item.name}>
          {item.name}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}

export default AtorAsync;
