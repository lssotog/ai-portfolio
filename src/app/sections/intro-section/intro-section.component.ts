import { Component } from '@angular/core';
import { externalLinks } from 'src/app/shared/utils/constants/externalLinks';

@Component({
  selector: 'intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css'],
})
export class IntroSectionComponent {
  label: string = 'Contact me';
  globantLink: string = externalLinks.globant;
}
