import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootPage from "../pages/root";
import HomePage from "../pages/home";
import ExplorePage from "../pages/explore";
import ReelPage from "../pages/reel";
import MessagePage from "../pages/message";
import ProfilePage from "../pages/profile";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route path="" element={<HomePage />} index />
      <Route path="explore" element={<ExplorePage />} index />
      <Route path="reel" element={<ReelPage />} index />
      <Route path="message" element={<MessagePage />} index />
      <Route path="profile" element={<ProfilePage />} index />
    </Route>
  )
);
