let routes = {};
let templates = {};

export const route = (path, template) => { 
    if (typeof template === 'function') {
        return routes[path] = template;

    } else if (typeof template === 'string') {
        return routes[path] = templates[template]; 

    } else {
        return;
    }
};

export const template = (name, templateFunction) => { 
    return templates[name] = templateFunction;
};

export const resolveRoute = (route) => {
    try {
        return routes[route]; 
    }
    catch (e) {
        throw new Error(`Route ${route} not found`);
    };
};

export const router = () => {
    let url = window.location.hash.slice(1) || '/';
    console.log(url)
    let route = resolveRoute(url);
    route() ;
};