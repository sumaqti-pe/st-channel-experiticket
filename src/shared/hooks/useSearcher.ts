import { useEffect } from "react";
import { useSearcherStore } from "../store/useSearcherStore";

const mockData = [
  {
    id: "1",
    imageUrl: "https://cdn.teleticket.com.pe/images/eventos/dea064_rs.jpg",
    title: "TONY SUCCAR - LOS SUEÑOS se cumplen",
    location: "Estadio nacional - Lima",
    date: "13 de diciembre 2025",
  },
  {
    id: "2",
    imageUrl: "https://cdn.teleticket.com.pe/images/eventos/dea064_rs.jpg",
    title: "TONY ROSADO",
    location: "Estadio nacional - Lima",
    date: "11 de diciembre 2025",
  },
  {
    id: "3",
    imageUrl: "https://cdn.teleticket.com.pe/images/eventos/dea064_rs.jpg",
    title: "GRUPO 5",
    location: "Estadio nacional - Lima",
    date: "20 de diciembre 2025",
  },
];

export const useSearcher = () => {
  const items = useSearcherStore((state) => state.items);
  const value = useSearcherStore((state) => state.value);
  const setItems = useSearcherStore((state) => state.setItems);
  const setValue = useSearcherStore((state) => state.setValue);

  // debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      if (!value) {
        setItems(mockData);
        return;
      }

      const filtered = mockData.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setItems(filtered);
    }, 400); // 400ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [value, setItems]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { items, value, onChange };
};
