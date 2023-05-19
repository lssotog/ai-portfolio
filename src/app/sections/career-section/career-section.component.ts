import { Component } from '@angular/core';
import { externalLinks } from 'src/app/shared/utils/constants/externalLinks';
@Component({
  selector: 'career-section',
  templateUrl: './career-section.component.html',
  styleUrls: ['./career-section.component.css'],
})
export class CareerSectionComponent {
  LinkedInProfile: string = externalLinks.linkedin;
}
