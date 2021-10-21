import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// importação dos reducers
import userReducer from './reducers/UserReducer';

// combinar todos os reducers do projeto
const reducers = combineReducers({
    userState: userReducer
});

// recuperar o Store da LocalStorage
const localState = localStorage.getItem('applicationState')
 ? JSON.parse(localStorage.getItem('applicationState'))
 : {};

 const store = createStore(
    reducers,
    localState,
    applyMiddleware(thunk)
 );

 store.subscribe( function () {
    localStorage.setItem('applicationState', JSON.stringify(store.getState()));
});

export default store;


