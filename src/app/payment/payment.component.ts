import { Component } from '@angular/core';
import { Payment } from '../Shared/payment';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
payments: Payment[] = [
  {
    "id": 1,
    "name": "Payment 1",
    "sellingPrice": 10.0,
    "quantity": 0,
    "total": 0,
    "transactionDate": "2023-11-01"
  },
  {
    "id": 2,
    "name": "Payment 2",
    "sellingPrice": 20.0,
    "quantity": 0,
    "total": 0,
    "transactionDate": "2024-02-01"
  },
  {
    "id": 3,
    "name": "Payment 3",
    "sellingPrice": 30.0,
    "quantity": 0,
    "total": 0,
    "transactionDate": "2024-05-01"
  },
  {
    "id": 4,
    "name": "Payment 4",
    "sellingPrice": 40.0,
    "quantity": 0,
    "total": 0,
    "transactionDate": "2024-08-01"
  },
  {
    "id": 5,
    "name": "Payment 5",
    "sellingPrice": 50.0,
    "quantity": 0,
    "total": 0,
    "transactionDate": "2024-11-01"
  }
]
;

totalCost = 0;
  change = 0;
  amountReceived = 0;

constructor(){}

add(payment:Payment){
  payment.quantity = payment.quantity + 1;
  payment.total = payment.sellingPrice * payment.quantity;
  this.total();
}

subtract(payment:Payment){
  payment.quantity = payment.quantity - 1;
  payment.total = payment.sellingPrice * payment.quantity;
  this.total();
}

total(){
  let x  = 0;
  for (const payment of this.payments) {
    console.log(payment.total);    
    x = x + payment.total;
    this.totalCost = x;
  }
}

calculateChange(){
  this.change = this.totalCost - this.amountReceived;
}

onKeypressEvent(event:any){
  this.calculateChange();  
}


}
