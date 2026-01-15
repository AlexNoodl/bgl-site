import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M-0.5 9.09474C6.83822 8.99368 8.50524 2.98947 8.42147 0H14.5785C14.5785 5.05263 12.6518 8.16842 11.6885 9.09474H23.5V14.9053C15.8602 15.2084 14.3691 21.0947 14.5785 24H8.42147C8.42147 19.2505 10.2644 15.9579 11.1859 14.9053H-0.5V9.09474Z"
        fill="white"
      />
    </svg>
  );
}
