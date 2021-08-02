import React from 'react';
import Movie from './Movie';
import axios from 'axios';
import './App.css';

// state 사용하기
// 동적으로 갱신되는 데이터를 사용하기 위해
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    // axios로 API를 받아오는데 시간이 걸리므로 
    // JS는 비동기방식인데, async가 걸린 함수는 await가 걸린 코드의 실행이 끝날 때까지 
    // 다음 코드로 진행하지 않고 대기한다.

    // 기존 방식
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    // console.log(movies.data.data.movies)

    // ES6 ECMA script 방식
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }); // setState({ movies })만 해도 { movies: movies }와 동일하게 동작한다.

  }

  // componentDidMount()는 component가 실행 된 후 동작하기 때문에 data를 fetch할 때 사용한다.
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; // state안의 데이터를 바로 사용할 수 있도록 변수 지정
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;