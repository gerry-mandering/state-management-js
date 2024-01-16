import Component from '../lib/component.js';
import store from '../store/index.js';

export default class LoginButton extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('#login-btn')
        });
        this.element.addEventListener('click', () => {
            if (store.state.isLoggedIn) {
                store.dispatch('logOut');
            } else {
                store.dispatch('logIn');
            }
        });
    }

    render() {
        this.element.textContent = store.state.isLoggedIn ? 'Logout' : 'Login';
    }
};