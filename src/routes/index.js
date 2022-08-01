import { useRoutes } from "react-router-dom";

import * as pages from "/src/pages";

function Router() {
  return useRoutes([
    {
      element: <pages.MainView />,
      children: [{ path: "/userMng/view", element: <pages.UserMngView /> }],
    },
  ]);
}

export default Router;
