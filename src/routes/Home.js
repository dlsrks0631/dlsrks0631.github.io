import React, { useState, useEffect, useCallback } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import "../index.css";

function Home({
  isLoggedIn,
  onLogout,
  theme,
  language,
  onToggleTheme,
  onToggleLanguage,
  fullName,
}) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("rating");
  const [genreFilter, setGenreFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(`favorites_${fullName}`);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  // 테마 적용
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // 즐겨찾기 업데이트
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem(`favorites_${fullName}`, JSON.stringify(favorites));
    }
  }, [favorites, isLoggedIn, fullName]);

  const getMovies = useCallback(
    async (page = 1) => {
      try {
        const totalPages = 5; // 가져오고 싶은 페이지 수
        const requests = [];
        for (let i = 1; i <= totalPages; i++) {
          requests.push(
            fetch(
              `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${i}&language=ko-KR`
            ).then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
          );
        }

        const results = await Promise.all(requests);
        const allMovies = results.flatMap((result) => result.results);
        const startIndex = (page - 1) * 20;
        const endIndex = startIndex + 20;
        setMovies(allMovies.slice(startIndex, endIndex)); // 한 페이지당 20개만 보여줌
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies", error);
        // API 호출 실패시
        alert(
          "영화 데이터를 불러오는 중 문제가 발생했습니다. 나중에 다시 시도해주세요."
        );
        setLoading(false);
      }
    },
    [apiKey]
  );

  // useEffect에서 getMovies 호출
  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage, getMovies]);

  // 정렬 및 필터링 핸들러
  const handleSortChange = (e) => setSortOption(e.target.value);
  const handleGenreChange = (e) => setGenreFilter(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // 즐겨찾기 추가/제거 핸들러
  const handleFavoriteToggle = (id, isFavorite) => {
    setFavorites((prevFavorites) =>
      isFavorite
        ? [...prevFavorites, id]
        : prevFavorites.filter((favoriteId) => favoriteId !== id)
    );
  };

  // 로딩 및 에러 처리
  if (loading) {
    return <div className={styles.loading}>로딩 중입니다...</div>;
  }

  if (!movies.length) {
    return <div className={styles.error}>영화를 불러올 수 없습니다.</div>;
  }

  return (
    <div className={styles.page}>
      {/* 컨트롤 UI */}
      <div className={styles.controls}>
        <label>
          정렬 기준:
          <select
            value={sortOption}
            onChange={handleSortChange}
            className={styles.select}
          >
            <option value="rating">별점</option>
            <option value="title">제목</option>
            <option value="favorites">선호 영화</option>
          </select>
        </label>
        <label>
          장르:
          <select
            value={genreFilter}
            onChange={handleGenreChange}
            className={styles.select}
          >
            <option value="all">전체</option>
            <option value="28">액션</option>
            <option value="12">모험</option>
          </select>
        </label>
        <label>
          검색:
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </label>
      </div>

      {/* 영화 목록 */}
      <div className={styles.movies}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            {...movie}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
