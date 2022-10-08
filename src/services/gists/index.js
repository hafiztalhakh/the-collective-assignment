import { getMethod } from 'src/services/config/api';

export const fetchAllGists = (username) => {
  const url = `/users/${username}/gists`
  return getMethod(url)
}