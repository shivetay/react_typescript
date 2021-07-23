import axios from 'axios';
import { ActionType } from './ActionTypes';
import { Dispatch } from 'redux';
import { Action } from './Actions';

export const searchRepo = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPO });
    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: term,
          },
        }
      );
      const fetchData = data.objects.map((res: any) => {
        return res.package.name;
      });
      dispatch({ type: ActionType.SEARCH_REPO_SUCCESS, payload: fetchData });
    } catch (err) {
      dispatch({ type: ActionType.SEARCH_REPO_ERROR, payload: err.message });
    }
  };
};
