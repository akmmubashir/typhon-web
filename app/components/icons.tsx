type Props = { size?: string; color?: string; stroke?: string };

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
