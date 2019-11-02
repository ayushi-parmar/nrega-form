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
  
get village(){
  return this.registrationform.get('village')
}

  constructor(private _formBuilder: FormBuilder) {
 
    }
    registrationform= this._formBuilder.group({
      users:this._formBuilder.array([this._formBuilder.group({Sno:["", Validators.required],name:["", Validators.required],lname:["", Validators.required], age:["", Validators.required]}
        // [this.createEmpFormGroup()], [Validators.required]
      )]),

      village:["",[Validators.required, Validators.minLength(3)]],
      gramp:["",Validators.required],
      block:["",Validators.required],
      image:["",Validators.required]



      // village:new FormControl("village"),    (this is hidden becAUSE WE USE FORM BUILDER...OTHERWISE WE CAN DO THIS BY THIS METHOD)
      // gramp:new FormControl("gramp"),
      // block:new FormControl("block"),
      // image:new FormControl("")

      
  
  
    });

    // add(){
      //  this.users.push({})
  // }
get users() {
  return this.registrationform.get('users') as FormArray;
}
addusers(){
  this.users.push(this._formBuilder.group({ Sno:["", Validators.required],name:["", Validators.required],lname:["", Validators.required], age:["", Validators.required]}));

}
onSubmit() {
  // this.registrationform.reset();
  // TODO: Use EventEmitter with form value
  console.log(this.registrationform.value);
}
}

