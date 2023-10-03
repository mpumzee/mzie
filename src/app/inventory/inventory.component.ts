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
    this.getAllIProducts();
    this.stockForm = new FormGroup({
      itemName : new FormControl('',Validators.required),
      orderPrice : new FormControl(0,Validators.required), //force user to type value
      sellingPrice: new FormControl(0,Validators.required),
      expiryDate: new FormControl(0,Validators.required),
      quantity: new FormControl(0,Validators.required),
    })
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
  let product = this.stockForm.value as Product;
  for(let i = 0; i < this.products.length; i++){
    if(this.products[i].itemName == product.itemName){
      this.products[i] = product;
      localStorage.setItem("products", JSON.stringify(this.products));
      break;
    }
    else{
      this.products.push(product);
      localStorage.setItem("products", JSON.stringify(this.products));
      break;
    }
  }
  

  console.log(product);
  
  // let productCollection = collection(this.fs, 'products');
  // return addDoc(productCollection, data);
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
deleteProduct(id: number){
  // this.products.splice();
}


}
