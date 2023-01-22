import { Login } from "../components/login.js";
import { Register } from "../components/register.js";

const main = document.getElementById('main');
const footer = document.getElementById('footer');


const routes = {
    '/': Login,
    //'/login': Login,
    '/register': Register
};

export const load = () => {
    main.innerHTML='';
    footer.innerHTML = '';
    const component = routes[window.location.pathname];
    component();
}

export const onNavigate = (pathname) => {
    console.log("entramos a onNavigate")
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
        );
    //body.appendChild(routes[pathname]())
};

// const component = routes[window.location.pathname]; 
// console.log(component)
// body.appendChild(component());

