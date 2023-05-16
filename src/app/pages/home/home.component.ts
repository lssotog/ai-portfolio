import { Component } from '@angular/core';
import { externalLinks } from 'src/app/shared/utils/constants/externalLinks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  label: string = 'Contact me';
  globantLink: string = externalLinks.globant;
}
