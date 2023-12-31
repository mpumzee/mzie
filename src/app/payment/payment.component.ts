import { Component } from '@angular/core';
import { Payment } from '../Shared/payment';
import { Product } from '../Shared/product';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
payments: Payment[] = [];
products: Product[] = [];
productExpired = false;
productOutofStock = false;

totalCost = 0;
change = 0;
amountReceived = 0;
searchText = ""

constructor(){
  
  
}

ngOnInit(){
  this.getAllProducts();
  this.products.forEach(product => {
    let x = {} as Payment;
    x.id = product.id;
    x.name = product.itemName;
    x.sellingPrice = product.sellingPrice;
    x.quantity = 0;
    x.total = 0;
    x.inventoryLevel = product.quantity;
    x.transactionDate = Date.now().toString();
    this.payments.push(x);  
  });  
}

getAllProducts(){
  let x = localStorage.getItem("products") || "";
  this.products = JSON.parse(x);
}

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
    x = x + payment.total;
    this.totalCost = x;
  }
}

calculateChange(){
  this.change = this.amountReceived - this.totalCost;
  for (let i = 0; i < this.payments.length; i++) {
    if(this.payments[i].name == this.products[i].itemName){
      let x = this.products[i].quantity;
      x = x - this.payments[i].quantity; //reduce stock
      this.products[i].quantity = x;
    }
  }
  localStorage.setItem("products", JSON.stringify(this.products));
  this.getAllProducts();
  
}

onKeypressEvent(event:any){
  this.calculateChange();  
}


search(value: string): void {
  this.payments = this.payments.filter((val) =>
    val.name.toLowerCase().includes(value)
  );
}

}
