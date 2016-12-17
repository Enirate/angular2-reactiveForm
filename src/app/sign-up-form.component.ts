import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
    selector:'signup-form',
    template:`
    <form novalidate>...</form>
    `
})

export class SignupFormComponent implements OnInit {
    User:FormGroup;  //an undeclared var first, whoose return type is Form group.
    constructor() {}

    ngOnInit() {
        this.User = new FormGroup ({
            name: new FormControl(''),
            account: new FormGroup ({
                email:new FormControl(''),
                confirm: new FormControl('')
            })
        });
    }
}