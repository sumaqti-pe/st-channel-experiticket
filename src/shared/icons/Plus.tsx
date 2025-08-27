interface PlusProps {
  color?: string;
  size?: number;
}

export const Plus = ({ color = "black", size = 20 }: PlusProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99935 4.16666V15.8333M4.16602 9.99999H15.8327"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
