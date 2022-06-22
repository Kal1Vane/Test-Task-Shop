import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/App';
import './index.css';
import { MakeFakePlaceCards } from './mocks';
import { store } from './store';
import { setPlacesCard } from './store/card-store/card-store';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const fakeCards = MakeFakePlaceCards();
store.dispatch(setPlacesCard(fakeCards));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

