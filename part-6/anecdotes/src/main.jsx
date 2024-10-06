import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import anecdoteReducer from '../reducers/anecdoteReducer';
import filterReducer from '../reducers/filterReducer';
import App from './App.jsx';
import './index.css';

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} stabilityCheck="never">
    <App />
  </Provider>
);
