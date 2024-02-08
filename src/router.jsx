import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ConnexionPage from "./Pages/ConnexionPage/ConnexionPage";
import LegalNoticesPage from "./Pages/LegalNoticesPage/LegalNoticesPage";
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
        path: "Contact",
        element: <ContactPage />,
      },
      {
        path: "Connexion",
        element: <ConnexionPage />,
      },
      {
        path: "mentions-légales",
        element: <LegalNoticesPage />,
      },
    ],
  },
]);
