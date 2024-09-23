import { UserAvatarStory } from "../user_avatar_story";
import { listStories } from "../../common/data/list_story";

import { useDraggable } from "react-use-draggable-scroll";
import { MutableRefObject, useRef } from "react";

export default function UserStories() {
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref);
  return (
    <div
      className={`mt-4 mb-6 py-2 bg-white overflow-x-auto whitespace-nowrap`}
      ref={ref}
      {...events}
    >
      {listStories.map((story) => (
        <div className="inline-block px-1 cursor-pointer" key={story.id}>
          <div className="flex flex-col justify-center items-center">
            <UserAvatarStory
              url={story.avatar}
              size={56}
              onClick={() => console.log("avatar")}
              haveSeenBefore={story.haveSeenBefore}
            />
            <p
              className={`px-[2px] pt-1 max-w-[74px] overflow-hidden truncate text-xs ${
                story.haveSeenBefore ? "text-gray-500" : "text-black"
              }`}
            >
              {story.userName}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
