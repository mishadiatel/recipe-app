import React, { Suspense } from "react";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PagesWrapper from "./pages/PagesWrapper/PagesWrapper";
import HomePage from "./pages/HomePage/HomePage";
import { loader as searchResultsLoader } from "./pages/SearchPage/SearchPage";
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const RecipePage = React.lazy(() => import("./pages/RecipePage/RecipePage"));
const Footer = React.lazy(() => import("./components/footer/Footer"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PagesWrapper />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "recipe/:recipetitle",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <RecipePage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "search/:searchElement",
      element: (
        <Suspense
          fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
        >
          <SearchPage />
        </Suspense>
      ),
      loader: searchResultsLoader,
    },
  ]);

  return (
    <div className="App">
      <div className="main">
        <RouterProvider router={router} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
