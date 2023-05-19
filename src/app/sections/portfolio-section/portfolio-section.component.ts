import { Component } from '@angular/core';
import { externalLinks } from 'src/app/shared/utils/constants/externalLinks';

@Component({
  selector: 'portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css'],
})
export class PortfolioSectionComponent {
  githubProfile: string = externalLinks.github;
}
