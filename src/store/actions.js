import store from '.'

export function sample(view) {
    store.dispatch({
        type: 'SET_VIEW',
        payload: view
    })
}