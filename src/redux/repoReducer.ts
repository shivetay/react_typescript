interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: RepoState, action: Action): RepoState => {
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
