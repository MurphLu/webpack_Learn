import _ from 'lodash';

export default function printMe() {
    console.log('called print.js');
    console.log('called print.js');
    console.log(_.join(['Another', 'module', 'loaded!'], ' '));
}