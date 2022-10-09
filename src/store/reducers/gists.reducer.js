import {
  SET_LOADING,
  SET_GIST_LOADING,
  SET_ERROR,
  SET_GISTS,
  SET_GIST_DETAILS,
  REMOVE_GISTS
} from '../action_types';

const initialState = {
  data: [],
  details: {},
  isLoading: true,
  loading: true,
  isError: false
};

const gistsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case SET_LOADING:
      return {
        ...state,
        loading: payload
      };
    case SET_ERROR:
      return {
        ...state,
        isError: payload
      };
    case SET_GIST_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    case SET_GISTS:
      return {
        ...state,
        data: payload,
        isLoading: false
      };
    case SET_GIST_DETAILS:
      return {
        ...state,
        details: payload,
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