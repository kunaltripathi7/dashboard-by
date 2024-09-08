export type Props = {
  fill: string;
};

const Chats = ({ fill }: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 19 3 H 4.99 c -1.11 0 -1.98 0.9 -1.98 2 L 3 19 c 0 1.1 0.88 2 1.99 2 H 19 c 1.1 0 2 -0.9 2 -2 V 5 c 0 -1.1 -0.9 -2 -2 -2 m 0 12 h -4 c 0 1.66 -1.35 3 -3 3 s -3 -1.34 -3 -3 H 4.99 V 5 H 19 Z m -3 -5 h -2 V 7 h -4 v 3 H 8 l 4 4 Z"
      fill={fill}
    />
  </svg>
);

export default Chats;
