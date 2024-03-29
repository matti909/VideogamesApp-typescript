import { useEffect, useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import CategoryFilter from "../../components/categoryFilter/CategoryFilter";
import { Loader } from "../../components/loader/Loader";
import { Pagination } from "../../components/paginado/Pagination";
import { useAppState } from "../../context/useAppState";
import { Filter } from "../../interfaces/videogames.interface";
import style from "./Home.module.scss";

export const Home = () => {
  const { state } = useAppState();
  const { allVideogames } = state;

  const [loading, setLoading] = useState(true);

  const [filters, setFilter] = useState<Record<string, Filter>>({
    genero: null,
    plataforma: null,
  });

  const matches = useMemo(() => {
    const filterToApply = Object.values(filters).filter(Boolean!);
    let matches = allVideogames;

    for (const filter of filterToApply) {
      matches = matches.filter((el) => el.genres.some(filter!));
    }
    return matches;
  }, [allVideogames, filters]);

  useEffect(() => {
    if (allVideogames.length === 0) {
      setLoading(true);
    }
  }, [allVideogames]);

  useEffect(() => {
    if (allVideogames.length > 0) {
      setLoading(false);
    }
  }, [allVideogames]);

  return (
    <>
      <ToastContainer />

      <aside className={style.side}>
        <CategoryFilter
          games={allVideogames}
          onChange={(filter: Filter) =>
            setFilter((filters) => ({ ...filters, genero: filter }))
          }
        />
      </aside>

      <main>
        {loading ? (
          <div className={style.container__loading}>
            <Loader />
          </div>
        ) : (
          <section className={style.sec}>
            <Pagination matches={matches} />
            <p>Resultados:{matches.length}</p>
          </section>
        )}
      </main>
    </>
  );
};
