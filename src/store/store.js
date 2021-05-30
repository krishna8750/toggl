import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reduceres/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import app from '../firebase'
import db from '../firebase'

const globleInitState = {}

const store = createStore(rootReducer, globleInitState, applyMiddleware(thunk));

// compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reactReduxFirebase(app), // redux binding for firebase
//     reduxFirestore(db) // redux bindings for firestore
// )


export default store