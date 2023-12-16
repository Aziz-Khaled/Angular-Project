import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = new FormGroup({
    Name: new FormControl('' , Validators.required),
    email: new FormControl('', Validators.required),
    number : new FormControl ('' , Validators.required) , 
    description: new FormControl('' , Validators.required)
  });
}
