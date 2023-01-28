const routes = {};
const templates = {};

/* eslint-disable */

export const route = (path, template) => {
  if (typeof template === 'function') {
    return (routes[path] = template);
  } if (typeof template === 'string') {
    return (routes[path] = templates[template]);
   }
  return;
};

export const template = (name, templateFunction) => {
  return (templates[name] = templateFunction);
};

export const resolveRoute = (routed) => {
  try {
    return routes[routed];
  } catch (e) {
    throw new Error(`Route ${routed} not found`);
  }
};

export const router = () => {
  console.log('entrando a router');
  const url = window.location.hash.slice(1) || '/';
  console.log(url);
  const routed = resolveRoute(url);
  routed();
};

/* eslint-disable */