import { Layout } from './layout/layout';
import { Pagination } from './pagination/pagination';
import { User } from './user/user';
import { UserList } from './user-list/user-list';
import { Transaction } from './transaction/transaction'
import { UserService } from './user-service';
import { TransactionList } from './transaction-list/transaction-list'

import './index.css';

const userService = new UserService('https://livedemo.xsolla.com/fe/test-task/baev/users');

customElements.define('ta-layout', Layout);

customElements.define('ta-pagination', Pagination);

customElements.define('ta-user', User);

customElements.define('ta-transaction', Transaction);


UserList.userService = userService;
TransactionList.userService = userService;
customElements.define('ta-user-list', UserList);
customElements.define('ta-transaction-list', TransactionList);