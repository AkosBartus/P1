import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides = [
    { content: 'The episode orbits? The panic overwhelms a fuse.' },
    { content: 'The lasting astronomer balances the counter reminder.' },
    { content: 'Her birthday calculates past a juice!' },
    { content: 'Lorem' }
  ];
  currentIndex = 0;

  plusSlides(n: number): void {
    this.showSlides(this.currentIndex += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.currentIndex = n);
  }

  showSlides(n: number): void {
    if (n >= this.slides.length) { this.currentIndex = 0; }
    if (n < 0) { this.currentIndex = this.slides.length - 1; }

    for (let i = 0; i < this.slides.length; i++) {
      const slide = document.getElementsByClassName('mySlides')[i] as HTMLElement;
      slide.style.display = 'none';
    }

    for (let i = 0; i < this.slides.length; i++) {
      const dot = document.getElementsByClassName('dot')[i] as HTMLElement;
      dot.classList.remove('active');
    }

    const currentSlide = document.getElementsByClassName('mySlides')[this.currentIndex] as HTMLElement;
    currentSlide.style.display = 'block';

    const currentDot = document.getElementsByClassName('dot')[this.currentIndex] as HTMLElement;
    currentDot.classList.add('active');
  }
}