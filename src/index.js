import './index.css'
import numeral from 'numeral';

const courceVal = numeral(1000).format('$0,0.00');
// debugger;
// eslint-disable-next-line no-console
console.log(`I would like to pay ${courceVal} for this awesome cource!`);
