import logo from "../../src/assets/social_media_logo.png"
import login from "../../src/assets/login_image.jpg"
import short_logo from "../../src/assets/short LOGO.png"

export const logoImageURL =
  logo;

export const loginPageHeroImg =
  login;

export const logoImg =
  short_logo;

export const defaultBgImage =
  "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687604239/socialMedia/buzzbird-default-bg_deqxio.png";

export const dummyProfileImage =
  "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603602/socialMedia/AvatarTwo_isbynr.png";

export const errorImage =
  "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687994901/socialMedia/Oops_404_Error_with_a_broken_robot-cuate_lzgce5.svg";

export const avatarImages = [
  "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603622/socialMedia/AvatarSix_wqf4ya.png",
  "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603611/socialMedia/AvatarFour_otab93.png",
  "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603607/socialMedia/AvatarThree_vyhlpx.png",
  "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603615/socialMedia/AvatarFive_siczhk.png",
  "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603596/socialMedia/AvatarOne_a3knbz.png",
  "https://res.cloudinary.com/dxnbnviuz/image/upload/v1687603602/socialMedia/AvatarTwo_isbynr.png",
];

export const guestUserLoginDetails = {
  username: "emilysmith",
  password: "emily@123Smith",
};

export const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const actionTypes = {
  GET_ALL_POSTS: "GET_ALL_POSTS",
  LIKE_POST: "LIKE_POST",
  DISLIKE_POST: "DISLIKE_POST",
  FILTER_POSTS: "FILTER_POSTS",
  GET_ALL_USERS: "GET_ALL_USERS",
  GET_ALL_BOOKMARKS: "GET_ALL_BOOKMARKS",
  ADD_BOOKMARK: "ADD_BOOKMARK",
  REMOVE_BOOKMARK: "REMOVE_BOOKMARK",
  SEARCH_USER: "SEARCH_USER",
  CREATE_NEW_POST: "CREATE_NEW_POST",
  DELETE_POST: "DELETE_POST",
  EDIT_POST: "EDIT_POST",
  GET_ONE_USER: "GET_ONE_USER",
  UPDATE_FOLLOW_USER: "UPDATE_FOLLOW_USER",
  EDIT_USER_PROFILE: "EDIT_USER_PROFILE",
  SET_PAGE: "SET_PAGE",
  SET_IS_NEXT_POST_LOADING: "SET_IS_NEXT_POST_LOADING",
  GET_SINGLE_POST: "GET_SINGLE_POST",
  ADD_NEW_COMMENT: "ADD_NEW_COMMENT",
  DELETE_COMMENT: "DELETE_COMMENT",
  EDIT_COMMENT: "EDIT_COMMENT",
};
