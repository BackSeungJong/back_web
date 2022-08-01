import loadable from "@loadable/component";

// 메인
export const MainView = loadable(() => import("./main/View"));
// 회원관리
export const UserMngView = loadable(() => import("./userMng/View"));
// 관리자관리
export const AdminView = loadable(() => import("./adminMng/View"));
