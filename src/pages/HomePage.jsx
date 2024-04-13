import { useEffect, useState } from "react";
import { getTrending } from "../service/movieApi";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getTrending();
        setMovies(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p>Sorry, something went wrong</p>}
        <li>{movies}</li>
      </ul>
    </main>
  );
};

export default HomePage;
