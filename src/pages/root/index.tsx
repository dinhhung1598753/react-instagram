import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../../layout/sidebar";
import styles from "./style.module.css";
import { useCallback, useEffect, useState } from "react";
import Content from "../../components/content";

export default function RootPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<string>("");
  useEffect(() => {
    handleNavigate(activeTab);
  }, [activeTab]);

  const handleNavigate = useCallback(
    (url: string) => {
      navigate(url, { replace: true });
    },
    [navigate]
  );
  return (
    <div className={`${styles.layout}`}>
      <SideBar activeTab={activeTab} onClickTab={setActiveTab} />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}
