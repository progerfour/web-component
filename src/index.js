import { Layout } from './layout/layout';
import { Pagination } from './pagination/pagination';
import { User } from './user/user';
import { UserList } from './user-list/user-list';
import { Transaction } from './transaction/transaction'
import { UserService } from './user-service';
import { TransactionList } from './transaction-list/transaction-list'
import { Artist } from './artist/artist';
import { ArtistList } from './artist-list/artist-list';

import './htmlCssService';

import './index.css';


const userService = new UserService('https://livedemo.xsolla.com/fe/test-task/baev/users');

customElements.define('ta-layout', Layout);

customElements.define('ta-pagination', Pagination);

customElements.define('ta-user', User);

customElements.define('ta-transaction', Transaction);


UserList.userService = userService;
customElements.define('ta-user-list', UserList);

TransactionList.userService = userService;
customElements.define('ta-transaction-list', TransactionList);

customElements.define('ta-artist', Artist);
customElements.define('ta-artist-list', ArtistList);



document.addEventListener("DOMContentLoaded", ()=>{
    const transactionlist = document.querySelector('ta-transaction-list'); 

    const userlist = document.querySelector('ta-user-list');
    
    window.addEventListener('userSelected', (event) => {
        transactionlist.user = userlist.selectedUser.id;
    });
});