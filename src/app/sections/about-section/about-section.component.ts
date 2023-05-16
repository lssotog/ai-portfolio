import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css'],
})
export class AboutSectionComponent implements OnInit {
  quoteResponse: any = {};
  videoId = 'WGRQVAW216I';

  constructor(private router: Router, private quotesService: ApisService) {}
  ngOnInit(): void {
    this.quotesService.getQuotes().subscribe((response) => {
      this.quoteResponse = response;
    });
  }
  returnAboutSectionNav() {
    this.router.navigate(['about']);
  }
}
