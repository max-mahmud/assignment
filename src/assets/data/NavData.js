import category from "../icons/Category.png";
import user from "../icons/2 User.png";
import heart from "../icons/fi_heart.png";
import paper from "../icons/Paper.png";
import search from "../icons/Search.png";

export const NavData = [
  {
    id: 1,
    title: "Home",
    icon: category,
    path: "/",
  },
  {
    id: 2,
    title: "New Listing",
    icon: user,
    path: "/user",
  },
  {
    id: 3,
    title: "Search",
    icon: search,
    path: "/search",
  },
  {
    id: 4,
    title: "About",
    icon: paper,
    path: "/about",
  },
  {
    id: 5,
    title: "Favorite",
    icon: heart,
    path: "/favorite",
  },
//   {
//     id: 6,
//     title: "Messages",
//     icon: info,
//     path: "/dashboard/message",
//   },
//   {
//     id: 7,
//     title: "Messages",
//     icon: setting,
//     path: "/dashboard/message",
//   },
];