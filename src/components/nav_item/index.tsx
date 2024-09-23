import styles from "./style.module.css";
interface IProp {
  icon: JSX.Element;
  activeIcon: JSX.Element;
  title: string;
  isActive: boolean;
  onclick: () => void;
}

export default function NavItem({
  icon,
  activeIcon,
  title,
  isActive,
  onclick,
}: IProp) {
  return (
    <div className={`${styles["nav-item"]}`} onClick={onclick}>
      {isActive ? activeIcon : icon}
      <p
        className={`text-base pl-4 ${
          isActive ? "font-semibold" : "font-normal"
        } ${styles["title"]}`}
      >
        {title}
      </p>
    </div>
  );
}
