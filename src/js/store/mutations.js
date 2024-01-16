export default {
    addItem(state, payload) {
        state.items.push(payload);

        return state;
    },
    clearItem(state, payload) {
        state.items.splice(payload.index, 1);

        return state;
    },
    logIn(state) {
        state.isLoggedIn = true;

        return state;
    },
    logOut(state) {
        state.isLoggedIn = false;

        return state;
    }
};
