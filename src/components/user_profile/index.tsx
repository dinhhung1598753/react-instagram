export const UserProfile = () => {
  return (
    <div className="flex items-center text-sm px-4">
      <div className="mr-3">
        <img
          src="https://i.pravatar.cc/150?img=1"
          alt=""
          className="rounded-full"
          style={{ width: "44px", height: "44px" }}
        />
      </div>
      <div className="grow">
        <p className="font-semibold">username</p>
        <p className="text-secondary-text">displayname</p>
      </div>
      <div className="cursor-pointer text-xs font-semibold text-primary-button hover:text-primary-hover-button">
        Switch
      </div>
    </div>
  );
};
