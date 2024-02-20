import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm:FormGroup;
  education:string[]=[
    "Secondary(10th)",
    "High School(12th)",
    "Diploma",
    "Graduate",
    "Post Graduate"
  ];
  constructor(private _fb:FormBuilder){
    this.empForm=this._fb.group({
      firstName:"",
      lastName:"",
      email:"",
      dob:"",
      gender:"",
      company:"",
      education:"",
      experience:"",
      package:""
    })
  }
  onSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
      
    }
  }
}
