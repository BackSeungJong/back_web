import loadable from "@loadable/component";

// 메인
export const MainView = loadable(() => import("./main/View"));

export const UserMngView = loadable(() => import("./userMng/View"));
