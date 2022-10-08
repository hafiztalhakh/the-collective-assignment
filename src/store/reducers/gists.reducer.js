import {
  SET_GIST_LOADING,
  SET_ERROR,
  SET_GISTS,
  REMOVE_GISTS
} from '../action_types';

const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const gistsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_GIST_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    case SET_ERROR:
      return {
        ...state,
        isError: payload
      };
    case SET_GISTS:
      return {
        ...state,
        data: payload,
        loading: false
      };
    case REMOVE_GISTS:
      return {
        ...state,
        data: []
      };
    default:
      return { ...state };
  }
};

export default gistsReducer;