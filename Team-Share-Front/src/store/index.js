// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducer';
import connectionMiddleware from './connectionMiddleware';
import projectCreationMiddleware from './projectCreationMiddleware';
import profileModificationMiddleware from './profileModificationMiddleware';
import requestsMiddleware from './requestsMiddleware';
// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    connectionMiddleware,
    projectCreationMiddleware,
    profileModificationMiddleware,
    requestsMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

// == Export
export default store;
