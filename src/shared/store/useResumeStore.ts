// store/useResumeStore.ts
import { create } from "zustand";
import { ResumeDetail } from "../types/interface";

interface ResumeStore {
  isOpenCart: boolean;
  resumes: ResumeDetail[];
  remove: (id: string) => void;
  updateQuantity: (ticketId: string, count: number) => void;
  removeTicket: (ticketId: string) => void;
  setIsOpenCart: (isOpen: boolean) => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  isOpenCart: false,
  resumes: [
    {
      id: "aaa",
      event: {
        name: "TONY SUCCAR - LOS SUEÑOS se cumplen",
        location: "Estadio nacional - Lima",
        date: new Date("2023-10-01"),
        imageUrl: "https://cdn.teleticket.com.pe/images/eventos/dea064_rs.jpg",
      },
      tickets: [
        { id: "xxx", type: "seat", code: "A1", price: 999 },
        {
          id: "yyy",
          type: "no-seat",
          zone: "viva el perreo",
          count: 3,
          color: "#EABE00",
          price: 1999,
        },
      ],
    },
    {
      id: "bbb",
      event: {
        name: "TONY SUCCAR - LOS SUEÑOS se cumplen",
        location: "Estadio nacional - Lima",
        date: new Date("2023-10-01"),
        imageUrl: "https://cdn.teleticket.com.pe/images/eventos/dea064_rs.jpg",
      },
      tickets: [
        { id: "zzz", type: "seat", code: "A1", price: 999 },
        {
          id: "aaa",
          type: "no-seat",
          zone: "viva el perreo",
          count: 3,
          color: "#EABE00",
          price: 1999,
        },
      ],
    },
  ],
  remove: (id: string) =>
    set((state) => ({
      resumes: state.resumes.filter((resume) => resume.id !== id),
    })),
  updateQuantity: (ticketId, count) =>
    set((state) => ({
      resumes: state.resumes.map((resume) => ({
        ...resume,
        tickets: resume.tickets.map((ticket) =>
          ticket.id === ticketId ? { ...ticket, count } : ticket
        ),
      })),
    })),
  removeTicket: (ticketId: string) =>
    set((state) => ({
      resumes: state.resumes.map((resume) => ({
        ...resume,
        tickets: resume.tickets.filter((ticket) => ticket.id !== ticketId),
      })),
    })),
  setIsOpenCart: (isOpen: boolean) => set({ isOpenCart: isOpen }),
}));
