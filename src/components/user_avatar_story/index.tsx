import { CircleAvatar } from "../circle_avatar";

interface IProp {
  url: string;
  size: number;
  onClick: () => void;
  haveSeenBefore: boolean;
}
export const UserAvatarStory = ({
  url,
  size,
  haveSeenBefore,
  onClick,
}: IProp) => {
  return (
    <div
      className={`p-[2px] ${
        haveSeenBefore
          ? "bg-slate-200 rounded-full"
          : "bg-gradient-to-tr from-amber-500 to-fuchsia-600 rounded-full"
      }`}
    >
      <div className="p-[2px] bg-white rounded-full">
        <CircleAvatar url={url} size={size} onClick={onClick} />
      </div>
    </div>
  );
};
