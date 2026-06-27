import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES, Experience } from '../../data/experience.data';
import { ScrollTrackerDirective } from '../../directives/scroll-tracker';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [
    CommonModule,
    ScrollTrackerDirective
  ],
  templateUrl: './experience-list.html',
  styleUrl: './experience-list.scss',
})
export class ExperienceList {
  experiences: Experience[] = EXPERIENCES;

  @Output() themeProgress = new EventEmitter<{id: string; ratio: number}>();

  onProgress(sectionId: string, ratio: number) {
    this.themeProgress.emit({id: sectionId, ratio});
  }
}
