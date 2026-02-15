import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from 'src/app/sections/about/about.component';
import { ContactComponent } from 'src/app/sections/contact/contact.component';
import { ProjectsComponent } from 'src/app/sections/projects/projects.component';
import { ServicesComponent } from 'src/app/sections/services/services.component';
import { TestimonialsComponent } from 'src/app/sections/testimonials/testimonials.component';
import { NavigationService } from 'src/app/core/navigation.service';
import { ExperienceComponent } from 'src/app/sections/experience/experience.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [
    CommonModule,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    ExperienceComponent
  ],
})
export class MainLayoutComponent {
  activeSection = 'about';

  constructor(private navService: NavigationService) {
    this.navService.currentSection$.subscribe(section => {
      this.activeSection = section;
    });
  }
}
