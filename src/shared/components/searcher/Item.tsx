import { SearcherItem } from "@/shared/types";
import Image from "next/image";
import React from "react";

export const Item: React.FC<SearcherItem> = ({
  imageUrl,
  title,
  location,
  date,
}) => {
  return (
    <div className="p-1 flex gap-[18px] items-center select-none hover:bg-[#F5F5F5] rounded-lg cursor-pointer active:scale-[0.98] transition-all">
      <Image
        src={imageUrl}
        alt={title}
        width={132}
        height={77}
        className="rounded-xl"
        unoptimized
      />
      <div className="flex flex-col gap-2">
        <h2 className="uppercase">{title}</h2>
        <div className="flex flex-col gap-1">
          <h3 className="uppercase text-xs">{location}</h3>
          <p className="text-[#565656] text-xs">{date}</p>
        </div>
      </div>
    </div>
  );
};
