import {
  GET_MOVIE_DETAIL,
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  CLEAR_DETAIL,
} from "../actions";

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload),
        //moviesFavourites: [...state.moviesFavourites, action.movie],
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        movieDetail: {},
      };
    default:
      return state;
  }
}

export default rootReducer;
