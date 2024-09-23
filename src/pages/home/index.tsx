import { PostItem } from "../../components/post_item";
import UserStories from "../../components/user_stories";
import styles from "./style.module.css";
import { posts } from "../../common/data/list_post";
import { UserProfile } from "../../components/user_profile";
import { SuggestionList } from "../../components/suggestion_list";
import { suggestions } from "../../common/data/list_suggestion";

export default function HomePage() {
  return (
    <div className={`flex justify-center`}>
      <div className={`${styles["feed-container"]}`}>
        <UserStories />
        <div className="flex justify-center">
          <div className="max-w-[470px] w-full">
            {posts?.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles["suggestion-container"]}`}>
        <div className="mt-9">
          <div>
            <UserProfile />
          </div>
          <div className="mt-6 mb-2">
            <SuggestionList suggestions={suggestions} />
          </div>
        </div>
      </div>
    </div>
  );
}
