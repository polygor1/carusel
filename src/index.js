import './sass/main.scss';
import counterSomething from './js/counterSomething';

const fuji = (count) => { console.log('>>>', count, '<<<') };

counterSomething(2, 3, 100, fuji);

