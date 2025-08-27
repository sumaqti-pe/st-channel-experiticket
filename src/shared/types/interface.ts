export interface ResumeDetail {
  id: string;
  event: {
    name: string;
    location: string;
    date: Date;
    imageUrl: string;
  };
  tickets: ResumeTicket[];
}

export interface ResumeTicket {
  type: string;
  code?: string;
  zone?: string;
  count?: number;
  color?: string;
  id: string;
  price: number;
}
