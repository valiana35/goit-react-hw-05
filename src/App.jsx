import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { lazy, Suspense } from "react";
import Loader from "./components/loader/Loader";
import NotFoundPage from "./pages/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/movieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/movieReviews/MovieReviews"));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;
