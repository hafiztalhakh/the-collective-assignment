import ErrorAlert from "src/components/alerts/Error.Alert";

import {
  SET_LOADING,
  SET_GIST_LOADING,
  // SET_ERROR,
  SET_GISTS,
  SET_GIST_DETAILS
} from "../action_types";

import { fetchAllGists, fetchGistDetails } from "src/services/gists";

export const setLoading = (payload) => async (dispatch) => {
  return dispatch({ type: SET_LOADING, payload });
}

export const setGistLoading = (payload) => async (dispatch) => {
  return dispatch({ type: SET_GIST_LOADING, payload });
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
      dispatch(setGistLoading(false));
    }
  } catch (error) {
    ErrorAlert(error?.response?.data?.message);
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
    ErrorAlert(error?.response?.data?.message);
    dispatch(setLoading(false));
  }
}