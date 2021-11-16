import _ from 'lodash';
import './style.css';
import Icon from './image.png';
import Animi from './anmi.gif';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

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
    return element
}

document.body.appendChild(component());