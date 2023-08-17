import { useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import CategoryFilter from "../../components/categoryFilter/CategoryFilter";
import { Pagination } from "../../components/paginado/Pagination";
import { useAppState } from "../../context/useAppState";
import { Filter } from "../../interfaces/videogames.interface";

export const Home = () => {
  const { state } = useAppState();
  const { allVideogames } = state;

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

  return (
    <>
      <ToastContainer />
      <aside style={{ minWidth: "6em" }}>
        <CategoryFilter
          games={allVideogames}
          onChange={(filter: Filter) =>
            setFilter((filters) => ({ ...filters, genero: filter }))
          }
        />
      </aside>

      <main>
        <section style={{ flex: "1" }}>
          <Pagination matches={matches} />
        </section>
      </main>
    </>
  );
};
