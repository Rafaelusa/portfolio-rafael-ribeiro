import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollTrackerDirective } from './directives/scroll-tracker';
import { ExperienceList } from './components/experience-list/experience-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ScrollTrackerDirective,
    ExperienceList
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-web');

  currentTheme = 'tech-gray';

  onThemeChanged(event: any) {
    if (event && typeof event === 'object' && 'id' in event && 'ratio' in event) {
      const { id, ratio } = event;
      
      if (typeof document !== 'undefined') {
        const body = document.body;
        
        // Converte o ratio (0 a 1) para uma porcentagem segura (0% a 100%)
        const percentage = Math.min(Math.max(Math.round(ratio * 100), 0), 100);
        
        // Define dinamicamente o valor da variável de controle correspondente
        body.style.setProperty(`--ratio-${id}`, `${percentage}%`);
      }
    }
  }
}
