import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from 'src/app/core/navigation.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  sections = ['about', 'experience', 'contact'];
  activeSection = 'about';

  constructor(private navService: NavigationService) {
    this.navService.currentSection$.subscribe(section => {
      this.activeSection = section;
    });
  }

  select(section: string) {
    this.navService.setSection(section);
  }
}