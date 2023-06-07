import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { CareerSectionComponent } from './sections/career-section/career-section.component';
import { PortfolioSectionComponent } from './sections/portfolio-section/portfolio-section.component';
import { IntroSectionComponent } from './sections/intro-section/intro-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';

const appRoutes: Routes = [
  { path: '#home', component: HomeComponent },
  { path: '#about', component: AboutSectionComponent },
  { path: '#portfolio', component: PortfolioSectionComponent },
  { path: '#career', component: SkillsSectionComponent },
  { path: '#contact', component: ContactMeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    NavBarComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    CareerSectionComponent,
    PortfolioSectionComponent,
    IntroSectionComponent,
    FooterComponent,
    HeaderComponent,
    ContactMeComponent,
    FormComponent,
    ModalComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
