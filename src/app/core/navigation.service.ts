import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private sectionSource = new BehaviorSubject<string>('about');
  currentSection$ = this.sectionSource.asObservable();

  setSection(section: string) {
    this.sectionSource.next(section);
  }
}