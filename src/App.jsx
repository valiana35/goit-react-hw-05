import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import { lazy, Suspense } from "react";
import Loader from "./components/loader/Loader";
import NotFoundPage from "./pages/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage.jsx"));
const MovieCast = lazy(() => import("./components/movieCast/MovieCast.jsx"));
const MovieReviews = lazy(() =>
  import("./components/movieReviews/MovieReviews.jsx")
);

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
