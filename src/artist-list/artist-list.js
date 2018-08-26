import { Component } from '../component';

import style from './artist-list.css';
import template from './artist-list.html';
import {createTemplate} from '../htmlCssService';
import {artists} from '../artists-service';
var design = createTemplate(template, style);
let dependencies = {};


export class ArtistList extends Component {
    static get userService() {
        return dependencies.userService;
    }

    static set userService(dependency) {
        dependencies.userService = dependency;
    }

    get users() {
        return Array.from(this.shadowRoot.querySelectorAll('ta-user'));
    }

    get pagination() {
        return this.shadowRoot.querySelector('ta-pagination');
    }

    get list() {
        return this.shadowRoot.getElementById('list');
    }

    get currentPage() {
        return +this.getAttribute('current-page');
    }

    set currentPage(value) {
        value ? this.setAttribute('current-page', value) : this.removeAttribute('current-page');
    }

    get offset() {
        return (this.currentPage - 1) * this.records;
    }


    constructor() {
        super();
        this.attachTemplate(design);
        this.records = 20;
        this.currentPage = 1;
        this.addShadowEventListener('ta-user', 'click', this.select);
        this.addShadowEventListener('ta-pagination', 'change', this.changePage);
    }

    connectedCallback() {
        
        this.renderList();
    }

    changePage(event) {
        this.currentPage = event.detail.page;
        this.renderList();
        this.selectedUser = null;
        this.dispatchEvent(new Event('userSelected', {bubbles: true, composed: true}));
    }

    select(event, user) {
        this.users.map(user => user.classList.remove('selected'));
        user.classList.add('selected');
        this.selectedUser = user;
        this.dispatchEvent(new Event('userSelected', {bubbles: true, composed: true}));
        
    }

    emptyList() {
        while (this.list.hasChildNodes()) {
            this.list.removeChild(this.list.lastChild);
        }
    }

    renderList() {
        this.emptyList();
        artists.data.map(artistData =>{
        const Artist = customElements.get('ta-artist');
        const artist = new Artist();
        artist.name = artistData['name'];
        artist.date = new Date(artistData['date']);
        artist.site = artistData['site'];
        artist.name = artistData['name'];
        artist.instagram = artistData['instagram'];
        artist.information = artistData['information'];
            console.log(artist.name);
        this.list.appendChild(artist);
        });
             

    }
}