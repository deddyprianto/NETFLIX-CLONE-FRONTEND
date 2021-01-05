import React from "react";
import Row from "./Row";
import "./App.css";
import { dbRequURL } from "./Api";
import Banner from "./Banner";
import Nav from "./Nav";
import { stateValueProvider } from "./StateProvider";
import Hasilcari from "./Hasilcari";
function App() {
  const [{ movie }, dispatch] = stateValueProvider();
  return (
    <div className="App">
      <Nav />
      <Banner />
      {!movie ? (
        <>
          <Row
            title="NETFLIX ORIGINALS"
            fetchURL={dbRequURL.fetchNetflixOriginals}
            isLargeRow={true}
          />
          <Row title="TRENDING NOW" fetchURL={dbRequURL.fetchTrending} />
          <Row title="Top Rated" fetchURL={dbRequURL.fetchTopRated} />
          <Row title="Action Movies" fetchURL={dbRequURL.fetchActionsMovies} />
          <Row title="Horror Movies" fetchURL={dbRequURL.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchURL={dbRequURL.fetchRomanceMovies} />
          <Row title="Docummentaries" fetchURL={dbRequURL.fetchDocumentaries} />
        </>
      ) : (
        <Hasilcari />
      )}
    </div>
  );
}
export default App;
