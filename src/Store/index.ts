import { createStore } from 'redux'
import ducks from './ducks'

const store = createStore(ducks)

export { store }
