import { ActionType } from './ACtionTypes';

interface SearchReposAction {
  type: ActionType.SEARCH_REPO;
}
interface SearchRepoActionSuccess {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}
interface SearchReposActionError {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action =
  | SearchReposAction
  | SearchRepoActionSuccess
  | SearchReposActionError;
