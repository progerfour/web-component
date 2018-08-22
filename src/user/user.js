import { Component } from '../component';

import style from './user.css';
import template from './user.html';
function createTemplate(template, style) {
    let tmpl = document.createElement('template');
    style = style ? '<style>' + style + '</style>' : '';
    tmpl.innerHTML = style + template;
    return tmpl;
}

var design = createTemplate(template, style);
export class User extends Component {
    get registerDate() {
        return this._registerDate;
    }

    set registerDate(date) {
        this._registerDate = date;
        this.shadowRoot.getElementById('register-date').innerText = this._registerDate.toLocaleString();
    }

    // set design()
    // {
    //     this._design = createTemplate(template, style);
    // }

    // get design(){
    //     return this._design; 
    // }

    constructor() {
        super();
        //this.attachTemplate(template, style);
        this.attachTemplate2(design);
        this.bindPropertiesToElements([
            'id',
            'name',
            'custom',
            'balance',
            'email',
            'walletAmount',
            'walletCurrency'
        ]);
        this.bindPropertiesToAttributes([
            'enabled'
        ]);
    }
}