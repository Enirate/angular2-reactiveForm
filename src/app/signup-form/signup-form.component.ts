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

  ngOnInit() { //this arrangement/field must tally with the one in the DOM 
    this.user = new FormGroup({
      name: new FormControl(''),
      account: new FormGroup ({
        email: new FormControl(''),
        confirm: new FormControl('')
      })
    });
  }

}
