import { useState } from "react";
import {
  ActiveCreateIcon,
  ActiveExploreIcon,
  ActiveHomeIcon,
  ActiveMoreIcon,
  ActiveNotificationIcon,
  ActiveReelIcon,
  ActiveSearchIcon,
  CreateIcon,
  ExploreIcon,
  HomeIcon,
  IgLogoIcon,
  MoreIcon,
  NotificationIcon,
  ReelIcon,
  SearchIcon,
} from "../../components/icons";
import { InstagramLogo } from "../../components/images";
import NavItem from "../../components/nav_item";
import styles from "./style.module.css";
import { MessageIcon } from "../../components/icons/ic_message";
import { MenuAvatar } from "../../components/menu_avatar";

interface NavItem {
  title: string;
  path?: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

const defaultNavItems: NavItem[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    activeIcon: <ActiveHomeIcon />,
    path: "",
  },
  {
    title: "Search",
    icon: <SearchIcon />,
    activeIcon: <ActiveSearchIcon />,
  },
  {
    title: "Explore",
    icon: <ExploreIcon />,
    activeIcon: <ActiveExploreIcon />,
    path: "explore",
  },
  {
    title: "Reels",
    icon: <ReelIcon />,
    activeIcon: <ActiveReelIcon />,
    path: "reel",
  },
  {
    title: "Messages",
    icon: <MessageIcon />,
    activeIcon: <ActiveReelIcon />,
    path: "message",
  },
  {
    title: "Notifications",
    icon: <NotificationIcon />,
    activeIcon: <ActiveNotificationIcon />,
  },
  {
    title: "Create",
    icon: <CreateIcon />,
    activeIcon: <ActiveCreateIcon />,
  },
  {
    title: "Profile",
    icon: (
      <MenuAvatar
        url="https://visanuocngoai.vn/wp-content/uploads/2021/08/thu-do-nuoc-anh-la-gi-1.jpg"
        size={24}
      />
    ),
    activeIcon: (
      <MenuAvatar
        url="https://visanuocngoai.vn/wp-content/uploads/2021/08/thu-do-nuoc-anh-la-gi-1.jpg"
        size={24}
        isActive
      />
    ),
    path: "profile",
  },
];

const navItemHideOnMobile = ["Search", "Notifications"];
interface IProp {
  activeTab: string;
  onClickTab: (s: string) => void;
}
export default function SideBar({ activeTab, onClickTab }: IProp) {
  const [isActiveMore, setIsActiveMore] = useState<boolean>(false);

  const handleActiveMoreSetting = () => {
    setIsActiveMore((prev) => !prev);
  };

  return (
    <div className={`${styles.sidebar}`}>
      <div
        className={`px-3 pt-2 pb-5 flex flex-col h-screen ${styles["sidebar-container"]}`}
      >
        <div
          className={`cursor-pointer mb-5 px-3 pt-6 pb-4 ${styles["ig-logo"]}`}
        >
          <InstagramLogo />
        </div>
        <div
          className={`cursor-pointer mb-5 px-3 pt-6 pb-4 ${styles["ig-logo-icon"]}`}
        >
          <IgLogoIcon />
        </div>
        <div className={`grow ${styles["nav-items"]}`}>
          {defaultNavItems.map((item, idx) => (
            <div
              key={idx}
              className={`${
                navItemHideOnMobile.includes(item.title)
                  ? styles["hide-on-mobile"]
                  : ""
              }`}
            >
              <NavItem
                icon={item.icon}
                activeIcon={item.activeIcon}
                title={item.title}
                isActive={item.path === activeTab}
                onclick={() => onClickTab(item.path || "")}
              />
            </div>
          ))}
        </div>
        <div className={`${styles["more-setting"]}`}>
          <NavItem
            icon={<MoreIcon />}
            activeIcon={<ActiveMoreIcon />}
            title={"More"}
            isActive={isActiveMore}
            onclick={() => handleActiveMoreSetting()}
          />
        </div>
      </div>
    </div>
  );
}
