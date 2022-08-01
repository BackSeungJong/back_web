import { useRoutes, Navigate } from "react-router-dom";

import * as pages from "pages";
import { PageLayout } from "components";

function Router() {
  return useRoutes([
    // 리다이렉트
    {
      path: "/",
      element: <Navigate to={"/main/view"} />,
    },
    {
      // element: <PageLayout />,
      children: [
        { path: "/main/view", element: <pages.MainView /> },
        { path: "/userMng/view", element: <pages.UserMngView /> },
        { path: "/adminMng/view", element: <pages.AdminView /> },
      ],
    },
  ]);
}

export default Router;
