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


  constructor(private http: HttpClient){
    this.getAllIProducts();
    this.stockForm = new FormGroup({
      itemName : new FormControl('',Validators.required),
      orderPrice : new FormControl(0,Validators.required), //force user to type value
      sellingPrice: new FormControl(0,Validators.required),
      expiryDate: new FormControl(0,Validators.required),
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
  let data = this.stockForm.value;
  // let productCollection = collection(this.fs, 'products');
  // return addDoc(productCollection, data);
}

getAllIProducts(){
  const url = "https://localhost:7261/api/stand";
  // this.http.get(url).subscribe(data =>{
  //   this.stands = data;    
  // })
}

deleteProduct(id: number){
  const url = "https://localhost:7261/api/stand/" + id;
  this.http.delete(url).subscribe(data =>{
    console.log(data);
    this.getAllIProducts();
  })
}

}
