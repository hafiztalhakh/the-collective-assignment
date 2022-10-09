import { getMethod } from 'src/services/config/api';

export const fetchAllGists = (username) => {
  const url = `/users/${username}/gists`
  return getMethod(url)
}

export const fetchGistDetails = (gistId) => {
  const url = `/gists/${gistId}`
  return getMethod(url)
}