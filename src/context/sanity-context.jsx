import React from 'react';

export const SanityContext = React.createContext([ 'abc' ]);

export const SanityProvider = ({ data, children }) => (
  <SanityContext.Provider value={ data }>{ children }</SanityContext.Provider>
);

export const useSanity = type => {
  const context = React.useContext(SanityContext);

  if (context === undefined) {
    throw new Error('useSanity must be used within a SanityProvider');
  }

  if (type === undefined) {
    return context;
  }

  const filteredData = context.filter(item => item._type === type);
  return filteredData.length === 1 ? filteredData[0] : filteredData;
};
