interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface Action {
//   type: string;
//   payload?: any;
// }

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

type Action =
  | SearchReposAction
  | SearchRepoActionSuccess
  | SearchReposActionError;

enum ActionType {
  SEARCH_REPO = 'SEARCH_REPO',
  SEARCH_REPO_SUCCESS = 'SEARCH_REPO_SUCCESS',
  SEARCH_REPO_ERROR = 'SEARCH_REPO_ERROR',
}

const reducer = (state: RepoState, action: Action): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPO_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    case ActionType.SEARCH_REPO_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
