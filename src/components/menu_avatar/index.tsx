interface IProp {
  url: string;
  size: number;
  isActive?: boolean;
}
export const MenuAvatar = ({ url, size, isActive }: IProp) => {
  return (
    <img
      src={url}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`rounded-full  ${
        isActive ? "border-2 border-black" : "border"
      }`}
      alt=""
    />
  );
};
