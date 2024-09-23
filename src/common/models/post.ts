import { UserStory } from "../data/list_story";

export interface Post {
  id: string;
  content: string;
  createdAt: string;
  user: UserStory;
  isLiked: boolean;
  imageUrls: string[];
  likeCount: number;
  commentCount: number;
}
