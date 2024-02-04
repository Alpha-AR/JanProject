import { createContext } from 'react';

const AppContext = createContext({
  userName: null, 
  setUserName: () => {},
});

export default AppContext;
