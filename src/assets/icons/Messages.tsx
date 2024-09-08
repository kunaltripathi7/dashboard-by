export type Props = {
  fill: string;
};

const Messages = ({ fill }: Props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 21 6 h -2 v 9 H 6 v 2 c 0 0.55 0.45 1 1 1 h 11 l 4 4 V 7 c 0 -0.55 -0.45 -1 -1 -1 m -4 6 V 3 c 0 -0.55 -0.45 -1 -1 -1 H 3 c -0.55 0 -1 0.45 -1 1 v 14 l 4 -4 h 10 c 0.55 0 1 -0.45 1 -1"
      fill={fill}
    />
  </svg>
);

export default Messages;
