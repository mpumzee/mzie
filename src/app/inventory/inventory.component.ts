import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../Shared/product';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent {
  public stockForm: FormGroup;
  errorMessage = "";
  products: Product[] = [];
  standTypeError = false;
  standNumberError = false;
  editEnabled = false


  constructor(private http: HttpClient){
   
    this.stockForm = new FormGroup({
      itemName : new FormControl('',Validators.required),
      orderPrice : new FormControl(0,Validators.required), //force user to type value
      sellingPrice: new FormControl(0,Validators.required),
      expiryDate: new FormControl(0,Validators.required),
      quantity: new FormControl(0,Validators.required),
    })
    //localStorage.setItem("products",[].toString())
  }

  ngOnInit(){
    this.getAllIProducts();
  }

standTypeValidator(control: FormControl) {
  let standType = control.value;
  console.log(standType);
  
  if(standType == "Commercial" || standType == "Residential"){
    return null;
  }
  return 1;
}

saveProduct(){
  let prod = this.stockForm.value as Product;
  const hasProduct = this.products.some(product => product.itemName == prod.itemName)
  if (hasProduct) {
      let i = this.products.findIndex(x => x.itemName == prod.itemName)
      this.products[i] = prod;
      localStorage.setItem("products", JSON.stringify(this.products));
  }
  else{
    this.products.push(prod);
    localStorage.setItem("products", JSON.stringify(this.products))
  }
  
}

getAllIProducts(){
  let x = localStorage.getItem("products") || "";
  this.products = JSON.parse(x);
}

selectProduct(product: Product){
  this.stockForm.setValue(product);
}

saveEditedProduct(product: Product){
  let x = {} as Product;
  for(let i = 0; i < this.products.length; i++){
    if(this.products[i].itemName == product.itemName){
      this.products[i] = product;
    }
  }

  localStorage.setItem("products", JSON.stringify(this.products));
}
deleteProduct(prod: Product){
  let i = this.products.findIndex(x => x.itemName == prod.itemName)
  this.products.splice(i,1);
  localStorage.setItem("products", JSON.stringify(this.products));
}


}
