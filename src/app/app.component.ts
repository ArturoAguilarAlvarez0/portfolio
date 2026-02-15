import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    MainLayoutComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
  <div class="page-wrapper">
    <div class="app-shell">
      <app-sidebar></app-sidebar>
      <app-main-layout></app-main-layout>
    </div>
  </div>
`
})
export class AppComponent {
  title = 'portfolio';
}
