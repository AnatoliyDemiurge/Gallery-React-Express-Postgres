import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContentStore from './store/ContentStore';
import UserStore from './store/UserStore'

export const Context = createContext(null)
ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    content: new ContentStore(),
  }}>
  <App/>
  </Context.Provider>,
  document.getElementById('root')
);



