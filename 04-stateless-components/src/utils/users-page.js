import { USERS_PAGE } from "./constants";

const {NO_USERS, SUBTITLE, TITLE, REPLACE_CHAR}= USERS_PAGE;

export const getTitle = () => TITLE;
export const getSubTitle = (usersLength) => usersLength > 0 ? getConnected(usersLength) : getNoConnected();

const getConnected = (usersLength) => SUBTITLE.replace(REPLACE_CHAR, usersLength)
const getNoConnected = () => NO_USERS;

