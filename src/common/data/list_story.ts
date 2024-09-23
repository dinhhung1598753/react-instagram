import { User, Story } from "../models";

export type UserStory = User & Story;

export const listStories: UserStory[] = [
  {
    id: "1",
    userName: "SkyWalker77",
    displayName: "Nguyen Van A",
    haveSeenBefore: true,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    userName: "OceanBreeze09",
    displayName: "Nguyen Van B",
    haveSeenBefore: false,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    userName: "LunarExplorer",
    displayName: "Nguyen Van C",
    haveSeenBefore: true,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    userName: "MaverickAce",
    displayName: "Nguyen Van D",
    haveSeenBefore: false,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "5",
    userName: "CrimsonFalcon",
    displayName: "Nguyen Van E",
    haveSeenBefore: true,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "6",
    userName: "PixelCrafter",
    displayName: "Nguyen Van F",
    haveSeenBefore: false,
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: "7",
    userName: "EchoBlaze42",
    displayName: "G Nguyen Van G",
    haveSeenBefore: true,
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: "8",
    userName: "SwiftSparrow",
    displayName: "Nguyen Van E",
    haveSeenBefore: false,
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "9",
    userName: "SilverArrow99",
    displayName: "Nguyen Van E",
    haveSeenBefore: false,
    avatar: "https://i.pravatar.cc/150?img=9",
  },
];
