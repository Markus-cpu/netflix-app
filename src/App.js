import React from 'react';
import './App.css';
import Row from "./components/Row/Row";
import requests from "./requests";

const App = () => {
  return (
      <div className="app">
          <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow={true}
          />
          <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
          {/*<Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>*/}
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
  )
}

export default App;