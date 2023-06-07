import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm();
  }

  private contactForm() {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^[a-zA-Z ]+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^[0-9 ]+$/),
        ],
      ],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  save(event: Event) {
    console.log(this.form.value);
  }

  get field() {
    return this.form.controls;
  }
}
