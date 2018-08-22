import { Component } from '../component';

import style from './layout.css';
import template from './layout.html';
import {createTemplate} from '../htmlCssService';
var design = createTemplate(template, style);

export class Layout extends Component {
    constructor() {
        super();
        this.attachTemplate(design);
    }
}