import { useState } from "react";
import { EmojiIcon } from "./icons/post";

export const PostItemInput = () => {
  const [comment, setComment] = useState<string>("");

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Add a comment..."
        className="grow placeholder-gray-500 bg-inherit w-full outline-none border-transparent focus:border-transparent focus:ring-0 text-sm"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div
        className={`mx-2 text-sm text-blue-500 font-semibold cursor-pointer ${
          !!comment ? "block" : "hidden"
        }`}
      >
        Post
      </div>
      <div className="mr-1 cursor-pointer">
        <EmojiIcon />
      </div>
    </div>
  );
};
