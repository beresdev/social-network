import { Login } from "./components/login";
import { Register } from "./components/register";

const main = document.getElementById('main');

const routes = {
    '/login': Login,
    '/register': Register
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    main.appendChild(routes[pathname]())
};

const component = routes[window.location.pathname];

main.appendChild(component());