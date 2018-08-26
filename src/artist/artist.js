import { Component } from '../component';

import style from './artist.css';
import template from './artist.html';
import {createTemplate} from '../htmlCssService';
var design = createTemplate(template, style);

export class Artist extends Component {
    constructor() {
        super();
        this.attachTemplate(design);
        this.bindPropertiesToElements([
            'name',
            'date',
            'site',
            'instagram',
            'information'
        ]);
    }
}