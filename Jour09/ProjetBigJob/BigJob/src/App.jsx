import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AdminPage } from "./pages/Admin";
import { AuthenticatedLayout } from "./pages/Authenticated";
import { ErrorPage } from "./pages/Error";
import { LoginPage } from "./pages/Login";
import { ModeratorPage } from "./pages/Moderator";
import { RootLayout } from "./pages/Root";
import { SignupPage } from "./pages/Signup";
import { UserPage } from "./pages/User";
import { RequireAuth } from "./utils/RequireAuth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      {
        path: "/admin",
        element: (
          <RequireAuth protect="admin">
            <AuthenticatedLayout>
              <AdminPage />
            </AuthenticatedLayout>
          </RequireAuth>
        ),
      },
      {
        path: "/moderator",
        element: (
          <RequireAuth protect="moderator">
            <AuthenticatedLayout>
              <ModeratorPage />
            </AuthenticatedLayout>
          </RequireAuth>
        ),
      },
      {
        path: "/user",
        element: (
          <RequireAuth protect="user">
            <AuthenticatedLayout>
              <UserPage />
            </AuthenticatedLayout>
          </RequireAuth>
        ),
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
