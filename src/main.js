// Este es el punto de entrada de tu aplicacion
import { load } from './lib/router.js';

load()

window.onpopstate = load;