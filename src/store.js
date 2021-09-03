import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    //
    reducer,
    compose( applyMiddleware(thunk),
        typeof window === 'object' && 
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
     //Este codigo Evita que la app se quiebre en navegadores que no cuenten con redux dev tools
    
    )
);

export default store;