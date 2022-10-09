import ErrorAlert from "src/components/alerts/Error.Alert";

import {
  SET_GIST_LOADING,
  // SET_ERROR,
  SET_GISTS,
  // REMOVE_GISTS
} from "../action_types";

import { fetchAllGists, fetchGistDetails } from "src/services/gists";

export const setLoading = (payload) => async (dispatch) => {
  return dispatch({ type: SET_GIST_LOADING, payload });
}

export const getGists = (username) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await fetchAllGists(username);
    if (data?.length > 0) {
      const gistsData = await Promise.all(
        data.map(async (el) => {
          const { data } = await fetchGistDetails(el?.id);
          let tempForks = []
          if (data?.length > 0) {
            tempForks = data?.forks?.length > 0 ? data?.forks : []
          }
          return { ...el, forks: tempForks }
        })
      );
      dispatch({
        type: SET_GISTS,
        payload: gistsData
      })
    } else {
      dispatch(setLoading(false));
    }
  } catch (error) {
    ErrorAlert(error?.response?.data?.message);
    dispatch(setLoading(false));
  }
}