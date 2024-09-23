export const IconApp = ({
  icon,
  onClick,
}: {
  icon: JSX.Element;
  onClick: () => void;
}) => {
  return (
    <div className={`p-2 cursor-pointer hover:opacity-50`} onClick={onClick}>
      {icon}
    </div>
  );
};
