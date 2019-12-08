import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {
  title = 'nregaform';
  // public users = [];
  // submitted=true;
  
get village(){
  return this.registrationform.get('village')
}

  constructor(private _formBuilder: FormBuilder) {
 
    }
    registrationform= this._formBuilder.group({
      users:this._formBuilder.array([this.details()       
      // [this.createEmpFormGroup()], [Validators.required]
      ]),

      village:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      gramp:["",Validators.required],
      block:["",Validators.required],
      image:["",Validators.required]



      // village:new FormControl("village"),    (this is comment becAUSE WE USE FORM BUILDER...OTHERWISE WE CAN DO THIS BY THIS METHOD)
      // gramp:new FormControl("gramp"),
      // block:new FormControl("block"),
      // image:new FormControl("")

      
  
  
    });
    details(){
      return this._formBuilder.group({
        Sno: ['', [Validators.required]],
        name: ['', [Validators.required,]],
        lname: ['', [Validators.required,]],
        age: ['', [Validators.required]],
      })
    }

    // add(){
      //  this.users.push({})
  // }
get users() {
  return this.registrationform.get('users') as FormArray;
}
addusers(){
  this.users.push(this._formBuilder.group({ Sno:["", Validators.required],name:["", Validators.required],lname:["", Validators.required], age:["", Validators.required]}));

}

validateAllFormFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => {  
    const control = formGroup.get(field);             
    if (control instanceof FormControl) {             
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        
      this.validateAllFormFields(control);            
    }
  });
}



onSubmit() {


  if (this.registrationform.valid) {
    alert('form submitted');
  } else {
    this.validateAllFormFields(this.registrationform); 
  }
  
}
}

