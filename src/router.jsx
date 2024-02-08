import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import LegalNoticesPage from "./Pages/LegalNoticesPage/LegalNoticesPage";
import DashboardClientPage from "./Pages/DashboardClientPage/DashboardClientPage";
import DashboardAdminPage from "./Pages/DashboardAdminPage/DashboardAdminPage";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "Accueil",
        element: <HomePage />,
      },
      {
        path: "Contact",
        element: <ContactPage />,
      },
      {
        path: "Connexion",
        element: <LoginPage />,
      },
      {
        path: "mentions-légales",
        element: <LegalNoticesPage />,
      },
      {
        path: "Tableau de bord client",
        element: <DashboardClientPage />,
      },
      {
        path: "Tableau de bord Admin",
        element: <DashboardAdminPage />,
      },
    ],
  },
]);
