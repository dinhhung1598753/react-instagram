import { Post } from "../models";

export const posts: Post[] = [
  {
    id: "1",
    content: "Exploring the mountains this weekend! #AdventureTime",
    createdAt: "2024-09-10T08:45:00Z",
    user: {
      id: "101",
      displayName: "John Doe",
      avatar:
        "https://api.nongthonviet.com.vn/media/2024/09/11/66e0fbf4ea340d6b43879916_gt01_high.jpg", // Jennie from BLACKPINK
      userName: "john_doe",
      haveSeenBefore: false,
    },
    isLiked: false,
    imageUrls: [
      "https://cdn.tuoitre.vn/thumb_w/640/471584752817336320/2023/2/8/jennie-1664529951896406065518-1675850656917967930881.jpg",
      "https://kenh14cdn.com/203336854389633024/2024/7/23/240715-halcyon-magazine-instagram-update-with-lisa-documents-1-1144-1721712032782-1721712035687158228301.jpeg",
      "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/8/15/photo-1629016087831-16290160885051529933221.jpg",
    ],
    likeCount: 3520,
    commentCount: 895,
  },
  {
    id: "2",
    content: "Had a great day at the beach! #SunsetLover",
    createdAt: "2024-09-09T17:30:00Z",
    user: {
      id: "102",
      displayName: "Emily Watson",
      avatar:
        "https://cdnphoto.dantri.com.vn/HrjEuZO3wRIczPNzvUCPjn3XQoE=/thumb_w/1020/2024/06/28/lisa-10-1719542969707.jpg", // Lisa from BLACKPINK
      userName: "emilywatson",
      haveSeenBefore: true,
    },
    isLiked: true,
    imageUrls: [
      "https://kenh14cdn.com/203336854389633024/2024/7/23/240715-halcyon-magazine-instagram-update-with-lisa-documents-1-1144-1721712032782-1721712035687158228301.jpeg",
    ],
    likeCount: 4735,
    commentCount: 1120,
  },
  {
    id: "3",
    content: "Trying out a new recipe tonight. Wish me luck!",
    createdAt: "2024-09-08T12:15:00Z",
    user: {
      id: "103",
      displayName: "Michael Smith",
      avatar:
        "https://media.vov.vn/sites/default/files/styles/large/public/2020-07/3385130-hoc-irene-red-velvet-chie-0.jpg",
      userName: "mikesmith",
      haveSeenBefore: false,
    },
    isLiked: false,
    imageUrls: [
      "https://cdn-i.vtcnews.vn/resize/th/upload/2021/07/07/38d6ee6d5b455a6b815e0920c6bfb0b4-06261040.jpg",
    ], // Irene from Red Velvet
    likeCount: 4410,
    commentCount: 965,
  },
  {
    id: "4",
    content: "Finished a 5K run! Feeling awesome! #FitnessGoals",
    createdAt: "2024-09-07T06:45:00Z",
    user: {
      id: "104",
      displayName: "Sarah Lee",
      avatar:
        "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/25/1220914/Rose.jpg?w=800&h=420&crop=auto&scale=both",
      userName: "sarahlee",
      haveSeenBefore: false,
    },
    isLiked: true,
    imageUrls: [
      "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/8/15/photo-1629016087831-16290160885051529933221.jpg",
    ],
    likeCount: 8910,
    commentCount: 2210,
  },
  {
    id: "5",
    content: "Celebrating my birthday with close friends. 🎉 #Blessed",
    createdAt: "2024-09-06T19:00:00Z",
    user: {
      id: "105",
      displayName: "David Clark",
      avatar:
        "https://images2.thanhnien.vn/528068263637045248/2024/3/12/js1-17102650444101039490703.jpeg",
      userName: "davidclark",
      haveSeenBefore: false,
    },
    isLiked: false,
    imageUrls: [
      "https://media.phunutoday.vn/files/content/2023/06/29/blackpink-s-jisoo-in-0837.jpg",
    ],
    likeCount: 7680,
    commentCount: 2150,
  },
  {
    id: "6",
    content: "This sunset view is unreal! #Nature",
    createdAt: "2024-09-05T18:10:00Z",
    user: {
      id: "106",
      displayName: "Natalie Perez",
      avatar:
        "https://vcdn1-giaitri.vnecdn.net/2022/07/11/img-4971-jpg-1657538597.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=bA8CVzkBC3iZCRiiA_889w",
      userName: "natperez",
      haveSeenBefore: false,
    },
    isLiked: true,
    imageUrls: [
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/10/962246/Suzy3.jpeg",
    ], // Momo from TWICE
    likeCount: 8845,
    commentCount: 3175,
  },
  {
    id: "7",
    content: "Late-night coding session. #DeveloperLife",
    createdAt: "2024-09-04T23:55:00Z",
    user: {
      id: "107",
      displayName: "Chris Johnson",
      avatar:
        "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/10/22/rb9qqph9p25xoloseelboy0gg5o0kem47rojgczy27xjvstmfu7fckdm9s6hmi21hjibo9xqxb0u80-1696520026011118970012-1697940999439698204216-0-0-671-1280-crop-16979416206401146705732.jpg",
      userName: "chris_j",
      haveSeenBefore: false,
    },
    isLiked: false,
    imageUrls: [
      "https://2sao.vietnamnetjsc.vn/images/2020/12/09/14/57/suzy-600x777.jpg",
    ], // Dahyun from TWICE
    likeCount: 7560,
    commentCount: 2110,
  },
  {
    id: "8",
    content: "Excited for the weekend road trip! #RoadTrip",
    createdAt: "2024-09-03T15:20:00Z",
    user: {
      id: "108",
      displayName: "Samantha Green",
      avatar: "https://2sao.vietnamnetjsc.vn/images/2021/10/28/16/30/ba5.png",
      userName: "samgreen",
      haveSeenBefore: false,
    },
    isLiked: true,
    imageUrls: [
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/4/17/1035070/Emma-Watson-Voc-Dang.jpg",
    ],
    likeCount: 9990,
    commentCount: 4220,
  },
  {
    id: "9",
    content: "Just adopted a puppy! 🐶 #NewFurryFriend",
    createdAt: "2024-09-02T11:00:00Z",
    user: {
      id: "109",
      displayName: "Alex Brown",
      avatar:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/wonder-woman-1984-gal-gadot-as-diana.jpg",
      userName: "alexbrown",
      haveSeenBefore: false,
    },
    isLiked: false,
    imageUrls: [
      "https://images.nightcafe.studio/jobs/g82DEq3ctoyyPqp3vg3L/g82DEq3ctoyyPqp3vg3L--1--gkgf7.jpg?tr=w-1600,c-at_max",
    ],
    likeCount: 15200,
    commentCount: 5310,
  },
  {
    id: "10",
    content: "Finished reading an amazing book. 📚 #BookLover",
    createdAt: "2024-09-01T20:45:00Z",
    user: {
      id: "110",
      displayName: "Rachel Adams",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnEXX9-TEHYOxE8AyNpvZeWEtAHPWKz9rXg&s",
      userName: "racheladams",
      haveSeenBefore: false,
    },
    isLiked: true,
    imageUrls: [
      "https://bloganchoi.com/wp-content/uploads/2023/01/aespa-karina6.jpg",
    ], // Karin]a
    likeCount: 9750,
    commentCount: 4135,
  },
];
