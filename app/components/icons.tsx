type Props = {
  size?: string;
  color?: string;
  stroke?: string;
  className?: string;
};

export const ArrowRight = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.90997 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.90997 4.07999"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ArrowLeft = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 19.92L8.48003 13.4C7.71003 12.63 7.71003 11.37 8.48003 10.6L15 4.07999"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const QuotesIcon = ({ className }: Props) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M116,72v88a48.05436,48.05436,0,0,1-48,48,8,8,0,0,1,0-16,32.036,32.036,0,0,0,32-32v-8H40a16.01833,16.01833,0,0,1-16-16V72A16.01833,16.01833,0,0,1,40,56h60A16.01833,16.01833,0,0,1,116,72ZM216,56H156a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16h60v8a32.036,32.036,0,0,1-32,32,8,8,0,0,0,0,16,48.05436,48.05436,0,0,0,48-48V72A16.01833,16.01833,0,0,0,216,56Z" />
  </svg>
);
