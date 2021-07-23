import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import RepoList from './RepoList';

const RepoSearch = () => {
  return (
    <div>
      <h1>Repo search</h1>
      <RepoList />
    </div>
  );
};

export default RepoSearch;
