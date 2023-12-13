import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "" , component : AppComponent},
  {path: "home", data: {breadcrumb:"Home"}, component: HomeComponent },
  {path: "portfolio", data: {breadcrumb:"Portfolio"}, component: PortfolioComponent},
  {path: "about", data: {breadcrumb:"About"}, component: AboutComponent},
  {path: "skills", data: {breadcrumb:"Skills"}, component: SkillsComponent},
  {path: "contact", data: {breadcrumb:"Contact"}, component: ContactComponent},
  {path: "**", redirectTo: "home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
