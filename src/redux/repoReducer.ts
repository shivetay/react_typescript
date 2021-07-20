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
  type: 'SEARCH_REPO';
}
interface SearchRepoActionSuccess {
  type: 'SEARCH_REPO_SUCCESS';
  payload: string[];
}
interface SearchReposActionError {
  type: 'SEARCH_REPO_ERROR';
  payload: string;
}

const reducer = (
  state: RepoState,
  action: SearchReposAction | SearchRepoActionSuccess | SearchReposActionError
): RepoState => {
  switch (action.type) {
    case 'SEARCH_REPO':
      return {
        loading: true,
        error: null,
        data: [],
      };
    case 'SEARCH_REPO_ERROR':
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    case 'SEARCH_REPO_SUCCESS':
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
