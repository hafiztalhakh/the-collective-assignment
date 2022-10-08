import SuccessAlert from "src/components/alerts/Succes.Alert";
import ErrorAlert from "src/components/alerts/Error.Alert";

import {
  SET_GIST_LOADING,
  SET_ERROR,
  SET_GISTS,
  REMOVE_GISTS
} from "../action_types";

import { fetchAllGists } from "src/services/gists";

export const setLoading = (payload) => async (dispatch) => {
  return dispatch({ type: SET_GIST_LOADING, payload });
}

export const getGists = (username) => async (dispatch) => {
  try {
    const { data } = await fetchAllGists(username);
    console.log(data)
  } catch (error) {
    ErrorAlert(error?.response?.data?.message);
    dispatch(setLoading(false));
  }
}