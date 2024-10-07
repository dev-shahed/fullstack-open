import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import anecdoteReducer from '../reducers/anecdoteReducer';
import filterReducer from '../reducers/filterReducer';
import App from './App.jsx';
import './index.css';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
  },
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} stabilityCheck="never">
    <App />
  </Provider>
);
