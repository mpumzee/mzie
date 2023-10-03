import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Shared/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginData: FormGroup;
  errorMessage = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.loginData = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  // ngOnInit(){
  //   this.getAllIProducts();
  // }

  onSubmit(){
    this.errorMessage = false;
    let username =  this.loginData.controls['username'].value;
    let password =  this.loginData.controls['password'].value;
    
    if(this.authenticate(username, password)){
      this.router.navigate(['menu/dashboard']);
    }
    else{
      this.errorMessage = true;
    }
  }

  authenticate(username: string, password:string){
    let users : User[] = [];
    users = JSON.parse(localStorage.getItem("users") || "");
    if(users.length == 0) return true;
    let hasUser = users.some(x => x.userName == username && x.password == x.password)
    return hasUser == true;
  }
}
