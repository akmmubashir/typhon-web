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
export const UserIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const EnvelopeIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CallIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeMiterlimit="10"
    />
    <path
      d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 9C22 5.13 18.87 2 15 2"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const FacebookIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const InstagramIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.6361 7H17.6477"
      className={color}
      strokeWidth={stroke || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const YoutubeIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3996 9.5003L13.8996 11.0003C14.7996 11.6003 14.7996 12.5003 13.8996 13.1003L11.3996 14.6003C10.3996 15.2003 9.59961 14.7003 9.59961 13.6003V10.6003C9.59961 9.3003 10.3996 8.9003 11.3996 9.5003Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const InfoIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V13"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9941 16H12.0031"
      className={color}
      strokeWidth={stroke || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const SendIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.39969 6.32003L15.8897 3.49003C19.6997 2.22003 21.7697 4.30003 20.5097 8.11003L17.6797 16.6C15.7797 22.31 12.6597 22.31 10.7597 16.6L9.91969 14.08L7.39969 13.24C1.68969 11.34 1.68969 8.23003 7.39969 6.32003Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.1094 13.6501L13.6894 10.0601"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const PenIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.2603 3.60022L5.05034 12.2902C4.74034 12.6202 4.44034 13.2702 4.38034 13.7202L4.01034 16.9602C3.88034 18.1302 4.72034 18.9302 5.88034 18.7302L9.10034 18.1802C9.55034 18.1002 10.1803 17.7702 10.4903 17.4302L18.7003 8.74022C20.1203 7.24022 20.7603 5.53022 18.5503 3.44022C16.3503 1.37022 14.6803 2.10022 13.2603 3.60022Z"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.8896 5.0498C12.3196 7.8098 14.5596 9.9198 17.3396 10.1998"
      className={color}
      strokeWidth={stroke || "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 22H21"
      className={color}
      strokeWidth={stroke || "1.5"}
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
