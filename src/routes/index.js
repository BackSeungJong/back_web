import { useRoutes } from "react-router-dom";

import * as pages from "pages";

function Router() {
  return useRoutes([
    {
      element: <pages.MainView />,
      children: [
        { path: "/", element: <pages.MainView /> },
        { path: "/userMng/view", element: <pages.UserMngView /> },
      ],
    },
  ]);
}

export default Router;
