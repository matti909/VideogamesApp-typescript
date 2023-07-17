import { useMemo, useState } from "react";
import { Header } from "../../components/header/Header";
import { Pagination } from "../../components/paginado/Pagination";
import { Filter } from "../../interfaces/videogames.interface";
import { CategoryFilter } from "../../components/categoryFilter/CategoryFilter";
import { useAppState } from "../../context/useAppState";

export const Home = () => {
  const { state } = useAppState();
  const { allVideogames } = state;

  const [filters, setFilter] = useState<Record<string, Filter>>({
    genero: null,
    plataforma: null,
  });

  const matches = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const filterToApply = Object.values(filters).filter(Boolean!);
    let matches = allVideogames;

    for (const filter of filterToApply) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      matches = matches.filter((el) => el.genres.some(filter!));
    }
    return matches;
  }, [allVideogames, filters]);

  return (
    <>
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
