import { Component } from '../component';

import style from './transaction.css';
import template from './transaction.html';

export class Transaction extends Component {
    constructor() {
        super();
        this.attachTemplate(template, style);
        this.bindPropertiesToElements([
            'operationId',
            'transactionId',
            'couponId',
            'couponCode',
            'transactionType',
            'comment',
            'date',
            'amount',
            'userBalance',
            'sum',
            'currency',
            'userId',
            'status'
        ]);
        this.bindPropertiesToAttributes([
            'enabled'
        ]);
    }
}