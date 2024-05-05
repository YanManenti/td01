"use client";
import { AtorSelectProps } from "@/types";
import { useAtorList } from "@/utils/hooks/useAtorList";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Skeleton } from "@nextui-org/skeleton";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useState } from "react";

function AtorSelect({ label, value, onSelect }: AtorSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { items, hasMore, isLoading, onLoadMore } = useAtorList();
  const [, scrollerRef] = useInfiniteScroll({
    hasMore,
    isEnabled: isOpen,
    shouldUseLoader: false,
    onLoadMore,
  });

  return (
    <Skeleton isLoaded={!isLoading}>
      <Autocomplete
        variant="bordered"
        isLoading={isLoading}
        defaultItems={items}
        label={label}
        scrollRef={scrollerRef}
        onOpenChange={setIsOpen}
        multiple={false}
        placeholder={label + "..."}
        inputValue={value}
        onInputChange={onSelect}
      >
        {items.map((item, index) => (
          <AutocompleteItem key={index} value={item.author}>
            {item.author}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </Skeleton>
  );
}

export default AtorSelect;
