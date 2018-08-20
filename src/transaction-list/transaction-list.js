import { Component } from '../component';

import style from './transaction-list.css';
import template from './transaction-list.html';

let dependencies = {};

export class TransactionList extends Component {
    static get userService() {
        return dependencies.userService;
    }

    static set userService(dependency) {
        dependencies.userService = dependency;
    }

    get transactions() {
        return Array.from(this.shadowRoot.querySelectorAll('ta-transaction'));
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
        this.attachTemplate(template, style);
        this.records = 20;
        this.currentPage = 1;
     console.log('hello');
     //   this.addShadowEventListener('ta-user', 'click', this.select);
     //   this.addShadowEventListener('ta-pagination', 'change', this.changePage);
    }

    connectedCallback() {
        this.renderList();
    }

    changePage(event) {
        this.currentPage = event.detail.page;
        this.renderList();
    }

   /* select(event, user) {
        this.users.map(user => user.classList.remove('selected'));
        user.classList.add('selected');
        this.renderList();
        console.log("hear you!");
        console.log(TransactionList.userService.getTransactions(user.id,new Date(3600 * 24 * 1000)),new Date());
    }*/

    emptyList() {
        while (this.list.hasChildNodes()) {
            this.list.removeChild(this.list.lastChild);
        }
    }

    renderList() {
        this.emptyList();
        console.log("renderList");

        TransactionList.userService.getUsers(this.offset, this.records).then(response => {
         /*   this.pagination.totalRecords = response['recordsTotal'];
            this.pagination.recordsPerPage = this.records;
            this.pagination.currentPage = this.currentPage;*/
            
            response.data.map(userData => {
                //const User = customElements.get('ta-user');
               // const user = new User();

                let userId = userData['user_id'];
                let dataFrom = new Date(userData['register_date']);
                let dataTo = new Date();
               
                TransactionList.userService.getTransactions(userId, dataFrom, dataTo).then(response => {        
                    response.map(transactionData => {
                        const Transaction = customElements.get('ta-transaction');
                        const transaction = new Transaction();
        
                        transaction.operationId = transactionData['operation_id'];
                        transaction.transactionId = transactionData['transaction_id'];
                        transaction.couponId = transactionData['coupon_id'];
                        transaction.couponCode = transactionData['coupon_code'];
                        transaction.transactionType = transactionData['transaction_type'];
                        transaction.comment = transactionData['comment'];
                        transaction.date = new Date(transactionData['date']);
                        transaction.amount = transactionData['amount'];
                        transaction.userBalance = transactionData['user_balance'];
                        transaction.sum = transactionData['sum'];
                        transaction.currency = transactionData['currency'];
                        transaction.userId = transactionData['user_id'];
                        transaction.status = transactionData['status'];
                        
        
                        this.list.appendChild(transaction);
                    });

                });

            });

        });

        

    }
}
