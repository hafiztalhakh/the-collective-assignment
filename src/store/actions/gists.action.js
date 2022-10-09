import { fetchAllGists, fetchGistDetails } from "src/services/gists";
import ErrorAlert from "src/components/alerts/Error.Alert";
import {
  SET_LOADING,
  SET_GIST_LOADING,
  SET_ERROR,
  SET_GISTS,
  SET_GIST_DETAILS,
  REMOVE_GISTS
} from "../action_types";

export const setLoading = (payload) => async (dispatch) => {
  return dispatch({ type: SET_LOADING, payload });
}

export const setGistLoading = (payload) => async (dispatch) => {
  return dispatch({ type: SET_GIST_LOADING, payload });
}

export const setError = (payload) => async (dispatch) => {
  return dispatch({ type: SET_ERROR, payload })
}

export const removeGists = () => async (dispatch) => {
  return dispatch({ type: REMOVE_GISTS })
}

export const getGists = (username) => async (dispatch) => {
  try {
    const { data } = await fetchAllGists(username);
    if (data?.length > 0) {
      dispatch({
        type: SET_GISTS,
        payload: data
      })
    } else {
      dispatch(removeGists())
      dispatch(setGistLoading(false));
    }
  } catch (error) {
    ErrorAlert("Some problem while making call");
    dispatch(setError(error))
    dispatch(setGistLoading(false));
  }
}

export const getGistDetails = (id) => async (dispatch) => {
  try {
    const { data } = await fetchGistDetails(id);
    if (data) {
      dispatch({
        type: SET_GIST_DETAILS,
        payload: data
      })
    } else {
      dispatch(setLoading(false));
    }
  } catch (error) {
    ErrorAlert("Some problem while making call");
    dispatch(setError(error));
    dispatch(removeGists())
    dispatch(setLoading(false));
  }
}