export type Props = {
  fill: string;
};

const MindMap = ({ fill }: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 10 10.02 h 5 V 21 h -5 Z M 17 21 h 3 c 1.1 0 2 -0.9 2 -2 v -9 h -5 Z m 3 -18 H 5 c -1.1 0 -2 0.9 -2 2 v 3 h 19 V 5 c 0 -1.1 -0.9 -2 -2 -2 M 3 19 c 0 1.1 0.9 2 2 2 h 3 V 10 H 3 Z"
      fill={fill}
    />
  </svg>
);

export default MindMap;
