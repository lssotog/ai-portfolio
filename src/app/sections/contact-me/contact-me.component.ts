import { Component } from '@angular/core';

@Component({
  selector: 'contact-me-section',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  modalSwitch!: boolean;

  openModal() {
    this.modalSwitch = true;
  }
}
