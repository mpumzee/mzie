import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public userForm: FormGroup;
  users: any[] = [];
   constructor(){
    this.userForm = new FormGroup({
      fullName : new FormControl('',Validators.required),
      userName : new FormControl('',Validators.required), //force user to type value
      password: new FormControl('',Validators.required),
      
    })
   }
   ngOnInit(){
    this.getAllUsers();
  }

  getAllUsers(){
    let x = localStorage.getItem("users") || "";
    this.users = JSON.parse(x);
  }


  saveUser(){
    let user = this.userForm.value;
    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users))
    this.userForm.reset();
  }

  deleteUser(user:any){}

}
