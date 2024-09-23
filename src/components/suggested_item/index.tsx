import { User } from "../../common/models";

export const SuggestedItem = ({ item }: { item: User }) => {
  return (
    <div className="flex items-center text-sm ml-1 py-2">
      <div className="mr-3 cursor-pointer">
        <img
          src={item.avatar}
          alt=""
          className="rounded-full"
          style={{ width: "44px", height: "44px" }}
        />
      </div>
      <div className="grow">
        <p className=" cursor-pointer font-semibold">{item.userName}</p>
        <p className="text-secondary-text text-xs">Suggested for you</p>
      </div>
      <div className="text-xs font-semibold text-primary-button cursor-pointer hover:text-primary-hover-button">
        Follow
      </div>
    </div>
  );
};
