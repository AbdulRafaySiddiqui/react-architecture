import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { UserProfile } from "../pages/UserProfile";

export const pages = {
  home: {
    title: "Home",
    route: "/",
    element: <Home />,
  },
  userProfile: {
    title: "Profile",
    route: "/userProfile",
    element: <UserProfile />,
  },
};

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Map the pages */}
      {Object.values(pages).map((page, index) => (
        <Route key={index} path={page.route} element={page.element} />
      ))}

      {/* Not found page, need to be the last route, so if a page route 
          doesn't match any defined pages, it falls to this route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
