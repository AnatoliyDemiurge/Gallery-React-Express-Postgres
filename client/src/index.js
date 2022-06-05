import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContentStore from './store/ContentStore';
import UserStore from './store/UserStore'

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL);
ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    content: new ContentStore(),
  }}>
  <App/>,
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

