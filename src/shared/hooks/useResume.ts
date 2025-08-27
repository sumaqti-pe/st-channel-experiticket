import { useResumeStore } from "../store/useResumeStore";

export const useResume = () => {
  const isOpenCart = useResumeStore((state) => state.isOpenCart);
  const resumes = useResumeStore((state) => state.resumes);
  const remove = useResumeStore((state) => state.remove);
  const updateQuantity = useResumeStore((state) => state.updateQuantity);
  const removeTicket = useResumeStore((state) => state.removeTicket);
  const setIsOpenCart = useResumeStore((state) => state.setIsOpenCart);

  const totalTickets = resumes.reduce((acc, resume) => {
    return (
      acc +
      resume.tickets.reduce((sum, ticket) => {
        if (ticket.type === "seat") return sum + 1;
        return sum + (ticket.count ?? 1);
      }, 0)
    );
  }, 0);

  const onChangeQuantityZone = (ticketId: string, count: number) => {
    updateQuantity(ticketId, count);

    if (count === 0) {
      removeTicket(ticketId);
    }
  };

  const total = resumes.reduce((acc, resume) => {
    return (
      acc +
      resume.tickets.reduce((sum, ticket) => {
        if (ticket.type === "seat") return sum + 100;
        return sum + ticket.price * (ticket.count ?? 1);
      }, 0)
    );
  }, 0);

  const igv = total * 0.18;

  const subtotal = total - igv;


  const toggleOpenCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  return {
    total,
    igv,
    subtotal,
    resumes,
    totalTickets,
    isOpenCart,
    onRemove: remove,
    onChangeQuantityZone,
    toggleOpenCart,
  };
};
