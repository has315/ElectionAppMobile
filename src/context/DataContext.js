import React from 'react';

const DataContext = React.createContext({
  user: null,
  votes: [],
  setUser: () => {},
  setVotes: () => {},
});

export default DataContext;
