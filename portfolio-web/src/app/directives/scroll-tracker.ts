import { Directive, ElementRef, EventEmitter, Inject, OnInit, Output, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollTracker]',
  standalone: true
})
export class ScrollTrackerDirective implements OnInit, OnDestroy {
  @Output() sectionProgress = new EventEmitter<number>();
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const thresholds = Array.from({ length: 41 }, (_, i) => i / 40); //Cria um array de thresholds de 0 a 1 com incrementos de 0.025

      const localObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
              // Emite o ID da seção atual para o pai
              this.sectionProgress.emit(entry.intersectionRatio);
          });
        },
        { 
          threshold: thresholds,
          rootMargin: "-10% 0px -10% 0px" // Ajusta a margem para considerar a seção visível quando estiver 10% dentro da viewport
        }
      );

      localObserver.observe(this.el.nativeElement);
      this.observer = localObserver;

    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}

