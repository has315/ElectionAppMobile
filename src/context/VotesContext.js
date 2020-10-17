import React from 'react';

const VotesContext = React.createContext({
  votes: [],
  setVotes: () => {},
});

export default VotesContext;
