import { TicketCard } from "@/shared/components/ticket-card/TicketCard";
import { Flame } from "@/shared/icons/Flame";
import { useCompletedStore } from "../store/useCompletedStore";

export const ResumeTicketList = () => {
  const { tickets } = useCompletedStore();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="uppercase text-2xl font-bold flex items-center gap-3 max-lg:hidden">
        <Flame />
        tu compra
      </h2>
      <div className="flex flex-col gap-5">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      </div>
    </div>
  );
};
