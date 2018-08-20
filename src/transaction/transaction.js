import { Component } from '../component';

import style from './transaction.css';
import template from './transaction.html';

export class Transaction extends Component {
    constructor() {
        super();
        this.attachTemplate(template, style);
        this.bindPropertiesToElements([
            'operation_id',
            'transaction_id',
            'coupon_id',
            'coupon_code',
            'transaction_type',
            'comment',
            'date',
            'amount',
            'user_balance',
            'sum',
            'currency',
            'user_id',
            'status'
        ]);
        this.bindPropertiesToAttributes([
            'enabled'
        ]);
    }
}