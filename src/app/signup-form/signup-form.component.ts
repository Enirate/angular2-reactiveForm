import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from'../signup.interface'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  user: FormGroup; //defining our user type as an object.
  constructor() { }

  ngOnInit() { //this arrangement/field must tally with the one in the DOM we bind this object with the DOM fields using
    //[FormGroup] = "user" i.e. object name.
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),//form control object accepts two values, 
      //1. field placeholder. 2. rules(using the Validator class. Notices the use of array to hold multiple rules).
      account: new FormGroup ({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }
  onSubmit({value, valid}: {value:User, valid:boolean}) { //method that will be activated when the submit button is clicked
    console.log(value, valid);
  }

}
