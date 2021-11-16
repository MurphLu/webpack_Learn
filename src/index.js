import _ from 'lodash';
import './style.css';
import Icon from './image.png';
import Animi from './anmi.gif';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

import printMe from './print.js';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var img = new Image();
    img.src = Icon;
    // var gifI = new Image();
    // gifI.src = Animi;
    element.appendChild(img);
    // element.appendChild(gifI);
    console.log(Data);
    console.log(Notes);
    console.log(toml);
    console.log(yaml);
    console.log(json);

    const btn = document.createElement('button');
    btn.innerHTML = 'click to check import func';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element
}

document.body.appendChild(component());