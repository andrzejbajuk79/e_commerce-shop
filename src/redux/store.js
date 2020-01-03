import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import {composeWithDevTools}  from 'redux-devtools-extension'

//  const middleware = [logger];
const middleware = [];

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

//  export const store = createStore(rootReducer, applyMiddleware(...middlewares,composeWithDevTools));

 export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));




// export const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default { store, persistor };

// const store = createStore(moviesReducer,composeWithDevTools());