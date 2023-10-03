import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  onSubmit(){
    this.errorMessage = false;
    let username =  this.loginData.controls['username'].value;
    let password =  this.loginData.controls['password'].value;
    
    if(username = "1" && password == "1"){
      this.router.navigate(['menu/dashboard']);
    }
    else{
      this.errorMessage = true;
    }
  }
}
