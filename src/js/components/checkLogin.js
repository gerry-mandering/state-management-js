import Component from '../lib/component.js';
import store from '../store/index.js';

export default class CheckLogin extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('#is-login')
        });
    }

    render() {
        this.element.textContent = store.state.isLoggedIn ? 'Yes' : 'No';
    }
}