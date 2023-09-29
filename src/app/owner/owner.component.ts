import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  public ownerForm: FormGroup;
  errorMessage = "";
  owners: any;

  constructor(private http: HttpClient){
    this.getAllOwner();
    this.ownerForm = new FormGroup({
      fullName : new FormControl('',[Validators.required]),
      mobileNumber : new FormControl('',[Validators.required]), 
      nationalIdNumber : new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required])
    })
  }

  saveOwner(){
    const url = "https://localhost:7261/api/owner";
    this.http.post(url, this.ownerForm.value).subscribe(data =>{
      console.log(data); 
      this.getAllOwner();
      this.ownerForm.reset();
    });    
    
  }

  getAllOwner(){
    const url = "https://localhost:7261/api/owner";
    this.http.get(url).subscribe(data =>{
      this.owners = data;    
    })
  }

  deleteOwner(id: number){
    const url = "https://localhost:7261/api/owner/" + id;
    this.http.delete(url).subscribe(data =>{
      console.log(data);
      this.getAllOwner();
  })
  }

}
