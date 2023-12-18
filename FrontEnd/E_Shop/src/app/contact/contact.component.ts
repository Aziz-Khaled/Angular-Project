import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder, Validators } from '@angular/forms';
import {ProdcutServiceService} from '../prodcut-service.service'
import { ContactForm } from '../Contact';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor ( private http: HttpClient , private fb :  FormBuilder, private ProductService : ProdcutServiceService ) {}
  Contact!: FormGroup  ;
  ngOnInit(): void {

    this.Contact = this.fb.group({
      Name:['' , Validators.required],
      email:['', Validators.required],
      number :['' , Validators.required] , 
      description : ['' , Validators.required]
  })
  }


  formContact : ContactForm = {
    name: "" , 
    email: "",
    TextBox: "" , 
    PhoneNumber: 0 , 
    
  }




  postC () {
    this.http.post<any>('http://localhost:3000/ContactForm' , this.Contact.value).subscribe((res) => {
    console.log(`form of ${this.Contact.value.Name} added successfully !!`)
    this.Contact = res
    console.log (res)
    this.Contact.reset()
    })
    }
}
