import { Post } from "../../common/models";
import { calculatePostTime, formatNumberWithCommas } from "../../utils";
import { IconApp } from "../icon_app";
import {
  CommentIcon,
  LeftIcon,
  LikedIcon,
  LikeIcon,
  MoreIcon,
  RightIcon,
  SaveIcon,
  ShareIcon,
} from "../icons/post";
import { PostItemInput } from "../post_item_input";
import { UserAvatarStory } from "../user_avatar_story";
import ImageGallery from "react-image-gallery";

export const PostItem = ({ post }: { post: Post }) => {
  return (
    <div className={` pb-4 mb-5 border-b border-gray-300`}>
      <div className={`flex items-center pb-3`}>
        <UserAvatarStory
          url={post.user.avatar}
          size={32}
          onClick={() => console.log("avatar")}
          haveSeenBefore={post.user.haveSeenBefore}
        />
        <div className={`flex flex-col grow ml-3 mr-2`}>
          <p className={`text-sm`}>
            <span className="font-semibold "> {post.user.userName} </span>
            <span className="text-gray-400">
              • {calculatePostTime(post.createdAt)} •
            </span>
            <span className="text-blue-500 font-semibold "> Follow</span>
          </p>
          <p className={`text-xs`}>subtitle</p>
        </div>
        <div className="cursor-pointer">
          <MoreIcon />
        </div>
      </div>
      <div className="w-full flex justify-center">
        {/* <img
          className="max-w-[470px] w-full max-h-[585px] rounded-sm"
          src={post.imageUrls[0]}
          alt=""
        /> */}
        <ImageGallery
          infinite={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showThumbnails={false}
          showBullets={true}
          renderLeftNav={(onClick, disabled) => (
            <button
              className="image-gallery-icon image-gallery-left-nav"
              onClick={onClick}
              disabled={disabled}
            >
              <LeftIcon />
            </button>
          )}
          renderRightNav={(onClick, disabled) => (
            <button
              className="image-gallery-icon image-gallery-right-nav"
              onClick={onClick}
              disabled={disabled}
            >
              <RightIcon />
            </button>
          )}
          items={post.imageUrls.map((url) => ({ original: url }))}
        />
      </div>
      <div>
        <div className={`flex my-1 mx-[-8px]`}>
          <div>
            <IconApp
              icon={post.isLiked ? <LikedIcon /> : <LikeIcon />}
              onClick={() => console.log("like")}
            />
          </div>
          <div>
            <IconApp
              icon={<CommentIcon />}
              onClick={() => console.log("comment")}
            />
          </div>
          <div>
            <IconApp
              icon={<ShareIcon />}
              onClick={() => console.log("share")}
            />
          </div>
          <div className={`flex-1 flex justify-end`}>
            <IconApp icon={<SaveIcon />} onClick={() => console.log("save")} />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">
            {formatNumberWithCommas(post.likeCount)} likes
          </p>
        </div>
        <div className="mt-2">
          <p className="text-sm">
            <span className="font-semibold">{post.user.userName} </span>
            <span className=""> {post.content}</span>
          </p>
        </div>
        <div className="text-sm text-gray-500 py-1">
          View all {formatNumberWithCommas(post.commentCount)} comments
        </div>
        <PostItemInput />
      </div>
    </div>
  );
};
