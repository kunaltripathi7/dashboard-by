interface Props {
  src: string;
}

const UserAvatar = ({ src }: Props) => {
  return (
    <div className="h-10 w-10 rounded-full border-[2.5px] border-[#2872FA] overflow-hidden">
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

export default UserAvatar;
