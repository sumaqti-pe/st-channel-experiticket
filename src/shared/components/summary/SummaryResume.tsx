import React from "react";
import Image from "next/image";
import { ZoneSquare } from "@/shared/components/zone-square/ZoneSquare";
import { Quantity } from "@/shared/components/quantity/Quantity";
import { ResumeDetail } from "@/shared/types";
import { Trash } from "@/shared/icons/Trash";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useResume } from "@/shared/hooks/useResume";
import Divider from "@/shared/components/divider/Divier";
dayjs.locale("es");

interface SummaryResumeProps {
  resume: ResumeDetail;
}

export const SummaryResume: React.FC<SummaryResumeProps> = ({ resume }) => {
  const { onRemove, onChangeQuantityZone } = useResume();

  return (
    <div key={resume.id} className="flex flex-col gap-2">
      <div className="flex justify-between gap-[18px] mt-2">
        <Image
          src={resume.event.imageUrl}
          alt={resume.event.name}
          width={130}
          height={67}
          unoptimized
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-sm uppercase">{resume.event.name}</h2>
          <div className="flex flex-col gap-[3px]">
            <h3 className="uppercase text-xs">{resume.event.location}</h3>
            <p className="text-xs">
              {dayjs(resume.event.date).format("D [de] MMMM YYYY")}
            </p>
          </div>
        </div>
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => onRemove(resume.id)}
        >
          <Trash />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          {resume.tickets.map((ticket) => (
            <div key={ticket.id}>
              {ticket.type !== "seat" && (
                <div className="flex flex-col gap-2">
                  <span className="text-[18px] font-bold">Zona</span>

                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <ZoneSquare color={ticket?.color} />
                        <span className="uppercase font-bold text-sm">
                          {ticket.zone}
                        </span>
                      </div>
                      <Quantity
                        value={ticket.count ?? 0}
                        min={0}
                        max={10}
                        onChange={(value) =>
                          onChangeQuantityZone(ticket.id, value)
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex justify-end w-full">
                        S/. {(ticket.price * (ticket.count ?? 0)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {/* {ticket.type === "seat" && <div>sdf</div>} */}
              {ticket.type === "seat" && (
                <div>
                  <span className="text-[18px] font-bold">Ticket</span>
                  <div className="flex justify-between">
                    <div>asdf</div>
                    <span>S/. {ticket.price.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <Divider variant="solid" color="#E6E7E9" />
      </div>
    </div>
  );
};
