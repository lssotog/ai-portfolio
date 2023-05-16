import { Component } from '@angular/core';
import { hardSkills } from 'src/app/shared/utils/constants/skills';
import { HardSkills } from 'src/app/shared/models/hardSkills.model';

@Component({
  selector: 'skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent {
  hardSkills: HardSkills[] = hardSkills;
}
