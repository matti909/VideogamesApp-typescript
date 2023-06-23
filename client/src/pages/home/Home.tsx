import Header from "../../components/header/Header";
import { Pagination } from "../../components/paginado/Pagination";
import { useAppState } from "../../context/AppStateContext";

export const Home = () => {
  const { state } = useAppState();
  const { allVideogames } = state;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section style={{ flex: "1" }}>
          <Pagination games={allVideogames} />
        </section>
      </main>
    </>
  );
};
