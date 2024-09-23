interface IProp {
  url: string;
  size: number;
  onClick: () => void;
}
export const CircleAvatar = ({ url, size, onClick }: IProp) => {
  return (
    <img
      src={url}
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={onClick}
      className="rounded-full border"
      alt=""
      draggable="false"
    />
  );
};
