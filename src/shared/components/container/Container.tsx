import React from "react";
import { tv } from "tailwind-variants";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  const containerVariant = tv({
    base: "w-full flex justify-center",
  });

  const style = containerVariant({
    className,
  });

  return (
    <section className={style}>
      <div className="w-[1360px]">{children}</div>
    </section>
  );
};
