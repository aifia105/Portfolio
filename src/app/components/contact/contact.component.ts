import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form : FormGroup;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    })
  }
  onSubmit(event: Event){
    event.preventDefault();

    window.location.reload();
  }

}
