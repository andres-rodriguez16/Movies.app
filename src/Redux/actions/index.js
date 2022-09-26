
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL"
export const GET_MOVIES = "GET_MOVIES"
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE"
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE"
export const CLEAR_DETAIL = "CLEAR_DETAIL"


export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=f15072e7&s=${titulo}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIES, payload: json });
      })
      .catch(error => console.error(error));
  };
}

export const addMovieFavorite = (payload) => {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload: payload,
  }
}

export const getMovieDetail = (idMovie) => {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=198173e9&i=" + idMovie)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
      })
      .catch(error => console.error(error));
  };
}


export const removeMovieFavorite = (id) => {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: id
  }
}

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL
  }
}