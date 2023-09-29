import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.css']
})
export class StandComponent {
  public standForm: FormGroup;
  errorMessage = "";
  stands: any;
  standTypeError = false;
  standNumberError = false;


  constructor(private http: HttpClient){
    this.getAllStands();
    this.standForm = new FormGroup({
      standNumber : new FormControl('',[Validators.required]),
      standSize : new FormControl(1,[Validators.required]), //force user to type value
      standType: new FormControl(Validators.required)
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

saveStand(){
  const url = "https://localhost:7261/api/stand";
  this.standTypeError = !this.standForm.controls["standType"].touched;
  this.standNumberError = !(this.standForm.controls["standNumber"].value != "");
  if(!this.standTypeError && !this.standNumberError ){
    this.http.post(url, this.standForm.value).subscribe(data =>{
    console.log(data); 
    this.getAllStands();
    this.standForm.reset();   
  });  
  }
  
}

getAllStands(){
  const url = "https://localhost:7261/api/stand";
  this.http.get(url).subscribe(data =>{
    this.stands = data;    
  })
}

deleteStand(id: string){
  const url = "https://localhost:7261/api/stand/" + id;
  this.http.delete(url).subscribe(data =>{
    console.log(data);
    this.getAllStands();
  })
}

}
