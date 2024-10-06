import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import anecdoteReducer from '../reducers/anecdoteReducer';
import App from './App.jsx';
import './index.css';


const store = createStore(anecdoteReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} stabilityCheck="never">
    <App />
  </Provider>
);
