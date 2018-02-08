import store from '.'

export function setView(view) {
    store.dispatch({
        type: 'SET_VIEW',
        payload: view
    })
}