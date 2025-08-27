import { Button } from "@/shared/components/button/Button";
import Divider from "@/shared/components/divider/Divier";
import { MediumLune } from "@/shared/icons/MediumLune";
import Image from "next/image";
import dayjs from "dayjs";
import { Ticket } from "@/shared/icons/Ticket";
import "dayjs/locale/es"; 
dayjs.locale("es"); 
export interface TicketCard {
  id: number;
  imageUrl: string;
  name: string;
  location: string;
  date: Date;
  tickets: string;
}

type TicketCardProps = Omit<TicketCard, "id">;

export const TicketCard: React.FC<TicketCardProps> = ({
  name,
  imageUrl,
  location,
  date,
  tickets,
}) => {
  return (
    <>
      <section className="flex justify-between text-[#000] h-[268px] max-lg:hidden w-fit">
        <div className="flex bg-[#fff] shadow-lg">
          <div className="py-6 px-8 flex items-center">
            <Image
              src={imageUrl}
              alt={name}
              width={365}
              height={220}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-3 w-full justify-center max-w-[400px] mr-15">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl uppercase">{name}</h2>
              <h3 className="uppercase text-[18px]">{location}</h3>
              <p className="text-[18px]">
                {dayjs(date).format("DD [de] MMMM YYYY")}
              </p>
            </div>
            <div>{tickets}</div>
          </div>
        </div>
        <div className="flex">
          <div className="flex z-999">
            <div className="flex flex-col items-center bg-[#fff]">
              <MediumLune />
              <Divider orientation="vertical" length="260px" thickness="1px" />
              <div className="rotate-180">
                <MediumLune />
              </div>
            </div>
          </div>
          <div className="w-[300px] flex items-center justify-center bg-[#fff] shadow-lg">
            <Button className="bg-[#000]" text="light">
              Ver ticket
            </Button>
          </div>
        </div>
      </section>
      <section className="min-lg:hidden bg-[#fff] p-[16px] flex flex-col gap-2">
        <div className="flex gap-3">
          <Image
            src={imageUrl}
            alt={name}
            width={160}
            height={160}
            className="rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-sm uppercase">{name}</h2>
              <h3 className="uppercase text-xs">{location}</h3>
              <p className="text-xs">
                {dayjs(date).format("DD [de] MMMM YYYY")}
              </p>
            </div>
            <p className="text-sm flex items-center gap-2">
              <Ticket color="#000" />
              {tickets}
            </p>
          </div>
        </div>
        <Divider
          orientation="horizontal"
          length="100%"
          thickness="1px"
          className="my-2"
        />
        <div>
          <Button className="bg-[#000]" text="light" isBlock>
            Ver ticket
          </Button>
        </div>
      </section>
    </>
  );
};
