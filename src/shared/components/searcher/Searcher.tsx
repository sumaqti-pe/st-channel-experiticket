"use client";

import { Search } from "lucide-react";
import { Textfield } from "../textfield/Textfield";
import { Item } from "./Item";
import React, { useState } from "react";
import { useSearcher } from "@/shared/hooks/useSearcher";

export const Searcher = () => {
  const { items, value, onChange } = useSearcher();
  const [isFocused, setIsFocused] = useState(false);

  const showDropdown = isFocused && value.trim().length > 0;

  return (
    <div className="relative">
      <Textfield
        isBlock
        placeholder="Busca por artista o concierto"
        append={<Search />}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {showDropdown && (
        <div className="bg-white absolute top-[60px] shadow-md w-full rounded-[20px] pl-6 pr-4 py-3 min-h-[100px] max-h-[213px]">
          <div className="flex flex-col gap-3 overflow-y-auto custom-scroll max-h-[170px] pr-2">
            {items.length === 0 ? (
              <div className="flex items-center justify-center h-[100px]">
                <p className="text-sm text-gray-400 italic">
                  No se encontraron resultados
                </p>
              </div>
            ) : (
              items.map((item) => <Item key={item.id} {...item} />)
            )}
          </div>
        </div>
      )}
    </div>
  );
};
