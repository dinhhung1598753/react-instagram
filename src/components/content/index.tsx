import { ReactNode } from "react";
import style from "./style.module.css";

export default function Content({ children }: { children: ReactNode }) {
  return <div className={`${style.content}`}>{children}</div>;
}
