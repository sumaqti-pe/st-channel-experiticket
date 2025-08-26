import { TicketCard } from "@/shared/components/ticket-card/TicketCard";
import { create } from "zustand";

interface CompletedStore {
  tickets: TicketCard[];
}

export const useCompletedStore = create<CompletedStore>(() => ({
  tickets: [
    {
      id: 1,
      imageUrl: "https://cdn.teleticket.com.pe/images/eventos/dea064_rs.jpg",
      name: "TONY SUCCAR - LOS SUEÑOS se cumplen",
      location: "Estadio nacional - Lima",
      date: new Date("2025-12-13"),
      tickets: "2 ticket, ZONA VIP",
    },
    {
      id: 2,
      imageUrl: "https://cdn.teleticket.com.pe/images/eventos/dea064_rs.jpg",
      name: "TONY SUCCAR - LOS SUEÑOS se cumplen",
      location: "Estadio nacional - Lima",
      date: new Date("2025-12-13"),
      tickets: "2 ticket, ZONA VIP",
    },
  ],
}));
